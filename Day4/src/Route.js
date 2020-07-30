import React from "react";
import "./Portfolio.css";
import Skill1 from "./Components/skill1";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Skill2 from "./Components/skill2";
import Skill3 from "./Components/skill3";
const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Skill1} />
          <Route path="/experience1" exact component={Skill1} />
          <Route path="/experience2" exact component={Skill2} />
          <Route path="/experience3" exact component={Skill3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
