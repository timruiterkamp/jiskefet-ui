const initialState = {
  loading: false,
  loggedIn: false,
  pushNotification: null
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.value
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.value
      };
    case "SET_PUSH_NOTIFICATION":
      return {
        ...state,
        pushNotification: action.value
      };
    default:
      return state;
  }
};
