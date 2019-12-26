import Vue from 'vue';
import { login, logout } from '@/api/auth';
import { getCourses, getInfo } from '@/api/user';
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
    courses: {
      topList: [],
      list: [],
      pigeonholeCourses: [],
    },
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
    SET_COURSES: (state, courses) => {
      state.courses = courses;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          const data = res.data;
          // token 存七天
          Vue.ls.set(ACCESS_TOKEN, data.token, 7 * 24 * 60 * 60 * 1000);
          commit('SET_TOKEN', data.token);
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
        getInfo().then(res => {
          const data = res.data;
          if (data.roles && data.roles.permissions.length > 0) {
            const roles = data.roles;
            roles.permissions = data.roles.permissions;
            roles.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => action.action);
                per.actionList = action;
              }
            });
            roles.permissionList = roles.permissions.map(per => per.permissionId);
            commit('SET_ROLES', data.roles);
            commit('SET_INFO', data);
          } else {
            reject(new Error('getInfo: roles must be a non-null array!'));
          }

          commit('SET_NAME', { name: data.name, welcome: welcome() });
          commit('SET_AVATAR', data.avatar);

          resolve(res);
        }).catch(error => {
          reject(error);
        });
      });
    },

    /**
     * 获取用户的课程信息
     * @returns {Promise<unknown>}
     * @constructor
     */
    GetCourses({ commit }) {
      return new Promise((resolve, reject) => {
        getCourses().then(res => {
          // 无需做什么判断了，真的是捞的很，老母猪带乳罩，一套又一套
          commit('SET_COURSES', res.data);
          resolve(res);
        }).catch(err => reject(err));
      });
    },
  },
};

export default user;
