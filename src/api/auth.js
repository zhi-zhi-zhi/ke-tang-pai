import { axios } from '@/utils/request';

import api from '@/api';

/**
 * todo: 整个api这个模块，找时间用 TS 重构一下
 * parameter: {
 *   username: string,
 *   password: string,
 *   remember_me: true,
 *   captcha: 'ab91',
 * }
 * @param parameter
 * @returns {AxiosPromise}
 */
export function auth(parameter) {
  return axios({
    url: api.auth.login,
    method: 'post',
    data: parameter,
  });
}

/**
 * 啥都不要，带个token就完事了
 * parameter: {}
 * @param parameter
 * @returns {AxiosPromise}
 */
export function logout(parameter) {
  return axios({
    url: api.auth.logout,
    method: 'post',
    data: parameter,
  });
}

/**
 * 获取手机验证码
 * parameter: {
 *   phoneNumber: String
 * }
 * @param parameter
 * @returns {AxiosPromise}
 */
export function getSmsCaptcha(parameter) {
  return axios({
    url: `${api.auth.smsCaptcha}?mobile=${parameter.mobile}`,
    method: 'get',
  });
}

/**
 * 获取图片验证码
 */
export function getImageCaptcha() {
  return axios({
    url: api.auth.imageCaptcha,
    method: 'get',
  });
}
