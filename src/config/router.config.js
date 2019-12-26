import UserLayout from '@/layout/UserLayout';
import BlankLayout from '@/layout/BlankLayout';
import BasicLayout from '@/layout/BasicLayout';
// eslint-disable-next-line no-unused-vars
import PageView from '@/layout/PageView';
import RouteView from '@/layout/RouteView';

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
            path: '/classroom/course',
            name: 'course-detail',
            component: () => import('@/views/courseDetail/CourseDetail'),
            meta: { title: '课程详情页', keepAlive: true },
            redirect: '/classroom/homework',
            children: [
              {
                path: '/classroom/course/class-interaction',
                name: 'class-interaction',
                meta: { title: '课堂互动' },
                component: RouteView,
              },
              {
                path: '/classroom/course/homework',
                name: 'homework',
                meta: { title: '作业' },
                component: () => import('@/views/courseDetail/views/homework/homework'),
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
