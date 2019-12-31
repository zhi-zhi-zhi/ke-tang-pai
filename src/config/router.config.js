import UserLayout from '@/layout/UserLayout';
import BlankLayout from '@/layout/BlankLayout';
import BasicLayout from '@/layout/BasicLayout';
// eslint-disable-next-line no-unused-vars
import PageView from '@/layout/PageView';
import RouteView from '@/layout/RouteView';
import { courseDetailUse, courseHomeworkListUse } from '@/routerHoc/routeReplaceSelf';
import CourseDetail from '@/views/courseDetail/CourseDetail';
import HomeworkList from '@/views/courseDetail/views/homework/HomeworkList';

/**
 * todo：异步路由
 * @type {*[]}
 */
export const asyncRoutes = [
  {
    path: '/',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/classroom',
    children: [
      {
        path: '/classroom',
        name: 'classroom',
        meta: { title: '课堂', icon: 'form' },
        component: RouteView,
        redirect: '/classroom/index',
        children: [
          {
            path: '/classroom/index',
            name: 'classroom-index',
            component: () => import('@/views/homePage/homePage'),
            meta: { title: '课堂首页', keepAlive: true },
          },
          {
            path: '/classroom/:courseId',
            name: 'course-detail',
            // component: () => import('@/views/courseDetail/CourseDetail'),
            component: courseDetailUse(CourseDetail),
            meta: { title: '课程详情页', keepAlive: true },
            redirect: '/classroom/:courseId/homework',
            children: [
              {
                path: '/classroom/course/class-interaction',
                name: 'class-interaction',
                meta: { title: '课堂互动' },
                component: RouteView,
              },
              {
                path: 'homework',
                name: 'homeworkList',
                meta: { title: '作业列表' },
                // component: () => import('@/views/courseDetail/views/homework/HomeworkList'),
                component: courseHomeworkListUse(HomeworkList),
                children: [
                  {
                    path: ':homeworkId',
                    name: 'homeworkDetail',
                    component: () => import('@/views/myHomework/MyHomework'),
                    redirect: ':homeworkId/submitHomework',
                    children: [
                      {
                        path: 'submitHomework',
                        meta: { title: '作业' },
                        name: 'submitHomework',
                        component: () => import('@/views/myHomework/views/submitHomework/SubmitHomework'),
                      },
                      {
                        path: 'studentHomework',
                        name: 'studentHomework',
                        component: () => import('@/views/myHomework/views/studentHomework/StudentHomework'),
                      },
                      {
                        path: 'homeworkDiscussion',
                        name: 'homeworkDiscussion',
                        component: () => import('@/views/myHomework/views/homeworkDiscussion/HomeworkDiscussion'),
                      },
                    ],
                  },
                ],
              },
              {
                path: '/classroom/course/topic',
                name: 'topic',
                meta: { title: '话题' },
                component: RouteView,
              },
              {
                path: '/classroom/course/datum',
                name: 'datum',
                meta: { title: '资料' },
                component: RouteView,
              },
              {
                path: '/classroom/course/test',
                name: 'course-test',
                meta: { title: '特使' },
                component: RouteView,
              },
              {
                path: '/classroom/course/announcement',
                name: 'announcement',
                meta: { title: '公告' },
                component: RouteView,
              },
            ],
          },
          {
            path: '/classroom/homework/:courseId',
            name: 'my-homework',
            meta: { title: '我的作业' },
            component: () => import('@/views/myHomework/MyHomework'),
          },
        ],
      },
    ],
  },
];

/**
 *基础路由
 * @type {{}[]}
 */
export const constantRoutes = [
  {
    path: '/index',
    redirect: '/index/',
    component: BlankLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index'),
      },
    ],
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true, // 自定义属性，用于判断是否显示
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login'),
      }, {
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/Register'),
      }, {
        path: 'recover',
        name: 'recover',
        component: () => import('@/views/user/Recover'),
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/classroom',
    children: [
      {
        path: '/classroom',
        name: 'classroom',
        meta: { title: '课堂', icon: 'form' },
        component: RouteView,
        redirect: '/classroom/index',
        children: [
          {
            path: '/classroom/index',
            name: 'CardList',
            component: () => import('@/views/homePage/homePage'),
            meta: { title: '课堂首页', keepAlive: true },
          },
        ],
      },
    ],
  },
];
