export const initialState = {
  basket: [],
  focusedProduct: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "CHANGE_FOCUS_PRODUCT":
      return {
        ...state,
        focusedProduct: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
