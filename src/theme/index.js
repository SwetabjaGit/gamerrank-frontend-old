import { createMuiTheme } from '@material-ui/core/styles';

import DarkTheme from './mainTheme';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import breakpoints from './overrides/breakpoints';
import props from './overrides/props';
import shadows from './overrides/shadows';

/* const theme = createMuiTheme({
  palette,
  typography,
  overrides
}); */

const theme = createMuiTheme({
  spacing: 4,
  palette,
  typography,
  overrides,
  breakpoints,
  props,
  shadows,
  body: DarkTheme.body,
  header: DarkTheme.header,
  sidebar: DarkTheme.sidebar
});

//const themes = variants.map(variant => theme(variant));

export default theme;
