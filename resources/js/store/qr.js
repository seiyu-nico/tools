import {CREATED, INTERNAL_SERVER_ERROR } from '../util';

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
    };
    const response = await axios.post('/api/qr', params, config).catch(error => error.response || error);
    console.log(response);
    if (response.status === CREATED) {
      context.commit('setQr', response.data.qr);
      return response;
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