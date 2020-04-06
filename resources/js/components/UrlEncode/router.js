import Router from './Router';

import store from '../../store';

export default {
  path: '/url-encode',
  component: Router,
  children: [
    {
      path: '',
      name: 'UrlEncode.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'url-encode/index');
      },
    }
  ]
}