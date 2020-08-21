<template>
  <div>
    <h1>文章校正</h1>
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="sentence_textarea">文章校正</label>
          <textarea class="form-control" id="sentence_textarea" rows="10"
           :value="sentence" @input="updateSentence('sentence', $event)"></textarea>
        </div>
      </div>
      <div class="col-6">
        <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>文字開始位置 </th>
              <th>文字の長さ</th>
              <th>文字</th>
              <th>指摘箇所</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(calibration, key) in calibrations" :key="key">
              <td>{{calibration.StartPos}}</td>
              <td>{{calibration.Length}}</td>
              <td>{{calibration.Surface}}</td>
              <td>{{calibration.ShitekiWord}}</td>
              <td>{{calibration.ShitekiInfo}}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="calibrate()">送信</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  created() {
  },
  methods: {
    updateSentence(key, event) {
      this.$store.dispatch('calibration_support/updateValue', {'key': key, 'value': event.target.value });
    },
    calibrate() {
      this.$store.dispatch('calibration_support/Calibrate', {});
    }
  },
  computed: {
    ...mapState({
      sentence: state => state.calibration_support.sentence,
      calibrations: state => state.calibration_support.calibrations
    })
  },
}
</script>
<style lang="sass" scoped>
</style>