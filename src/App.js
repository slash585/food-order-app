import { Fragment } from "react"
import Header from "./components/Layout/Header"
import "./App.css"
import Meals from "./components/Meals/Meals"
import ShoppingCart from "./components/Card/ShoppingCart"
import { useState } from "react"

function App() {
  const [cartVisibility, setCartVisibility] = useState(false)

  const onShowCartHandler = () => {
    setCartVisibility(true)
  }

  const onHideCartHandler = () => {
    setCartVisibility(false)
  }

  return (
    <Fragment>
      {cartVisibility && <ShoppingCart onHideCart={onHideCartHandler} />}
      <Header onShowCart={onShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
