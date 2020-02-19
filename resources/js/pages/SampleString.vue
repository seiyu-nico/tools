<template>
  <div>
    <h1>サンプル文字列作成</h1>
    <div class="row">
      <div class="col-4">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">作成したい文字数</label>
          <input class="form-control"  type="number" v-model="length">
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
export default { 
  data() {
    return {
      string: '',
      length: 1,
      list: [
        { 
          word: 'abcdefghijklmnopqrstuvwxyz',
          name: '小文字アルファベット',
          checked: false,
        },
        { 
          word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          name: '大文字アルファベット',       
          checked: false,
        },
        { 
          word: '0123456789',
          name: '数字',
          checked: false,
        },
        { 
          word: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
          name: 'かな',
          checked: false,
        },
      ],
      words: '',
    }
  },
  methods: {
    create() {
      this.string = '';
      this.createIncludesWord();
      if ('' != this.words ) {
        for (let i = 0; i < this.length; i++) {
          this.string += this.words[Math.floor(Math.random() * this.words.length)];
        }
      } else {
        alert('含める文字を選択してください');
      }
    },
    createIncludesWord() {
      this.words = '';
      this.list.map((value) => {
        if (true == value.checked) {
          this.words += value.word;
        }
      })
    },
  }
}
</script>