// App Theme Object
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#a4a4a4',
      main: '#101010',
      dark: '#000000',
    },
  },

  font: {
    baseSize: '16px',
  },

  transitions: {
    base: 'ease 200ms',
  },

  size: {
    base: '1024px',
  },

  breakpoints: {
    xl: '1550px',
    lg: '1366px',
    md: '1023px',
    sm: '767px',
    xs: '375px',
  },
});
