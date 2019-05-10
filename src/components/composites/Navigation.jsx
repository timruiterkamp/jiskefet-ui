import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { User, Activity, Play, Layers, Sun, Moon } from "react-feather";

export default class Navigation extends Component {
  state = {
    navOpen: false,
    dark: true
  };

  closeMenu = () => {
    this.setState({
      navOpen: false
    });
  };

  setModus = modus => {
    if (modus === "dark") {
      this.setState({ dark: false });
    } else {
      this.setState({ dark: true });
    }
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
            <li>
              <div
                onClick={() =>
                  this.setModus(this.state.dark ? "dark" : "light")
                }
              >
                {this.state.dark ? <Sun /> : <Moon />}
              </div>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
