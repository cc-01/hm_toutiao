import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import clientRouter from './router/client';
import adminRouter from './router/admin';
import store from './store';
import config from './config/env'
const { envMode = 'admin' } = process.env;

import './assets/css/common.less';
import './assets/font/iconfont.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: (envMode === 'admin' ? adminRouter : clientRouter),
  store,
  template: '<App/>',
  components: { App }
});
