/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import PresentationView from './views/Presentation';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      /* {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: 'chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      }, */
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      }
    ]
  }
];

export default routes;

