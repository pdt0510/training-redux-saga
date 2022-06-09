import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  color: {
    primary1: '#4CAF50',
    secondary: '#00BCD4',
    error: '#00BCD4',
  },
  typography: {
    fontFamily: 'roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#FFECB3',
    textColor: 'yellow',
    border: '#ccc',
  },
});

export default theme;
