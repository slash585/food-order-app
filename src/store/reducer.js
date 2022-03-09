export const initialState = {
  cart: [],
  totalAmount: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.cart],
      }

    case "REMOVE_FROM_CART":
      return { state }

    default:
      return state
  }
}

export default reducer
