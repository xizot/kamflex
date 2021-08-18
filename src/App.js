import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">This is header</header>
      <Switch>
        <Route path="/" exact>
          Home page
        </Route>
        <Route path="*">404 NOT FOUND</Route>
      </Switch>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
