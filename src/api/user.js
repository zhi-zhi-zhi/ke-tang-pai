import { myAxios } from '@/utils/request';
import api from '@/api';

/**
 * 获取登录用户的信息，包含基本信息、权限信息等
 * @returns {AxiosPromise}
 */
export function getInfo() {
  return myAxios({
    url: api.user.info,
    method: 'get',
  });
}

export function getCourses() {
  return myAxios({
    url: api.user.courses,
    method: 'get',
  });
}

export function changeTopStatus(courseId) {
  return myAxios({
    url: api.user.changeTopStatus,
    method: 'put',
    data: { id: courseId },
  });
}

export function changePigeonholeStatus(courseId) {
  return myAxios({
    url: api.user.changePigeonholeStatus,
    method: 'put',
    data: { id: courseId },
  });
}

export function changeCoursesPriority(courseIds) {
  return myAxios({
    url: api.user.changeCoursesPriority,
    method: 'put',
    data: [...courseIds],
  });
}

export function createCourse(coursename, classname, semesterYear, semester) {
  return myAxios({
    url: api.user.createCourse,
    method: 'post',
    data: { coursename, classname, semesterYear, semester },
  });
}

export function joinCourse(code) {
  return myAxios({
    url: api.user.joinCourse,
    method: 'post',
    data: { code },
  });
}

/**
 * @Deprecated 已经不用了
 * @returns {AxiosPromise}
 */
export function getCoursesOfPigeonhole() {
  return myAxios({
    url: api.user.coursesOfPigeonhole,
    method: 'get',
  });
}

export function getCourseDetails(courseId) {
  return myAxios({
    url: api.user.courses + '/' + courseId,
    method: 'get',
  });
}

export function getHomeworkList(courseId) {
  return myAxios({
    url: api.user.courses + '/' + courseId + '/homework',
    method: 'get',
  });
}

export function publishHomework(courseId, homework) {
  return myAxios({
    url: api.user.courses + '/' + courseId + '/homework',
    method: 'post',
    data: homework,
  });
}

export function getHomeworkInfo(courseId, homeworkId) {
  return myAxios({
    url: api.user.courses + '/' + courseId + '/homework/' + homeworkId + '/info',
    method: 'get',
  });
}

export function getHomeworkSubmitList(courseId, homeworkId) {
  return myAxios({
    url: api.user.courses + '/' + courseId + '/homework/' + homeworkId,
    method: 'get',
  });
}

export function uploadHomework(courseId, homework) {
  return myAxios({
    url: api.user.courses + '/' + courseId + '/homework/submit',
    method: 'post',
    data: homework,
  });
}

export function updateHomework(courseId, homework) {
  return myAxios({
    url: api.user.courses + '/' + courseId + '/homework',
    method: 'put',
    data: homework,
  });
}

export function register(user) {
  return myAxios({
    url: '/api/auth/register',
    method: 'post',
    data: user,
  });
}
