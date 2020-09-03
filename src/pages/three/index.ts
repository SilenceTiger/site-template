import { lazy } from 'react'

export default {
  name: 'home',
  routes: [
    {
      name: 'three',
      path: '/app/three',
      component: lazy(() => import('./Three')),
    },
  ],
}