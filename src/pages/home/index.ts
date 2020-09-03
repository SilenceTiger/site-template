import { lazy } from 'react'

export default {
  name: 'home',
  routes: [
    {
      name: '首页',
      path: '/app/home',
      component: lazy(() => import('./Home')),
    },
  ],
}