import Router from './Router';

import store from '../../store';

export default {
  path: '/str-count',
  component: Router,
  children: [
    {
      path: '',
      name: 'StrCount.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'str-count/index');
      },
    }
  ]
}