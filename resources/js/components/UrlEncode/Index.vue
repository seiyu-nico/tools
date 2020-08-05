<template>
  <div>
    <h1>urlencode/urldecode</h1>
    <div class="row">
      <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">url_encode済みテキスト</label>
          <div>
            <input class="form-control my-1" 
                    type="text" v-for="(string, index) in strings" 
                    :key="`encode-${index}`" 
                    :value="string.encode"
                    @input="updateStringsForm($event, index, 'encode')"/>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-12 col-xs-12 mt-md-5">
        <div class="my-1"><button class="btn btn-primary btn-block" @click="decode()">デコード -&gt;</button></div>
        <div class="my-1"><button class="btn btn-primary btn-block" @click="encode()">&lt;- エンコード</button></div>
        <div class="my-1 d-none d-md-block"><button class="btn btn-secondary" @click="add()">追加</button></div>
      </div>
      <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">url_decode済みテキスト</label>
          <div>
            <input class="form-control my-1" 
                    type="text" v-for="(string, index) in strings" 
                    :key="`decode-${index}`" 
                    :value="string.decode"
                    @input="updateStringsForm($event, index, 'decode')"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  methods: {
    updateStringsForm(e, key, key_name) {
      this.$store.commit('urlencode/updateStringsFormValue', { value:e.target.value, key:key, key_name });
    },
    async encode() {
      await this.$store.dispatch('urlencode/encode', this.$store.getters['urlencode/strings']);
    },
    async decode() {
      await this.$store.dispatch('urlencode/decode', this.$store.getters['urlencode/strings']);
    },
    async add() {
      await this.$store.dispatch('urlencode/add');
    },
  },
  created() {
    // 最初だけ追加
    // destoryedなどで消してもいいが、ページをリロードするまで残るようにした
    if (0 == this.strings.length) {
      this.add();
    }
  },
  computed: {
    ...mapState({
      strings: state => state.urlencode.strings
    })
  },
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: 'Urlエンコード/デコード'
    },
    meta: [
      { name: 'description', content: 'URLエンコード/デコードをブラウザ上で行うことができます。' },
      { property: 'og:description', content: 'URLエンコード/デコードをブラウザ上で行うことができます。' },
      { property: 'og:title', content: 'せぃゆーの便利ツール(URLエンコード/デコード)' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp/url/' },
      { property: 'og:image', content: 'https://img.seiyu-nico.jp/icon/nico_icon.jpg' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
    ]
  }
}
</script>