import Vue from 'vue';
import VueRouter from 'vue-router';

// ページコンポーネントをインポートする
import Index from './pages/Index.vue';
import Base64 from './pages/Base64.vue';
import UrlEncode from './pages/UrlEncode.vue';
import StrCount from './pages/StrCount.vue';
import SampleString from './pages/SampleString.vue';


// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/base64',
    name: 'base64',
    component: Base64,
  },
  {
    path: '/url-encode',
    name: 'url-encode',
    component: UrlEncode,
  },
  {
    path: '/str-count',
    name: 'str-count',
    component: StrCount,
  },
  {
    path: '/sample-string',
    name: 'sample-string',
    component: SampleString,
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