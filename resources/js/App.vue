<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
        <RouterView />
    </main>
  </div>
</template>
<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
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