import { INTERNAL_SERVER_ERROR } from '../util';

const state = {
  sentence: '',
  calibrations: [{}],
}

const getters = {
}

const mutations = {
  updateValue(state, data) {
    state[data.key] = data.value;
  },
  setCalibrate(state, calibrations) {
    state.calibrations = calibrations;
  },
}

const actions = {
  async updateValue(context, data) {
    context.commit('updateValue', data);
  },
  async Calibrate (context, data) {
    const response = await axios.post('/api/calibration', {'sentence': context.state.sentence});
    if (INTERNAL_SERVER_ERROR === response.status) {
      alert('エラーが発生しました');
      return false;
    }
    context.commit('setCalibrate', response.data.calibrations);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}