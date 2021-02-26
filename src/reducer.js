export const initialState = {
  USER: [],
  SERMON: [],
  GALLERY: [],
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_SERMON: "SET_SERMON",
  SET_GALLERY: "SET_GALLERY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, USER: action.USER };
    case actionTypes.SET_SERMON:
      return { ...state, SERMON: action.SERMON };

    case actionTypes.SET_GALLERY:
      return { ...state, GALLERY: action.GALLERY };
    default:
      return state;
  }
};

export default reducer;
