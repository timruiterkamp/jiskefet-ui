import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";

class Subsystems extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
  };
  render() {
    return (
      <Container>
        <Row>
          <h1>Subsystem overview</h1>
        </Row>
      </Container>
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
)(Subsystems);
