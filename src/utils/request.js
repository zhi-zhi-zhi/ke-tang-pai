import Vue from 'vue';
import axios from 'axios';
import store from '@/store';

import { VueAxios } from '@/utils/axios';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import notification from 'ant-design-vue/es/notification';

// eslint-disable-next-line no-unused-vars
import qs from 'qs';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// axios.defaults.transformRequest = [
//   function(data, headers) {
//     if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
//       // 把一个参数对象格式化为一个字符串
//       return qs.stringify(data);
//     } else if (headers['Content-Type'] === 'multipart/form-data;charset=UTF-8') {
//       return data;
//     } else {
//       headers['Content-Type'] = 'application/json';
//     }
//     return JSON.stringify(data);
//   },
// ];

// 创建 axios 实例，设置基本参数
const service = axios.create({
  baseURL: process.env.VUE_APP_APi_BASE_URL, // api base_url
  timeout: 50000, // 超时时间
});

// 服务器 401 403 500 和其他错误处理
const err = (error) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText || 'error';
    const { status } = response;

    notification.error({
      message: `请求错误 ${status}: ${errorText}`,
      description: response.data.message || '',
    });

    const token = Vue.ls.get(ACCESS_TOKEN);
    if (token && status === 401) { // 令牌过期
      store.dispatch('Logout').then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
    }
  } else if (!response) {
    notification.error({
      message: '您的网络发生异常，无法连接服务器',
      description: '网络异常',
    });
  }

  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN);

  if (token) {
    // 每个请求都带 token, 让后端判断登录状态
    config.headers[ACCESS_TOKEN] = token;
  }
  return config;
}, err);

// response interceptor
// 请求正常就直接返回数据 data
service.interceptors.response.use((response) => {
  return response.data;
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  },
};

export {
  installer as VueAxios,
  service as myAxios,
};
