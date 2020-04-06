import Router from './Router';

import store from '../../store';

export default {
  path: '/base64',
  component: Router,
  children: [
    {
      path: '',
      name: 'Base64.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'base64/index');
      },
    }
  ]
}