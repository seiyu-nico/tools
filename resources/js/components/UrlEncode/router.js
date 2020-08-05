import Router from './Router';

import store from '../../store';

export default {
  path: '/url',
  component: Router,
  children: [
    {
      path: '',
      name: 'Url.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'url/index');
      },
    }
  ]
}