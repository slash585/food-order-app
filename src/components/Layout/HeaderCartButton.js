import React from "react"
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Card/CartIcon"
import { useStateValue } from "../../store/StateProvider"

function HeaderCartButton(props) {
  const [{ cart }] = useStateValue()

  const numberOfItems = cart.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCartButton
