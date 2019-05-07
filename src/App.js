import React, { Component } from "react";
import "./scss/index.scss";
import Routes from "./Routes";
import { Provider } from "react-redux";
import AppStore from "./store/AppStore";

class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
