import React from "react"
import classes from "./Input.module.css"

function Input(props) {

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input onChange={props.onChangeInput} {...props.input} />
    </div>
  )
}

export default Input
