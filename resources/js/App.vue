<template>
  <div class="">
    <Header></Header>
    <div class="page-wrapper chiller-theme toggled overflow-auto">
      <Sidebar></Sidebar>
      <main class="page-content">
        <div class="container-fluid" id="router">
          <transition>
            <RouterView />
          </transition>
        </div>
        <GoogleAdsense></GoogleAdsense>
      </main>
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GoogleAdsense from './components/GoogleAdsense';

export default {
  data: function() {
    return {
      env: process.env.MIX_APP_ENV
    }
  },
  components : {
    Header,
    Sidebar,
    GoogleAdsense,
  },
  head: {
  },
}
</script>
<style>
#router .v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
#router .v-leave-to {
  transform: translate(0, 100px);
  opacity: 0;
}
#router .v-leave-active {
    transition: all 0.5s 0s ease-out;
}

/* 表示されていくスタイル */
#router .v-enter {
  transform: translate(0, -100px);
  opacity: 0;
}
#router .v-enter-to {
  opacity: 1;
}
#router .v-enter-active {
  transition: all 0.5s 1s ease-out;
}
</style>