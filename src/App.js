import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Footer from './components/Layouts/Footer/Footer';
import aos from 'aos';
import 'aos/dist/aos.css';
import { Suspense, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { routes } from './config/routes';
import ProtectedRoute from './components/Commons/ProtectedRoute/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './slices/auth.slice';
import { HistoryOutlined } from '@material-ui/icons';
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    aos.init({
      offset: 120,
    });
    aos.refresh();

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      dispatch(
        authActions.verifiedAuth({
          accessToken,
          refreshToken,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (user.verified === false) {
      console.log(user.verified);
      return history.push('/confirm-email');
    }
  }, [user, history, location.pathname]);
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  if (route.protected) {
                    return (
                      <ProtectedRoute {...props} currentPath={route.path}>
                        <route.component />
                      </ProtectedRoute>
                    );
                  }
                  return <route.component {...route.props} />;
                }}
              />
            );
          })}
          <Route path="*">404 NOT FOUND</Route>
        </Switch>
      </Suspense>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
