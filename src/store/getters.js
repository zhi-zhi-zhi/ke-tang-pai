const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  userInfo: state => state.user.userInfo, // 感觉这里用不到
  addRouters: state => state.permission.addRouters,
};

export default getters;
