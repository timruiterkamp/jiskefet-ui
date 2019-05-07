import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class CreateLogs extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h1>Create a new log</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
            />
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
            <h2>Add logs</h2>
          </Col>
          <Col sm={3}>
            <h2>Add runs</h2>
          </Col>
          <Col sm={3}>
            <h2>Add tags</h2>
          </Col>
          <Col sm={3}>
            <h2>Add files</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
