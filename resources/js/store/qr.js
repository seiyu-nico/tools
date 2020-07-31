import {CREATED, VALIDATE_ERROR, INTERNAL_SERVER_ERROR } from '../util';

const state = {
  params: {
    text: '',
    size: 100,
    image: '',
    color: {
      
    },
    background_color: {

    },
    error_correction: 'H',
  },
  error_corrections: [
    'L', 'Q', 'M', 'H'
  ],
  base64_qr: '',
  errors: {},
}

const getters = {
}

const mutations = {
  setParams(state, data) {
    state.params[data.key] = data.value;
  },
  setQr (state, data) {
    state.base64_qr = data;
  },
  setErrors (state, data) {
    state.errors = data;
  }
}

const actions = {
  async updateParams(context, data) {
    context.commit('setParams', data);
  },
  async create(context) {
    const params = new FormData();
    for(let key of Object.keys(context.state.params)) {
      params.append(key, context.state.params[key]);
    }
    const config = {
      headers: {
          'content-type': 'multipart/form-data',
      }
    }
    // APIを投げる前にエラーを空にする
    context.commit('setErrors', {});
    const response = await axios.post('/api/qr', params, config).catch(error => error.response || error);
    if (CREATED === response.status) {
      context.commit('setQr', response.data.qr);
      return response;
    } else if (VALIDATE_ERROR === response.status) {
      context.commit('setErrors', response.data.errors);
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}