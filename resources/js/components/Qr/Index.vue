<template>
  <div>
    <h1>QRコード</h1>
    <div class="row">
      <div class="form-group col-8">
        <label for="QrFormControlTextarea2">テキスト</label>
        <div>
          <textarea id="QrFormControlTextarea2" rows="3"
            :value="params.text" @input="updateParams('text', $event)" 
            :class="[errors.text ? 'is-invalid' : '', 'form-control']"></textarea>
          <template v-if="errors.text">
            <div v-for="(error, index) in errors.text" :key=index class="invalid-feedback">{{error}}</div>
          </template>  
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-2">
        <label for="exampleFormControlTextarea1">大きさ(px)</label>
        <input class="form-control"  type="number" :value="params.size" @input="updateParams('size', $event)">
      </div>
      <div class="form-group col-4">
        <label for="inputImages" class="">画像</label>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile"
            @change="selectFile('image', $event)">
          <label class="custom-file-label" for="customFile">{{file_name}}</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <button type="button" class="btn btn-primary" @click="create()">作成</button>
      </div>
    </div>
    <div class="row m-2" v-show="base64_qr">
      <img :src="`data:image/png;base64,${base64_qr}`">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: function() {
    return {
      file_name: 'ファイル選択...',
      }
  },
  created() {
    // 最初だけ追加
    // destoryedなどで消してもいいが、ページをリロードするまで残るようにした
  },
  methods: {
    updateParams(key, event) {
      this.$store.dispatch('qr/updateParams', {'key': key, 'value': event.target.value });
    },
    async selectFile(key, event) {
      console.log(event.target.files[0]);
      this.file_name = event.target.files[0].name;
      this.$store.dispatch('qr/updateParams', { 'key': key, 'value': event.target.files[0] });
    },
    async create() {
      this.$store.dispatch('qr/create');
    },
  },
  computed: {
    ...mapState({
      params: state => state.qr.params,
      base64_qr: state => state.qr.base64_qr,
      errors: state => state.qr.errors,
    })
  },
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: 'QRコード作成'
    },
  }
}
</script>
<style>
.custom-file-input:lang(ja) ~ .custom-file-label::after {
  content: "参照";
}
</style>