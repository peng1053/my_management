import {lazy} from 'react';

export interface RouteConfig {
  path: string; //路径
  element?: any; // 组件
  children?: RouteConfig[]; // 子组件
  auth?: boolean; // 是否登录才能展示
  exact?: boolean; //
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import(/* webpackChunkName: "Main" */ '@/pages/main')),
    // children: [
    //   {
    //     path: 'memory',
    //     element: lazy(() => import(/* webpackChunkName: "Memory" */ '@/pages/memory')),
    //   }
    // ]
  },
  {
    path: '/auth',
    element: lazy(() => import(/* webpackChunkName: "Auth" */ '@/pages/auth')),
  },
  {
    path: '/memory',
    // auth: true,
    element: lazy(() => import(/* webpackChunkName: "Memory" */ '@/pages/memory')),
  },
  {
    path: '/digit',
    // auth: true,
    element: lazy(() => import(/* webpackChunkName: "Digit" */ '@/pages/digit')),
  },
  {
    path: '/about',
    element: lazy(() => import(/* webpackChunkName: "About" */ '@/pages/about')),
  },
];
