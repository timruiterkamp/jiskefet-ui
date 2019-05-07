import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";

class Log extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
  };
  render() {
    return <div>Log</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
