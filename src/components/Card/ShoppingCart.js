import React from "react"
import Modal from "../UI/Modal"
import classes from "./ShoppingCart.module.css"

function ShoppingCart(props) {
  const shoppingCartItem = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  ]
  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {shoppingCartItem.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button-alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default ShoppingCart
