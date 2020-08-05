<template>
  <div>
    <h1>JSON エンコード/デコード</h1>
    <div class="row">
      <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">エンコード済みテキスト</label>
          <div>
            <textarea class="form-control my-1" rows="15"
                    :value="string.encode"
                    @input="updateStringsForm($event, 'encode')"></textarea>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-12 col-xs-12 mt-md-5">
        <div class="my-1"><button class="btn btn-primary btn-block" @click="decode()">デコード -&gt;</button></div>
        <!-- <div class="my-1"><button class="btn btn-primary btn-block" @click="encode()">&lt;- エンコード</button></div> -->
      </div>
      <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">デコード済みテキスト</label>
          <div>
            <textarea class="form-control my-1" rows="15"
                    :value="string.decode"
                    @input="updateStringsForm($event, 'decode')"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  created() {
    // 最初だけ追加
    // destoryedなどで消してもいいが、ページをリロードするまで残るようにした
  },
  methods: {
    updateStringsForm(e, key) {
      this.$store.dispatch('json/updateStringsFormValue', {'key': key, 'value':e.target.value });
    },
    async encode() {
      this.$store.dispatch('json/encode');
    },
    async decode() {
      console.log('aaa');
      this.$store.dispatch('json/decode');
    },
  },
  computed: {
    ...mapState({
      string: state => state.json.string
    })
  },
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: 'JSON エンコード/デコード'
    },
    meta: [
      { name: 'description', content: 'Jsonエンコード/デコードをブラウザ上で行うことができます。' },
      { property: 'og:description', content: 'Jsonエンコード/デコードをブラウザ上で行うことができます。' },
      { property: 'og:title', content: 'せぃゆーの便利ツール(Jsonエンコード/デコード)' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp/json/' },
      { property: 'og:image', content: 'https://img.seiyu-nico.jp/icon/nico_icon.jpg' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
    ]
  }
}
</script>