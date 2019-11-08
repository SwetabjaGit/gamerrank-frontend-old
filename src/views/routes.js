/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

//import AuthLayout from './layouts/Auth';
//import ErrorLayout from './layouts/Error';
//import Dashboard from './layouts/Dashboard';
import PresentationView from './Presentation';
import NewOrganization from './NewOrganization';
//import CustomerManagementDetails from './CustomerManagementDetails';

const routes = [
  {
    route: '*',
    component: NewOrganization,
    routes: [
      
      {
        path: '/organization/create/:tab',
        exact: true,
        component: lazy(() => import('views/NewOrganization/organize'))
      },
      /* {
        path: '/organization/create',
        exact: true,
        component: lazy(() => import('./CustomerManagementList'))
      },
      {
        path: '/organization/create/:tab',
        exact: true,
        component: lazy(() => import('./CustomerManagementDetails'))
      },
      {
        path: '/organization/create/:id/:tab',
        exact: true,
        component: lazy(() => import('./CustomerManagementDetails'))
      },
      {
        path: '/organization/create/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/organization/streams',
        exact: true,
        component: PresentationView
      },
      {
        path: '/organization/publish',
        exact: true,
        component: PresentationView
      } */
    ]
  }
];

export default routes;

