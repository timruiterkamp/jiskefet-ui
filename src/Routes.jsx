import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Subsystems from "./pages/Subsystems";
import Runs from "./pages/Runs";
import Logs from "./pages/Logs";
import Log from "./pages/Log";

export default class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
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
