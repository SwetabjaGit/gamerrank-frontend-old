import React from 'react';
import { colors } from '@material-ui/core';
import GamesIcon from '@material-ui/icons/Games';

import { Label } from 'components';

export default [
  {
    title: 'Create',
    pages: [
      {
        title: 'Setup',
        href: '/organization/setup',
        icon: GamesIcon
      },
      {
        title: 'Brackets',
        href: '/organization/brackets/summary',
        icon: GamesIcon
      },
      {
        title: 'Streams',
        href: '/organization/streams',
        icon: GamesIcon
      },
      {
        title: 'Publish',
        href: '/organization/publish',
        icon: GamesIcon
      },
    ]
  },
  {
    title: 'Share',
    pages: [
      {
        title: 'Invite Players',
        href: '/organization/inviteplayers',
        icon: GamesIcon
      },
      {
        title: 'Embed Codes',
        href: '/organization/embedcodes',
        icon: GamesIcon
      }
    ]
  },
  {
    title: 'Manage',
    pages: [
      {
        title: 'Participants',
        href: '/organization/participants',
        icon: GamesIcon
      },
      {
        title: 'Email Participants',
        href: '/organization/emailparticipants',
        icon: GamesIcon
      },
      {
        title: 'Seed Bracket',
        href: '/organization/seedbracket',
        icon: GamesIcon
      },
      {
        title: 'Match Dashboard',
        href: '/organization/matchdashboard',
        icon: GamesIcon
      },
      {
        title: 'Activity Feed',
        href: '/organization/activityfeed',
        icon: GamesIcon
      },
    ]
  }
]