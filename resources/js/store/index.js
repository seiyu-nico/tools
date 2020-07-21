import Vue from 'vue';
import Vuex from 'vuex';

import base64 from './base64';
import urlencode from './urlencode';
import samplestring from './SampleString';
import json from './json';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    base64,
    urlencode,
    samplestring,
    json,
  }
})

export default store