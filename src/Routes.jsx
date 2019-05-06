import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Subsystems from "./pages/Subsystems";
import Runs from "./pages/Runs";
import Logs from "./pages/Logs";
import Log from "./pages/Log";
import Navigation from "./components/composites/Navigation";
import AccountPage from "./pages/AccountPage";
import "./scss/navigation/index.scss";

export default class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route path="/account" component={AccountPage} />
          <Route path="/logs" component={Logs} />
          <Route path="/logs:id" component={Log} />
          <Route path="/runs" component={Runs} />
          <Route path="/subsystem-overview" component={Subsystems} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Fragment>
    );
  }
}
