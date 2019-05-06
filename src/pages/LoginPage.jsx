import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

export default class LoginPage extends Component {
  render() {
    return (
      <Container>
        <h1>Welcome to Jiskefet</h1>

        <p>Please use your github account to sign in</p>
        <Button variant="primary" href="/logs">
          Log in
        </Button>
        <Button variant="secondary" href="https://github.com/">
          Create account
        </Button>
      </Container>
    );
  }
}
