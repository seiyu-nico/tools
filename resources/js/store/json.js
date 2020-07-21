import { INTERNAL_SERVER_ERROR } from '../util';

const state = {
  string: {
    encode: '',
    decode: ''
  }
}

const getters = {
}

const mutations = {
  setString(state, data) {
    state.string[data.key] = data.value;
  },
}

const actions = {
  async updateStringsFormValue(context, data) {
    context.commit('setString', data);
  },
  async encode(context) {
    const response = await axios.post('/api/json-encode', {'text': context.state.string.decode});
    console.log(response.data);
    if (INTERNAL_SERVER_ERROR === response.status) {
      alert('エラーが発生しました');
      return false;
    }
    const data = {
      'key': 'encode',
      'value': response.data.value,
    }
    context.commit('setString', data);
  },
  async decode (context) {
    const response = await axios.post('/api/json-decode', {'text': context.state.string.encode});
    console.log(response.data);
    if (INTERNAL_SERVER_ERROR === response.status) {
      alert('エラーが発生しました');
      return false;
    }
    const data = {
      'key': 'decode',
      'value': response.data.value,
    }
    context.commit('setString', data);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}