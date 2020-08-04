export default {
  data: function () {
    return {
      form_data: new FormData(),
    }
  },
  methods: {
    // multipart/form-data用のFormData作成関数
    async createFormData(path, obj) {
        _.each(obj, (val, key) => {
          let nextPath = path.length > 0 ? path + '[' + key + ']' : key
          if (_.isArray(obj)) {
            nextPath = path + '[]'
          }
          if (val instanceof File) {
            this.form_data.append(nextPath, val) // Fileは突っ込む
            return
          }
          if (_.isObject(val)) {
            // File以外のオブジェクト（配列含む）だったら再帰
            this.createFormData(nextPath, val);
            return
          }
          this.form_data.append(nextPath, val) // 突っ込む
        })
      // 再帰関数を起動して、値を突っ込まれたFormDataを返す
      return this.form_data;
    }
  },
}