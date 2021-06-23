// App Theme Object
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#232323',
      main: '#101010',
      dark: '#000000',
    },
    secondary: {
      light: '#d7a9ff',
      main: '#c27eff',
      dark: '#b061f7',
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
    md: '1065px',
    sm: '767px',
    xs: '375px',
  },
});
