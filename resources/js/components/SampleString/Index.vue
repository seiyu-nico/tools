<template>
  <div>
    <h1>サンプル文字列作成</h1>
    <div class="row">
      <div class="col-4">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">作成したい文字数</label>
          <input class="form-control"  type="number" :value="length" @input="updateLength($event)">
        </div>
      </div>
      <div class="col-2">
      </div>
      <div class="col-6">
        含める文字
        <div v-for="(word, index) in list" :key="`word-${index}`">
          <input class="form-check-input" type="checkbox" 
                 v-model="word['checked']" :value="index"
                 :id="'defaultCheck-' + index">
          <label class="form-check-label" :for="'defaultCheck-' + index">
            {{ word.name }}
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <button type="button" class="btn btn-primary" @click="create()">作成</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea2">生成文字列</label>
          <div>
            <textarea class="form-control" id="exampleFormControlTextarea2" rows="3" v-model="string"></textarea>
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
    create() {
      this.$store.commit('samplestring/create');
    },
    updateLength(e) {
        this.$store.commit('samplestring/updateLength', e.target.value); 
    },
    
  },
  computed: {
    ...mapState({
      string: state => state.samplestring.string,
      length: state => state.samplestring.length,
      list: state => state.samplestring.list,
      words: state => state.samplestring.words,
    })
  },
  head: {
    title: {
      inner: process.env.MIX_APP_NAME,
      separator: '|',
      complement: 'サンプル文字列'
    },
    meta: [
      { name: 'description', content: 'N文字の適応なテキストを簡単にブラウザ上で作成することが可能です。' },
      { property: 'og:description', content: 'N文字の適応なテキストを簡単にブラウザ上で作成することが可能です。' },
      { property: 'og:title', content: 'せぃゆーの便利ツール(サンプル文字列作成)' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://tools.seiyu-nico.jp/sample-string/' },
      { property: 'og:image', content: 'https://img.seiyu-nico.jp/icon/nico_icon.jpg' },
      { property: 'og:site_name', content: 'せぃゆーTools' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@seiyu_nico' },
    ]
  }
}
</script>