import { createTheme } from '@mui/material/styles';

const ThemeSettings = createTheme({
  palette: {
    mode: 'light', 
    primary: {
      main: '#DC2106',
    },
    secondary: {
      main: '#6C757D', // Adjust as needed
      contrastText: "#FFFFFF",
    },
    success: { 
      main: '#13DEB9',
      contrastText: "#FFFFFF", 
    },
    warning: {
      main: '#FFC107', // Typical warning color (yellow)
      contrastText: "#000000",
    },
    error: {
      main: '#DC3545', // Typical error color (red)
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "36px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "28px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "21px",
      lineHeight: "25.6px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "25.6px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19.2px",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21.34px",
    },
    body2: {
      fontSize: "12px",
      letterSpacing: "0px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus, &:active": {
            outline: "none", // Removes default focus outline
            boxShadow: "none", // Removes MUI focus shadow
          },
        },
      },
    },
  },
});

export default ThemeSettings;
