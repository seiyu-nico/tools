<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top" style="z-index:1;">
    <div class="collapse navbar-collapse justify-content-start">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{name: 'Index.Index'}" class="navbar-brand" style="margin-left: 50px;">便利ツール</router-link>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <!-- <a class="nav-link">{{ nickname }}</a> -->
        </li>
        <li class="nav-item active">
          <!-- <a class="nav-link" @click="logout">ログアウト</a> -->
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
}
</script>