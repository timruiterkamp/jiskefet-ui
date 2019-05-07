import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";
import Col from "react-bootstrap/Col";
import "../scss/layout/loginPage.scss";

class LoginPage extends Component {
  setLoggedInState = () => {
    this.props.setLoggedInData();
  };

  render() {
    return (
      <Fragment>
        <section className="login-screen">
          <h1>Welcome to Jiskefet</h1>

          <p>Please use your github account to sign in</p>
          <Link to={"/logs"} onClick={this.setLoggedInState}>
            <Button variant="primary">Log in</Button>
          </Link>
          <Button variant="secondary" href="https://github.com/">
            Create account
          </Button>
        </section>
        <svg
          className="svg-3"
          preserveAspectRatio="none"
          viewBox="-1 0 2890 597"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#grad-1)"
            d="M-1.8189894e-12,0 L2889,0 L2889,596.65625 C2205.97017,596.65625 1701.71875,429.703125 1444.5,352.765625 C1187.28125,275.828125 596.40625,164.046875 -1.8189894e-12,164.046875 L-1.8189894e-12,0 Z"
            id="path-1"
          />
        </svg>
        <div style={{ width: 0, height: 0, overflow: "hidden" }}>
          <svg>
            <linearGradient id="grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#B375F5", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FF6373", stopOpacity: 1 }}
              />
            </linearGradient>

            <linearGradient id="grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="50%"
                style={{ stopColor: "#13CEEF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#32CAA9", stopOpacity: 1 }}
              />
            </linearGradient>
          </svg>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { setLoggedInData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
