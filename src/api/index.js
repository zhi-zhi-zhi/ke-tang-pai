const api = {
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    forgetPassword: '/api/auth/forget-password',
    register: '/api/auth/register',
    smsCaptcha: '/api/auth/sms',
    imageCaptcha: '/api/auth/image',
  },

  user: {
    // get my info
    info: '/api/system/user/info',
    courses: '/api/system/user/courses',
    changeTopStatus: '/api/system/user/courses/top',
    changePigeonholeStatus: '/api/system/user/courses/pigeonhole',
    changeCoursesPriority: '/api/system/user/courses/priority',
    createCourse: '/api/system/user/courses/create',
    joinCourse: '/api/system/user/courses/join',
    coursesOfPigeonhole: '/api/system/user/courses/pigeonhole',
  },
};

export default api;
