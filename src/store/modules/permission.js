import { asyncRoutes, constantRoutes } from '@/config/router.config';

/**
 * 过滤账户是否有有某一个权限，并将菜单从加载列表移除
 *
 * @param permissions
 * @param route
 */
// eslint-disable-next-line no-unused-vars
function hasPermission(permissions, route) {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0; i < permissions.length; i++) {
      flag = route.meta.permission.includes(permissions[i]);
      if (flag) {
        return true;
      }
    }
  }
  return false;
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 * @param roles
 * @param route
 * @returns {boolean}
 */
// eslint-disable-next-line no-unused-vars
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id);
  }
  return true;
}

/**
 *
 * @param routeMap
 * @param roles
 * @returns {*}
 */
function filterAsyncRoutes(routeMap, roles) {
  return routeMap.filter(route => {
    // 后端暂时没写
    // if (hasPermission(roles.permissionList, route)) {
    //   if (route.children && route.children.length) {
    //     route.children = filterAsyncRoutes(route.children, roles);
    //   }
    //   return true;
    // }
    // return false;
    return true;
  });
}

const permission = {
  state: {
    routes: constantRoutes,
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;
        const accessRoutes = filterAsyncRoutes(asyncRoutes, roles);
        commit('SET_ROUTES', accessRoutes);
        resolve();
      });
    },
  },
};

export default permission;
