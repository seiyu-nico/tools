<template>
  <div>
    <h1>QRコード</h1>
    <div class="row">
      <div class="form-group col-8">
        <label for="QrFormControlTextarea2">テキスト</label>
        <div>
          <textarea id="QrFormControlTextarea2" rows="5"
            :value="params.text" @input="updateParams('text', $event)" 
            :class="[errors.text ? 'is-invalid' : '', 'form-control']"></textarea>
          <template v-if="errors.text">
            <div v-for="(error, index) in errors.text" :key=index class="invalid-feedback">{{error}}</div>
          </template>  
        </div>
      </div>
      <div class="form-group col-4">
        <div class="row">
          <div class="form-group col-12">
            <label for="exampleFormControlTextarea1">大きさ(px)</label>
            <input class="form-control"  type="number" :value="params.size" @input="updateParams('size', $event)">
          </div>
          <div class="form-group col-12">
            <label for="inputImages" class="">画像</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile"
                @change="selectFile('image', $event)">
              <label class="custom-file-label" for="customFile">{{file_name}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 色 -->
    <div class="row">
      <div class="form-group col-2">
        <div class="view_color border border-dark" :style="{background: 'rgb(' + params.color.r + ', ' + params.color.g + ', ' + params.color.b + ')'}"></div>
      </div>
      <div class="form-group color-form col-4">
        <label for="exampleFormControlTextarea1">点の色</label>
        <div class="rbg-text">
          <span :style="{background: 'rgb(' + params.color.r +', 0, 0)'}">R</span>
          <input type="range" name="r" id="r" max="255" :value="params.color.r" @change="updateColor('color', 'r', $event)">
        </div>
        <div class="rbg-text">
          <span :style="{background: 'rgb(0, ' + params.color.g + ', 0)'}">G</span>
          <input type="range" name="g" id="g" max="255" :value="params.color.g" @change="updateColor('color', 'g', $event)">
        </div>
        <div class="rbg-text">
          <span :style="{background: 'rgb(0, 0, ' + params.color.b + ')'}">B</span>
          <input type="range" name="b" id="b" max="255" :value="params.color.b" @change="updateColor('color', 'b', $event)">
        </div>
      </div>
      <div class="form-group col-2">
        <div class="view_color border border-dark" :style="{background: 'rgb(' + params.background_color.r + ', ' + params.background_color.g + ', ' + params.background_color.b + ')'}"></div>
      </div>
      <div class="form-group color-form col-4">
        <label for="exampleFormControlTextarea1">背景色</label>
        <div class="rbg-text">
          <span :style="{background: 'rgb(' + params.background_color.r +', 0, 0)'}">R</span>
          <input type="range" name="r" id="r" max="255" :value="params.background_color.r" @change="updateColor('background_color', 'r', $event)">
        </div>
        <div class="rbg-text">
          <span :style="{background: 'rgb(0, ' + params.background_color.g + ', 0)'}">G</span>
          <input type="range" name="g" id="g" max="255" :value="params.background_color.g" @change="updateColor('background_color', 'g', $event)">
        </div>
        <div class="rbg-text">
          <span :style="{background: 'rgb(0, 0, ' + params.background_color.b + ')'}">B</span>
          <input type="range" name="b" id="b" max="255" :value="params.background_color.b" @change="updateColor('background_color', 'b', $event)">
        </div>
      </div>
    </div>
    <!-- /色 -->
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
import FormData from '../../mixin/FormData';
export default {
    mixins: [FormData],
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
      const params = await this.createFormData('', this.params);
      this.$store.dispatch('qr/create', params);
    },
    updateColor(key, sub_key, evnet) {
      this.$store.dispatch('qr/updateColorParams', {'key': key, 'sub_key': sub_key, 'value': event.target.value });
    }
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
    meta: [
      { name: 'description', content: 'ブラウザ上でQRコードの作成が可能です。画像の追加, 色の変更もすることが可能です。' },
      { property: 'og:description', content: 'ブラウザ上でQRコードの作成が可能です。画像の追加, 色の変更もすることが可能です。' },
      { property: 'og:title', content: 'せぃゆーの便利ツール(QRコード)' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp/qr/' },
      { property: 'og:image', content: 'https://img.seiyu-nico.jp/icon/nico_icon.jpg' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@seiyu_nico' },
    ]
  }
}
</script>
<style>
.custom-file-input:lang(ja) ~ .custom-file-label::after {
  content: "参照";
}
.rbg-text {
  color:white;
}
.view_color {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>