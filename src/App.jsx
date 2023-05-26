import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Users from './User/Pages/Users';
import NewPlace from './Places/Pages/NewPlace';
import MainNavigation from './shared/Components/Navigation/MainNavigation';

function App() {

  return (
    <Router>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact  >
          <Users />
        </Route>
        <Route path='/places/new' exact  >
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
