import Router from './Router';


export default {
  path: '/json',
  component: Router,
  children: [
    {
      path: '',
      name: 'Json.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'json/index');
      },
    }
  ]
}