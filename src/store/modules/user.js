import Vue from 'vue';
import { login, logout } from '@/api/auth';
import { getInfo } from '@/api/user';
import { ACCESS_TOKEN } from '@/store/mutation-types';
import { welcome } from '@/utils/util';

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name;
      state.welcome = welcome;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response.result;
          // token 存七天
          Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
          commit('SET_TOKEN', result.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 退出登录
    Logout({ commit }) {
      return new Promise((resolve) => {
        // 这里不需要显示传 token ，axios拦截器会传
        logout().then(() => {
          resolve();
        }).catch(() => {
          resolve();
        }).finally(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          Vue.ls.remove(ACCESS_TOKEN);
        });
      });
    },

    // 获取用户信息
    // todo: 将几个 commit 合成一下
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const result = response.result;

          if (result.role && result.role.permissions.length > 0) {
            const role = result.role;
            role.permissions = result.role.permissions;
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => action.action);
                per.actionList = action;
              }
            });
            role.permissionList = role.permissions.map(per => per.permissionId);
            commit('SET_ROLES', result.role);
            commit('SET_INFO', result.result);
          } else {
            reject(new Error('getInfo: roles must be a non-null array!'));
          }

          commit('SET_NAME', { name: result.name, welcome: welcome() });
          commit('SET_AVATAR', result.avatar);

          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
  },
};

export default user;
