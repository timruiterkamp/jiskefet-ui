import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default class Logs extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <h1>Logs</h1>
          </Col>
          <Col sm={6}>
            <Button variant="outline-success" href="#">
              Create new log
            </Button>

            <ToggleButtonGroup type="radio" name="test">
              <ToggleButton value={1}>Table</ToggleButton>
              <ToggleButton value={2}>Cards</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={12} />
        </Row>
      </Container>
    );
  }
}
