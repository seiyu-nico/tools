<template>
  <div>
    <h1>base64</h1>
    <div class="row">
      <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">base64_encode済みテキスト</label>
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
          <label for="exampleFormControlTextarea1">base64_decode済みテキスト</label>
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
      this.$store.commit('base64/updateStringsFormValue', { value:e.target.value, key:key, key_name });
    },
    async encode() {
      await this.$store.dispatch('base64/encode', this.$store.getters['base64/strings']);
    },
    async decode() {
      await this.$store.dispatch('base64/decode', this.$store.getters['base64/strings']);
    },
    async add() {
      await this.$store.dispatch('base64/add');
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
      strings: state => state.base64.strings
    })
  },
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: 'Base64エンコード/デコード'
    },
    meta: [
      { name: 'description', content: 'Base64エンコード/デコードをブラウザ上で行うことができます。' },
      { property: 'og:description', content: 'Base64エンコード/デコードをブラウザ上で行うことができます。' },
      { property: 'og:title', content: 'せぃゆーの便利ツール(Base64エンコード/デコード)' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp/base64/' },
      { property: 'og:image', content: 'https://img.seiyu-nico.jp/icon/nico_icon.jpg' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@seiyu_nico' },
   ]
  }
}
</script>