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
        path: '/organization/setup',
        exact: true,
        component: lazy(() => import('./CustomerManagementList'))
      },
      {
        path: '/organization/brackets/:tab',
        exact: true,
        component: lazy(() => import('./CustomerManagementDetails'))
      },
      {
        path: '/organization/brackets/:id/:tab',
        exact: true,
        component: lazy(() => import('./CustomerManagementDetails'))
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
      }
    ]
  }
];

export default routes;

