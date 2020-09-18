export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log("show me the action: ", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic for remove from basket
      return { state };
    default:
      return state;
  }
}

export default reducer;
