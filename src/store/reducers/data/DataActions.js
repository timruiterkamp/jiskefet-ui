function setLoading(value) {
  return {
    type: "SET_LOADING",
    value
  };
}

function setLoggedIn(value) {
  return {
    type: "SET_LOGGED_IN",
    value
  };
}

function setPushNotification(value) {
  return {
    type: "SET_PUSH_NOTIFICATION",
    value
  };
}
export const setLoadingData = () => dispatch => {
  dispatch(setLoading(true));
};

export const setLoggedInData = () => dispatch => {
  dispatch(setLoggedIn(true));
};

export const setPushNotificationData = data => dispatch => {
  console.log(data);
  dispatch(setPushNotification(data));
};
