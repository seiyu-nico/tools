<template>
  <div>
    <h1>文字数カウント</h1>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1"></label>
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="string"></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div>文字数: {{count()}}</div>
        <div>バイト数: {{byte()}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default { 
  data() {
    return {
      string: '',
    }
  },
  methods: {
    count() {
      // 純粋な文字列カウント
      return this.string.length;
    },
    byte() {
      // バイト数で計算
      return encodeURI(this.string).replace(/%../g, "*").length;
    }
  },
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: '文字数カウント'
    },
    meta: [
      { name: 'description', content: '入力された文字列が何文字かカウントしてくれます。論文/感想文などの文字数指定で利用することができます。' },
      { property: 'og:description', content: '入力された文字列が何文字かカウントしてくれます。論文/感想文などの文字数指定で利用することができます。' },
      { property: 'og:title', content: 'せぃゆーの便利ツール(文字数カウント)' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp/str-count/' },
      { property: 'og:image', content: '' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
    ]
  }
}
</script>