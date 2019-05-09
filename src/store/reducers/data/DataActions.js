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
function setCompareItems(value) {
  return {
    type: "SET_COMPARE_ITEMS",
    value
  };
}

export const setLoadingData = () => dispatch => {
  dispatch(setLoading(true));
};

export const setLoggedInData = () => dispatch => {
  dispatch(setLoggedIn(true));
};

export const setCompareItemsData = item => dispatch => {
  console.log(item);
  dispatch(setCompareItems(item));
};

export const setPushNotificationData = data => dispatch => {
  console.log(data);
  dispatch(setPushNotification(data));
};
