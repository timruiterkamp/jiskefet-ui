import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import "../scss/layout/logs.scss";

export default class Logs extends Component {
  render() {
    return (
      <div className="content">
        <div className="log-header">
          <Container>
            {" "}
            <button className="button-open">Create new log</button>
            <button className="button-closed">Open filters</button>
          </Container>
        </div>

        <div className="log-content">
          <Container className="log-container">
            <article />
            <article />
            <article />
            <article />
          </Container>
        </div>
      </div>

      // <Container>
      //   <Row className="mt-5">
      //     <Col sm={6}>
      //       <h1>Logs</h1>
      //     </Col>

      //     <Col sm={6} className="align-self-end">
      //       <Button variant="outline-success" href="/create-logs">
      //         Create new log
      //       </Button>
      //     </Col>
      //   </Row>
      //   <Row className="justify-content-end">
      //     <ToggleButtonGroup type="radio" name="test">
      //       <ToggleButton value={1}>Table</ToggleButton>
      //       <ToggleButton value={2}>Cards</ToggleButton>
      //     </ToggleButtonGroup>

      //     <Button variant="dark" href="#" className="ml-1">
      //       Filters
      //     </Button>
      //   </Row>
      //   {/* <LogsTable /> */}
      //   <LogsCards />
      // </Container>
    );
  }
}
