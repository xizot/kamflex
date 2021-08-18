import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./components/Layouts/Header/Header";
import Login from "./pages/Login/Login";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E30812",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/" exact>
          Home page
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="*">404 NOT FOUND</Route>
      </Switch>
      <footer>This is footer</footer>
    </ThemeProvider>
  );
}

export default App;
