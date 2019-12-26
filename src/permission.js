import Vue from 'vue';
import router from '@/router';
import store from '@/store';

import NProgress from 'nprogress';
import { domTitle, setDocumentTitle } from '@/utils/domUtils';
import { ACCESS_TOKEN } from '@/store/mutation-types';

NProgress.configure({ showSpinner: false });

const testWhiteList = ['index', 'login', 'register', 'test', '404']; // 白名单
// const testWhiteList = ['index', 'login', 'register', 'test', '404', 'home-page']; // 白名单

// todo: 改名字记得这里也得改了 /main
const defaultRoutePath = '/main';

router.beforeEach((to, from, next) => {
  console.log(to.name, to.path);
  NProgress.start();
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`));

  if (Vue.ls.get(ACCESS_TOKEN)) {
    // has token
    if (to.path === '/user/login') {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch('GetInfo')
          .then(res => {
            const roles = res.data && res.data.roles;
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              console.log(store.getters.addRoutes);
              router.addRoutes(store.getters.addRoutes);
              const redirect = decodeURIComponent(from.query.redirect || to.path);
              // 记住上次退出时的页面
              if (to.path === redirect) {
                // hack方法，确保addRoutes已完成
                // set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true });
              } else {
                next({ path: redirect });
              }
            });
          })
          .catch((err) => {
            console.log(err);
            Vue.prototype.$notification.error(({
              message: '错误',
              description: '请求用户信息失败，请重试',
            }));
            store.dispatch('Logout').then(() => {
              next({ path: '/user/login', query: { redirect: to.fullPath } });
            });
          });
      } else {
        next();
      }
    }
  } else {
    if (testWhiteList.includes(to.name)) {
      next();
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } });
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
