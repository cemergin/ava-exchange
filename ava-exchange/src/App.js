import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Components/Header/Header";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Market from "./Pages/Market";
import Portfolio from "./Pages/Portfolio";

let loggedIn = true;

function App() {
  return (
    <>
      <Header user={loggedIn}></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/market" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/market" component={Market} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
