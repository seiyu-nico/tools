import Vue from 'vue';
import VueRouter from 'vue-router';

// ページコンポーネントをインポートする
// import Index from './pages/Index.vue';
// import Base64 from './pages/Base64.vue';
// import UrlEncode from './pages/UrlEncode.vue';
// import StrCount from './pages/StrCount.vue';
import Base64 from './base64';

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => {
      require.ensure(['../pages/Index.vue'], () => {
        resolve(require('../pages/Index.vue'));
      }, 'index');
    }
  },
  {
    ...Base64
  },
  {
    path: '/url-encode',
    name: 'url-encode',
    component: resolve => {
      require.ensure(['../pages/UrlEncode.vue'], () => {
        resolve(require('../pages/UrlEncode.vue'));
      }, 'url_encode');
    }
  },
  {
    path: '/str-count',
    name: 'str-count',
    component: resolve => {
      require.ensure(['../pages/StrCount.vue'], () => {
        resolve(require('../pages/StrCount.vue'));
      }, 'str_count');
    }
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', 
  routes
})


// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router