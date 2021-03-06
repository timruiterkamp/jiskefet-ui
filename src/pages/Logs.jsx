import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import CardSingle from "../components/composites/card";
import TableSingle from "../components/logs/Table";
import { connect } from "react-redux";
import {
  setLoggedInData,
  setPushNotificationData
} from "../store/reducers/data/DataActions";
import "../scss/layout/logs.scss";
import PushNotification from "../components/composites/PushNotification";

class Logs extends Component {
  state = {
    cards: 10,
    cardsView: true,
    toggle: false
  };
  componentDidMount = () => {
    this.props.setLoggedInData();
    let self = this;
    // setInterval(() => {
    //   self.props.setPushNotificationData({
    //     message: "Denniswegereef added a commment on log 39203"
    //   });
    // }, 1000);
  };

  handleView = () => {
    this.state.cardsView = !this.state.cardsView;
    this.forceUpdate();
  };

  openFilters = () => {
    console.log("test");
  };

  render() {
    return (
      <div className="content">
        <div className="log-header">
          <Container>
            <PushNotification />
            <Link to="/create-logs">
              <Button variant="outline-light">Create new log</Button>
            </Link>
            <Button variant="success" onClick={this.openFilters}>
              Open filters
            </Button>
          </Container>
        </div>

        <div className="log-content">
          <Container className="log-extra">
            <p onClick={this.handleView}>
              <span className={this.state.cardsView ? "" : "active"}>
                Table view
              </span>
              &nbsp; / &nbsp;
              <span className={this.state.cardsView ? "active" : ""}>
                Card view
              </span>
            </p>
            {this.state.cardsView && <p>{this.state.cards} cards</p>}
          </Container>
          {this.state.cardsView ? (
            <Container className="log-container">
              {[...Array(this.state.cards)].map((k, i) => (
                <CardSingle item={i} key={i} />
              ))}
            </Container>
          ) : (
            <Container className="log-table">
              <TableSingle />
            </Container>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setLoggedInData,
  setPushNotificationData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs);
