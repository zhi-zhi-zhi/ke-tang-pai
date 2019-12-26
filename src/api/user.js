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

export function getCourses() {
  return axios({
    url: api.user.courses,
    method: 'get',
  });
}

export function changeTopStatus(courseId) {
  return axios({
    url: api.user.changeTopStatus,
    method: 'put',
    data: { id: courseId },
  });
}

export function changePigeonholeStatus(courseId) {
  return axios({
    url: api.user.changePigeonholeStatus,
    method: 'put',
    data: { id: courseId },
  });
}

export function changeCoursesPriority(courseIds) {
  return axios({
    url: api.user.changeCoursesPriority,
    method: 'put',
    data: [...courseIds],
  });
}

export function createCourse(coursename, classname, semesterYear, semester) {
  return axios({
    url: api.user.createCourse,
    method: 'post',
    data: { coursename, classname, semesterYear, semester },
  });
}

export function joinCourse(code) {
  return axios({
    url: api.user.joinCourse,
    method: 'post',
    data: { code },
  });
}

export function getCoursesOfPigeonhole() {
  return axios({
    url: api.user.coursesOfPigeonhole,
    method: 'get',
  });
}
