const initialState = {
  loading: false,
  loggedIn: false
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
    default:
      return state;
  }
};
