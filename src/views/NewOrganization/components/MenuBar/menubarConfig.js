import React from 'react';
import { colors } from '@material-ui/core';
import GamesIcon from '@material-ui/icons/Games';

import { Label } from 'components';

export default [
  {
    title: 'CREATE',
    pages: [
      {
        title: 'Basics',
        href: '/organization/create/basics',
        icon: GamesIcon
      },
      {
        title: 'Description',
        href: '/organization/create/description',
        icon: GamesIcon
      },
      {
        title: 'Roster',
        href: '/organization/create/roster',
        icon: GamesIcon
      },
      {
        title: 'Social Handles',
        href: '/organization/create/socialhandles',
        icon: GamesIcon
      },
      {
        title: 'Staff',
        href: '/organization/create/staff',
        icon: GamesIcon
      }
    ]
  },
  {
    title: 'SHARE',
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
    title: 'MANAGE',
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