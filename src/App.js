import { Route, Switch } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Footer from './components/Layouts/Footer/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E30812',
      contrastText: '#fff',
    },
    secondary: {
      main: '#131722',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path="/" exact>
          Home page
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact>
          <ResetPassword />
        </Route>
        <Route path="*">404 NOT FOUND</Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
