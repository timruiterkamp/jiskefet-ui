import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import Subsystems from "./pages/Subsystems";
import Runs from "./pages/Runs";
import Logs from "./pages/Logs";
import CreateLogs from "./pages/CreateLogs";
import Log from "./pages/Log";
import Navigation from "./components/composites/Navigation";
import AccountPage from "./pages/AccountPage";
import "./scss/navigation/index.scss";
import PageWrapper from "./components/composites/PageWrapper";
import { loggedInState } from "./store/reducers/data/DataSelectors";
import { setPushNotificationData } from "./store/reducers/data/DataActions";
import PushNotification from "./components/composites/PushNotification";
import Compare from "./pages/Compare";

class Routes extends Component {
  componentDidMount = () => {
    let self = this;
    setInterval(() => {
      self.props.setPushNotificationData({
        message: ' message: "Denniswegereef added a commment on log 39203"'
      });
    }, 3000);
  };

  render() {
    return (
      <PageWrapper>
        {this.props.loggedIn ? <Navigation /> : ""}

        <Switch>
          <Route path="/account" component={AccountPage} />
          <Route path="/logs" component={Logs} />
          <Route path="/create-logs" component={CreateLogs} />
          <Route path="/logs:id" component={Log} />
          <Route path="/runs" component={Runs} />
          <Route path="/subsystem-overview" component={Subsystems} />
          <Route path="/compare" component={Compare} />
          <Route path="/" component={LoginPage} />
        </Switch>

        <PushNotification />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: loggedInState(state)
});

const mapDispatchToProps = {
  setPushNotificationData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
