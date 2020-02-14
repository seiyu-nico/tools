import Vue from 'vue';
import VueRouter from 'vue-router';

// ページコンポーネントをインポートする
import Index from './pages/Index.vue';
import Base64 from './pages/Base64.vue';
import UrlEncode from './pages/UrlEncode.vue';

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/base64',
    component: Base64,
  },
  {
    path: '/url-encode',
    component: UrlEncode,
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