import { blue, green, grey, indigo, red } from '@material-ui/core/colors';

const DarkTheme = {
  name: 'Dark',
  palette: {
    primary: {
      main: blue[700],
      contrastText: '#FFF'
    },
    secondary: {
      main: blue[600],
      contrastText: '#FFF'
    }
  },
  header: {
    color: grey[500],
    background: '#FFFFFF',
    search: {
      color: grey[800]
    },
    indicator: {
      background: red[600]
    }
  },
  sidebar: {
    color: grey[200],
    background: '#1B2430',
    header: {
      color: grey[200],
      background: '#232f3e',
      brand: {
        color: blue[500]
      }
    },
    footer: {
      color: grey[200],
      background: '#232f3e',
      online: {
        background: green[500]
      }
    },
    badge: {
      color: '#000',
      background: '#FFF'
    }
  },
  body: {
    background: '#F9F9FC'
  }
};

export default DarkTheme;