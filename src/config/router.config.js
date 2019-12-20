import UserLayout from '@/layout/UserLayout';
import BlankLayout from '@/layout/BlankLayout';
import BasicLayout from '@/layout/BasicLayout';

/**
 * todo：异步路由
 * @type {*[]}
 */
export const asyncRoutes = [
  {
    path: '/',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/home-page',
    children: [
      {
        path: 'home-page',
        name: 'home-page',
        component: () => import('@/views/homePage/homePage'),
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
    redirect: '/home-page',
    children: [
      {
        path: 'home-page',
        name: 'home-page',
        component: () => import('@/views/homePage/homePage'),
      },
    ],
  },
];
