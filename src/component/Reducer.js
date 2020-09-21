export const initialState = {
  basket: [
    {
      id: "123432",
      title: "OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)",
      price: 55.43,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61fv4VZRQ7L._SL1500_.jpg",
      rating: 3,
    },
  ],
  user: null,
};

function reducer(state, action) {
  // console.log("show me the action: ", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic for remove from basket

      const newBasket = [...state.basket];

      const index = newBasket.findIndex((b) => b.id === action.id);
      if (index >= 0) {
        // item exxit in the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove item (id: ${action.id}) as it it not present`
        );
      }

      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}

export default reducer;
