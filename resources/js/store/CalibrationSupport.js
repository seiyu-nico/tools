import { INTERNAL_SERVER_ERROR } from '../util';

const state = {
  sentence: '',
  calibration: [{}],
}

const getters = {
}

const mutations = {
  updateValue(state, data) {
    state[data.key] = data.value;
  },
  setCalibrate(state, calibration) {
    console.log(calibration);
    state.calibration = calibration;
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
    context.commit('setCalibrate', response.data.calibration);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}