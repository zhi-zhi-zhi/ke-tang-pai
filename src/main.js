import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入 按需组件的统一引入文件
import '@/core/lazy_use';
import '@/permission';

import store from '@/store';
import bootstrap from '@/core/bootstrap';
import { VueAxios } from '@/utils/request';

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import '@/mock';

import '@/components/global.less';

Vue.config.productionTip = false;

// mount axios Vue.$http and this.$http
Vue.use(VueAxios);

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App),
}).$mount('#app');
