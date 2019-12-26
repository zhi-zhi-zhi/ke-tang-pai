const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  userInfo: state => state.user.userInfo, // 感觉这里用不到
  addRoutes: state => state.permission.addRoutes,
  topList: state => state.user.courses.topList,
  list: state => state.user.courses.list,
  pigeonholeList: state => state.user.courses.pigeonholeList,
};

export default getters;
