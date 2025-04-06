import { useRoutes } from 'react-router-dom';
import ThemeSettings from './theme/Theme';
import TopScroll from './components/TopScroll';
import Router from './routes/Router';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  const routing = useRoutes(Router);
  return (
    <ThemeProvider theme={ThemeSettings}>
      <CssBaseline />
      <TopScroll>{routing}</TopScroll>
    </ThemeProvider>
  );
}

export default App
