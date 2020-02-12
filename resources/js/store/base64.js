const state = {
  strings: [],
  base: {
    encode: '',
    decode: 'あいうえお'
  }
}

const getters = {
  strings: state => state.strings,
}

const mutations = {
  setStrings(state, strings) {
    console.log(strings);
    state.strings = strings;
  },
  add(state) {
    state.strings.push(state.base);
  }
}

const actions = {
  async encode (context, data) {
    console.log(data);
    const response = await axios.post('/api/base64-encode', data);
    context.commit('setStrings', response.data);
  },
  async decode (context, data) {
    const response = await axios.post('/api/base64-decode', data);
    context.commit('setStrings', response.data);
  },
  async add(context) {
    context.commit('add');
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}