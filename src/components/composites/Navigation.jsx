import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { User, Activity, Play, Layers } from "react-feather";

export default class Navigation extends Component {
  state = {
    navOpen: false
  };

  closeMenu = () => {
    this.setState({
      navOpen: false
    });
  };
  render() {
    const { navOpen } = this.state;
    return (
      <Fragment>
        <nav className={this.state.navOpen ? "open" : ""}>
          <ul>
            <li>
              <NavLink onClick={this.closeMenu} exact to={"/account"}>
                <User /> {navOpen ? "Account" : ""}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.closeMenu} exact to={"/logs"}>
                <Activity /> {navOpen ? "Logs" : ""}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.closeMenu} exact to={"/runs"}>
                <Play /> {navOpen ? "Runs" : ""}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.closeMenu} exact to={"/runs"}>
                <Layers /> {navOpen ? "Subsystem overview" : ""}
              </NavLink>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
