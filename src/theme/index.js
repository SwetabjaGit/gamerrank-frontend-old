import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import breakpoints from './overrides/breakpoints';
import shadows from './overrides/shadows';
import DarkTheme from './mainTheme';
import props from './overrides/props';

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  breakpoints,
  shadows,
  props,
  body: DarkTheme.body,
  header: DarkTheme.header,
  sidebar: DarkTheme.sidebar,
});

/* const theme = createMuiTheme({
  palette: DarkTheme.palette,
  typography: DarkTheme.typography,
  body: DarkTheme.body,
  header: DarkTheme.header,
  sidebar: DarkTheme.sidebar,
  overrides,
  breakpoints,
  shadows
}); */

//const themes = variants.map(variant => theme(variant));

export default theme;
