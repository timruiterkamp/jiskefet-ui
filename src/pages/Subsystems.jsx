import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";

class Subsystems extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
  };
  render() {
    return <div>subsystems</div>;
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
