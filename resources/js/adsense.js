import Vue from 'vue';
/* アドセンスのインポート */
import Ads from 'vue-google-adsense';

// ローカル以外はadsenseを有効にする
if ('local' == process.env.MIX_APP_ENV) {
  console.log('Adsense is not working because the environment is different');
} else {
  /* アドセンスの使用宣言 */
  Vue.use(require('vue-script2'));
  Vue.use(Ads.Adsense);
  Vue.use(Ads.InArticleAdsense);
  Vue.use(Ads.InFeedAdsense);
}

