import Index from '../pages/Base64/Index';

export default {
  path: '/base64',
  component: Index,
  children: [
    {
      path: '/',
      name: 'base64',
      component: resolve => {
        require.ensure(['../pages/Base64/Base64.vue'], () => {
        resolve(require('../pages/Base64/Base64.vue'));
        }, 'base64');
      },
    }
  ]
}
