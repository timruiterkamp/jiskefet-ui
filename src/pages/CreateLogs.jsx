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
import { setPushNotificationData } from "../store/reducers/data/DataActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateLogs extends Component {
  state = {
    tags: [{ name: "Human" }, { name: "Comment" }],
    value: "",
    redirectToReferrer: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.tags.push({ name: this.state.value });
    this.setState({ value: "" });
    this.forceUpdate();
  };

  submitLog = msg => {
    this.props.setPushNotificationData({ message: msg });
    this.setState({ redirectToReferrer: true });
  };
  render() {
    console.log(this.state.tags);
    if (this.state.redirectToReferrer === true) {
      return <Redirect to="/logs" />;
    }
    return (
      <React.Fragment>
        <header className="create-log-header">
          <Container>
            <Row>
              <Col md={12} sm={12}>
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
              <Col md={8} sm={12}>
                <Editor wrapperClassName="demo-wrapper" />

                <textarea />
              </Col>
              <Col md={4} sm={12}>
                <div className="tags">
                  <h3>Tags</h3>
                  <ul>
                    {this.state.tags.map((tag, index) => (
                      <li key={index}>{tag.name}</li>
                    ))}
                  </ul>
                  <h4>Add tags</h4>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                  </form>
                </div>
                <p>Add a attachments</p>
                <input type="file" />
                <Button
                  variant="secondary mt-2"
                  onClick={() => this.submitLog("Dennis submitted a new log")}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setPushNotificationData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLogs);
