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

export const setLoadingData = () => dispatch => {
  dispatch(setLoading(true));
};

export const setLoggedInData = () => dispatch => {
  dispatch(setLoggedIn(true));
};
