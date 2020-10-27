import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Bill: {
    path: '/bill',
    component: lazy(() => import('../pages/Bill'))
  },
  Table: {
    path: '/table',
    component: lazy(() => import('../pages/Table'))
    
  },
  SignUp: {
    path: '/signup',
    component: lazy(() => import('../pages/SignUp'))
    
  },
  Profile: {
    path: '/profile',
    component: lazy(() => import('../pages/Profile'))
    
  },
  EditProfile: {
    path: '/editprofile',
    component: lazy(() => import('../pages/EditProfile'))
  }
}
