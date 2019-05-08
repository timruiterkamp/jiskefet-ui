import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pushNotificationState } from "../../store/reducers/data/DataSelectors";

class PushNotification extends Component {
  componentDidMount() {
    console.log(this.props.notification);
  }
  componentDidUpdate = async prevProps => {
    console.log(prevProps);
    if (prevProps.notification != this.props.notification) {
      console.log(this.props.notification);
    }
  };
  render() {
    return (
      <div>
        {this.props.notification && <p>{this.props.notification.message}</p>}
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
