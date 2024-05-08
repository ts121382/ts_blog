import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

//Array<RouteRecordRaw>
export const constantRoute = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  // 404
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
  // 其他任意路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
  //   home
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
          hidden: false,
          icon: 'House',
        },
      },
    ],
  },
  //记录
  {
    path: '/record',
    name: 'record',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    children: [
      {
        path: '/record/index',
        component: () => import('@/views/record/index.vue'),
        meta: {
          title: '记录',
          hidden: false,
          icon: 'Collection',
        },
      },
    ],
  },
  // 归档
  {
    path: '/document',
    name: 'document',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    children: [
      {
        path: '/document/index',
        component: () => import('@/views/document/index.vue'),
        meta: {
          title: '归档',
          hidden: false,
          icon: 'Files',
        },
      },
    ],
  },
  //关于
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    children: [
      {
        path: '/about/index',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '关于',
          hidden: false,
          icon: 'User',
        },
      },
    ],
  },
  // 其他
  {
    path: '/other',
    name: 'other',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    children: [
      {
        path: '/other/index',
        component: () => import('@/views/other/index.vue'),
        meta: {
          title: '其他',
          hidden: false,
          icon: 'More',
        },
      },
    ],
  },
]
