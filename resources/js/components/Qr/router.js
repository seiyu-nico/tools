import Router from './Router';


export default {
  path: '/qr',
  component: Router,
  children: [
    {
      path: '',
      name: 'Qr.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'qr/index');
      },
    }
  ]
}