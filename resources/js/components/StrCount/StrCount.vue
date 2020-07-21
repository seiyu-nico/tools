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
  }
}
</script>