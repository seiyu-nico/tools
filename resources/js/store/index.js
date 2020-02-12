import Vue from 'vue';
import Vuex from 'vuex';

import base64 from './base64';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    base64
  }
})

export default store