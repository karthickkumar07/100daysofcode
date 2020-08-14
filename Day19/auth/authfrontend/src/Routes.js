import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ProtectedRoutes from "./components/helper/ProtectedRoutes";
import Home from "./components/Home";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <ProtectedRoutes path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
