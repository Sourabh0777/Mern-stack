import React from "react";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "../shared/components/Navigation/MainNavigation";
import Users from "../user/pages/Users";
import NewPlace from "../places/pages/NewPlace";
import UserPlaces from "../places/pages/UserPlaces";

const Routers = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userID/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Routers;
