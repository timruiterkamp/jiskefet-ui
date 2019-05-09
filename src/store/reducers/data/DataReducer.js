const initialState = {
  loading: false,
  loggedIn: false,
  compareItems: []
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
    case "SET_COMPARE_ITEMS":
      return {
        ...state,
        compareItems: action.value
      };
    default:
      return state;
  }
};
