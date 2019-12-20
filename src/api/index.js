const api = {
  auth: {
    login: '/auth/auth',
    logout: '/auth/logout',
    forgetPassword: '/auth/forget-password',
    register: '/auth/register',
    smsCaptcha: '/auth/sms',
    imageCaptcha: '/auth/image',
  },

  user: {
    // get my info
    info: '/user/info',
  },
};

export default api;
