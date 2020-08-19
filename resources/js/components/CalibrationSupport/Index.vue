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
        ここに校正内容が出力される
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
      calibration: state => state.calibration_support.calibration
    })
  },
}
</script>
<style lang="sass" scoped>
</style>