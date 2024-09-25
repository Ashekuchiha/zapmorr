import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeSettings } from './theme/Theme';
import RTL from './layouts/full/shared/customizer/RTL';
import ScrollToTop from './components/shared/ScrollToTop';
import Router from './routes/Router';

import  Service from  "../src/views/MyWidgets/ashik/Service"
import  ServiceCategory from  "../src/views/MyWidgets/ashik/ServiceCategory"

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state) => state.customizer);

  return (
    // <ThemeProvider theme={theme}>
    //   <RTL direction={customizer.activeDir}>
    //     <CssBaseline />
    //     <ScrollToTop>{routing}</ScrollToTop>
    //   </RTL>
    // </ThemeProvider>
    <>
        <ServiceCategory/>
        <Service/>
    </>
  );
}

export default App;
