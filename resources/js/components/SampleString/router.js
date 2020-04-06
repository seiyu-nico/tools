import Router from './Router';

import store from '../../store';

export default {
  path: '/sample-string',
  component: Router,
  children: [
    {
      path: '',
      name: 'SampleString.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'sample-string/index');
      },
    }
  ]
}