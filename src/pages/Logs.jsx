import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";
import "../scss/layout/logs.scss";

class Logs extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
  };
  render() {
    return (
      <div className="content">
        <div className="log-header">
          <Container>
            <Button variant="secondary">Create new log</Button>
            <Button variant="secondary">Open filters</Button>
          </Container>
        </div>

        <div className="log-content">
          <Container className="log-container">
            <article>asdf</article>
          </Container>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs);
