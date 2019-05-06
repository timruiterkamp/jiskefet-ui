import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink
                onClick={this.closeMenu}
                exact
                to={this.props.language === "nordic" ? "/nordic/" : "/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.closeMenu}
                exact
                to={
                  this.props.language === "nordic" ? "/nordic/about" : "/about"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.closeMenu}
                exact
                to={
                  this.props.language === "nordic"
                    ? "/nordic/products"
                    : "/products"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.closeMenu}
                exact
                to={
                  this.props.language === "nordic"
                    ? "/nordic/recipes"
                    : "/recipes"
                }
              >
                Recipes
              </NavLink>
            </li>
            {/* <li>
            <NavLink onClick={this.closeMenu} exact to="/faq">
              FAQ
            </NavLink>
          </li> */}
            <li>
              <NavLink
                onClick={this.closeMenu}
                exact
                to={
                  this.props.language === "nordic"
                    ? "/nordic/contact"
                    : "/contact"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={this.closeMenu}
                exact
                to={
                  this.props.language === "nordic"
                    ? "/nordic/imprint"
                    : "/imprint"
                }
              >
                Imprint
              </NavLink>
            </li>
            {/* <li>
            <NavLink onClick={this.closeMenu} exact to="/media">
              Media
            </NavLink>
          </li> */}

            <li>
              <a
                href="https://www.heristo.de/agb.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conditions
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.tofukind.com/de/like-meat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li> */}
          </ul>
        </nav>
      </Fragment>
    );
  }
}
