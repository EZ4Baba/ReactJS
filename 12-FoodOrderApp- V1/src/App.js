import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./Store/cartProvider";

import { useState } from "react";
import React from "react";
function App() {
  const [cartIsShown, setCartisShown] = useState(false);
  // when cart is clicked
  function ShowcartHandler() {
    setCartisShown(true);
  }
  // when close button clicked
  function HideCartHandler() {
    setCartisShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onCartClick={ShowcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
