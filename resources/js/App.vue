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
          <div v-if="'local' != env" class="my-3">
            <Adsense 
              class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-4233715685036127" 
              data-ad-slot="4004178322"
              data-ad-format="auto"
              data-full-width-responsive="true"></Adsense>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Ads from 'vue-google-adsense';

export default {
  data: function() {
    return {
      env: process.env.MIX_APP_ENV
    }
  },
  components : {
    Header,
    Sidebar,
    Ads,
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