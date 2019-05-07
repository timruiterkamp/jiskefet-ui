import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";

class LoginPage extends Component {
  setLoggedInState = () => {
    this.props.setLoggedInData();
  };

  render() {
    return (
      <Container>
        <h1>Welcome to Jiskefet</h1>

        <p>Please use your github account to sign in</p>
        <Link to={"/logs"} onClick={this.setLoggedInState}>
          <Button variant="primary">Log in</Button>
        </Link>
        <Button variant="secondary" href="https://github.com/">
          Create account
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { setLoggedInData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
