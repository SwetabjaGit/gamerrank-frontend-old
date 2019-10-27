/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import PresentationView from './views/Presentation';
//import NewOrganization from './views/NewOrganization';

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
      {
        path: '/organization',
        exact: true,
        component: lazy(() => import('./views/NewOrganization'))
      },
      {
        path: '/organization/:tab',
        exact: true,
        component: lazy(() => import('./views/NewOrganization'))
      },
      {
        path: '/organization/brackets/:tab',
        exact: true,
        component: lazy(() => import('./views/NewOrganization'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/management/customerdetails/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/customerdetails/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      }
    ]
  },
  /* {
    route: '*',
    component: NewOrganization,
    routes: [
      {
        path: '/setup',
        exact: true,
        component: lazy(() => import('./views/CustomerManagementList'))
      },
      {
        path: '/brackets',
        exact: true,
        component: lazy(() => import('./views/CustomerManagementDetails'))
      },
      {
        path: '/streams',
        exact: true,
        component: PresentationView
      }
    ]
  } */
];

export default routes;

