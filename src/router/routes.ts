import { lazyLoad } from '@/router/routerMold'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyLoad(() => import(/* webpackChunkName: "Main" */ '@/pages/main')),
    // children: [
    //   {
    //     path: 'memory',
    //     element: lazyLoad(() => import(/* webpackChunkName: "Memory" */ '@/pages/memory')),
    //   }
    // ]
  },
  {
    path: '/memory',
    element: lazyLoad(() => import(/* webpackChunkName: "Memory" */ '@/pages/memory')),
  },
  {
    path: '/auth',
    element: lazyLoad(() => import(/* webpackChunkName: "Auth" */ '@/pages/auth')),
  },
  {
    path: '/about',
    element: lazyLoad(() => import(/* webpackChunkName: "About" */ '@/pages/about')),
  }
];
