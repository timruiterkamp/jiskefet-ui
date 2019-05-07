import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardSingle from "../components/composites/card";
import { connect } from "react-redux";
import { setLoggedInData } from "../store/reducers/data/DataActions";
import "../scss/layout/logs.scss";

class Logs extends Component {
  state = {
    cards: 10
  };
  componentDidMount = () => {
    this.props.setLoggedInData();
  };

  render() {
    return (
      <div className="content">
        <div className="log-header">
          <Container>
            <Link to="/create-logs">
              <Button variant="outline-light">Create new log</Button>
            </Link>
            <Button variant="success">Open filters</Button>
          </Container>
        </div>

        <div className="log-content">
          <Container className="log-container">
            {[...Array(this.state.cards)].map((k, i) => (
              <CardSingle item={i} key={i} />
            ))}
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
