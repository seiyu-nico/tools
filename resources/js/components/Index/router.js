import Router from './Router';

import store from '../../store';

export default {
  path: '/',
  component: Router,
  children: [
    {
      path: '',
      name: 'Index.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'index/index');
      },
    }
  ]
}