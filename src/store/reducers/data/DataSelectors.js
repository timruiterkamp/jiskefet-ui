export const loggedInState = state => {
  console.log(state.data.loggedIn);
  return state.data.loggedIn;
};

export const loadingState = state => {
  return state.data.loading;
};
