<template>
  <div class="my-3">
    <router-link :to="{ name: 'index'}">TOP</router-link><br>
    <router-link :to="{ name: 'base64'}">base64エンコード/デコード</router-link><br>
    <router-link :to="{ name: 'url-encode'}">urlエンコード/デコード</router-link><br>
    <router-link :to="{ name: 'str-count'}">文字数カウント</router-link><br>
    <router-link :to="{ name: 'sample-string'}">文字列生成</router-link><br>
  </div>
</template>
<script>
</script>