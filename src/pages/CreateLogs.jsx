import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../scss/layout/create-log.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class CreateLogs extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="create-log-header">
          <Container>
            <Row>
              <Col sm={12}>
                <h3>Create a log</h3>
              </Col>
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Title
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <Editor wrapperClassName="demo-wrapper" />

                <textarea value="input" />
              </Col>
              <Col sm={4}>
                <p>Add a attachments</p>
                <input type="file" />
                <Button variant="secondary mt-2">Submit</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <h2>asdf</h2>
              </Col>
            </Row>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}
