import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";

class Runs extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
  };
  render() {
    return <div>runs</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Runs);
