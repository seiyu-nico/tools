<template>
  <div class="">
    <Header></Header>
    <div class="page-wrapper chiller-theme toggled overflow-auto">
      <Sidebar></Sidebar>
      <main class="page-content">
        <div class="container-fluid">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
  components : {
    Header,
    Sidebar,
  },
  head: {
    meta() {
      return [
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
          { charset: 'utf-8' },
        ]
    },
  },
}
</script>