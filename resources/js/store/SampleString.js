const state = {
  string: '',
  length: 1,
  list: [
    { 
      word: 'abcdefghijklmnopqrstuvwxyz',
      name: '小文字アルファベット',
      checked: false,
    },
    { 
      word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      name: '大文字アルファベット',       
      checked: false,
    },
    { 
      word: '0123456789',
      name: '数字',
      checked: false,
    },
    { 
      word: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
      name: 'かな',
      checked: false,
    },
  ],
  words: '',
}

const getters = {
  string: state => state.string,
  length: state => state.length,
  list: state => state.list,
  words: state => state.words,
}

const mutations = {
  async create(state) {
    state.string = '';
    state.words = '';
    state.list.map((value) => {
      if (true == value.checked) {
        state.words += value.word;
      }
    })
    if ('' != state.words) {
      for (let i = 0; i < state.length; ++i) {
        state.string += state.words[Math.floor(Math.random() * state.words.length)];
      }
    } else {
      alert('含める文字を選択してください');
    }
  },
  updateLength(state, value) {
    state.length = value;
  },
}

const actions = {
  async create(context, data) {
    context.commit('create', data);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
} 