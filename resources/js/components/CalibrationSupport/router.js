import Router from './Router';

export default {
  path: '/calibration-support',
  component: Router,
  children: [
    {
      path: '',
      name: 'CalibrationSupport.Index',
      component: resolve => {
        require.ensure(['./Index.vue'], () => {
        resolve(require('./Index.vue'));
        }, 'calibration-support/index');
      },
    }
  ]
}