import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from './components/Layouts/Header/Header';
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          Home page
        </Route>
        <Route path="/login" exact>
          <Login/> 
        </Route>
        <Route path="*">404 NOT FOUND</Route>
      </Switch>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
