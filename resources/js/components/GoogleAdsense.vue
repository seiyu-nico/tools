<template>
<div>
  <div v-if="'local' != env" class="my-3">
    <Adsense
      ins-class="adsbygoogle" 
      ins-style="display:block;" 
      data-ad-client="ca-pub-4233715685036127" 
      data-ad-slot="4004178322" 
      data-ad-format="auto" 
    ></Adsense>
  </div>
  <div v-else class="border">
    ローカル環境ではAdsenseは表示されません
  </div>
</div>
</template>
<script>
import Ads from 'vue-google-adsense';

export default {
  data: function() {
    return {
      env: process.env.MIX_APP_ENV
    }
  },
  components : {
    Ads,
  },
}
</script>