import React from "react"
import classes from "./ShoppingCart.module.css"

function ShoppingCart() {
  const shoppingCartItem = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  ]
  return (
    <div>
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
        <button className={classes["button-alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}

export default ShoppingCart
