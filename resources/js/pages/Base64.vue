<template>
  <div>
    <h1>base64</h1>
    <div class="row">
      <div class="col-5">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">base64_encode済みテキスト</label>
          <div>
            <input class="form-control my-1" type="text" v-for="(string, index) in strings" :key="`encode-${index}`" />
          </div>
        </div>
      </div>
      <div class="col-2 mt-5">
        <div class="my-1"><button class="btn btn-primary btn-block" @click="encode()">エンコード -&gt;</button></div>
        <div class="my-1"><button class="btn btn-primary btn-block" @click="decode()">&lt;- デコード</button></div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">base64_decode済みテキスト</label>
          <div>
            <input class="form-control my-1" type="text" v-for="(string, index) in strings" :key="`decode-${index}`" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-secondary" @click="add()">追加</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      strings: [],
      base: {
        encode: '',
        decode: ''
      }
    }
  },
  methods: {
    encode() {
      alert('encode');
    },
    decode() {
      alert('decode');
    },
    add() {
      this.strings.push(this.base);
    },
  },
  created() {
    this.add();
  }
}
</script>