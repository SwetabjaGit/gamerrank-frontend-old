/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
//import DashboardAnalyticsView from './views/DashboardAnalytics';
//import DashboardDefaultView from './views/DashboardDefault';
//import OverviewView from './views/Overview';
//import PresentationView from './views/Presentation';

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
    ]
  }
];

export default routes;

