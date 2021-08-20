import { Route, Switch } from 'react-router-dom';
import Header from './components/Layouts/Header/Header';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Footer from './components/Layouts/Footer/Footer';
import TvShow from './pages/TvShow/TvShow';
import Movie from './pages/Movie/Movie';

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
          <Home />
        </Route>
        <Route path="/movie" exact>
          <Movie />
        </Route>
        <Route path="/tv" exact>
          <TvShow />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="*">404 NOT FOUND</Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
