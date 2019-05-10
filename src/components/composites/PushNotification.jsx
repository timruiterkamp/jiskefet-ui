import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pushNotificationState } from "../../store/reducers/data/DataSelectors";
import "../../scss/layout/notifications.scss";

class PushNotification extends Component {
  state = {
    showPopUp: true
  };
  componentDidMount() {
    console.log(this.props.notification);
  }
  componentDidUpdate = async prevProps => {
    this.state.showPopUp = true;
    if (prevProps.notification != this.props.notification) {
      console.log(this.props.notification);
    }
  };
  render() {
    return (
      <div
        className={
          this.props.notification && this.state.showPopUp
            ? "pop-up element"
            : "element hide"
        }
      >
        <div className="pushNotification">
          {this.props.notification && <p>{this.props.notification.message}</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notification: pushNotificationState(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PushNotification);
