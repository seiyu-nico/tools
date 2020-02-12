const state = {
  strings: [],
  base: {
    encode: '',
    decode: ''
  }
}

const getters = {
  strings: state => state.strings,
}

const mutations = {
  setStrings(state, strings) {
    state.strings = strings;
  },
  updateStringsFormValue(state, { value, key, key_name }) {
    state.strings[key][key_name] = value;
  },
  add(state) {
    // state.strings.push(state.base);
    // state.strings.push({encode: '', decode:''});
    state.strings.push(JSON.parse(JSON.stringify(state.base)));
  }
}

const actions = {
  async encode(context, data) {
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