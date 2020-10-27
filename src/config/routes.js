import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
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
