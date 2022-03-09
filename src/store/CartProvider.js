import CartContext from "./cart-context"

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}

  const removeItemToCartHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }

  return <CartContext value={cartContext}>{props.children}</CartContext>
}

export default CartProvider
