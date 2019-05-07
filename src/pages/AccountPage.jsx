import React, { Component } from "react";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";

class AccountPage extends Component {
  componentDidMount = () => {
    this.props.setLoggedInData();
  };
  render() {
    return <div>account</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
