import Vue from 'vue';
import router from './router';
import VueAnalytics from 'vue-analytics';

// ローカル以外はアナリティクスを有効にする
if ('local' == process.env.MIX_APP_ENV) {
  console.log('Analytics is not working because the environment is different');
} else {
  Vue.use(VueAnalytics, {
    id: process.env.MIX_GOOGLE_ANALYTICS_UA,
    router
  })
}
