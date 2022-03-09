import React, { useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"
import { useStateValue } from "../../../store/StateProvider"

function MealItemForm(props) {
  const [{ cart }, dispatch] = useStateValue()
  const [amount, setAmount] = useState(1)

  const addToCart = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_TO_CART",
      cart: {
        amount,
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price,
      },
    })
  }

  const onChangeAmount = (e) => {
    setAmount(Number(e.target.value))
  }

  return (
    <form onSubmit={addToCart} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        onChangeInput={onChangeAmount}
      />
      <button type="submit">+ Add</button>
    </form>
  )
}

export default MealItemForm
