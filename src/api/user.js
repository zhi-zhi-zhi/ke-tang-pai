import { axios } from '@/utils/request';
import api from '@/api';

/**
 * 获取登录用户的信息，包含基本信息、权限信息等
 * @returns {AxiosPromise}
 */
export function getInfo() {
  return axios({
    url: api.user.info,
    method: 'get',
  });
}
