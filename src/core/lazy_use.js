import Vue from 'vue';
import VueStorage from 'vue-ls';
import config from '@/config/defaultSettings';

// 引入 按需组件的统一引入文件
import '@/core/lazy_lib/components_use';

// todo: 布局变换时的动画效果，权限路由等，这个最后弄都可以，不着急

Vue.use(VueStorage, config.storageOptions);
