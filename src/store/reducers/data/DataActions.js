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

function setModus(value) {
  return {
    type: "SET_MODUS",
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
  dispatch(setCompareItems(item));
};

export const setPushNotificationData = data => dispatch => {
  dispatch(setPushNotification(data));
};

export const setModusData = data => dispatch => {
  console.log(data);
  dispatch(setModus(data));
};
