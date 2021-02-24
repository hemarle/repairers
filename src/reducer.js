export const initialState = {
  USER: [],
  SERMON: [],
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_SERMON: "SET_SERMON",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      console.log("user", action.USER);
      return { ...state, USER: action.USER };
    case actionTypes.SET_SERMON:
      console.log("sermon", state);
      return { ...state, SERMON: action.SERMON };
    default:
      console.log("def", state);
      return state;
  }
};

export default reducer;
