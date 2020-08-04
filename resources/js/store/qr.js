import {CREATED, VALIDATE_ERROR, INTERNAL_SERVER_ERROR } from '../util';

const state = {
  params: {
    text: '',
    size: 300,
    image: '',
    color: {
      'r': 0, 'g': 0, 'b': 0, 'a': 0,
    },
    background_color: {
      'r': 255, 'g': 255, 'b': 255, 'a': 0,
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
  async create(context, params) {
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