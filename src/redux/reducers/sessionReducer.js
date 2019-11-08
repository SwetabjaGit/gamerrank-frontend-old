import * as actionTypes from '../actions';

const initialState = {
  loggedIn: true,
  user: {
    first_name: 'Shen',
    last_name: 'Zhi',
    email: 'demo@devias.io',
    avatar: '/images/avatars/avatar_11.png',
    discordlogo: '/images/logos/discord-logo.svg',
    nimotvlogo: '/images/logos/nimotv-logo.png',
    logoPlaceholder: '/images/avatars/logo_placeholder.svg',
    coverPlaceholder: '/images/avatars/cover_placeholder.svg',
    bio: 'Brain Director',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        ...initialState
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
