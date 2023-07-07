import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function cartShowHandler() {
    setCartIsShown(true);
  }
  function closeCart() {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown ? <Cart onClose={closeCart} /> : ""}
      <div>
        <div>
          <Header onCartShow={cartShowHandler} />
        </div>
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
