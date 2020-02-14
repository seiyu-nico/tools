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
  }
}
</script>