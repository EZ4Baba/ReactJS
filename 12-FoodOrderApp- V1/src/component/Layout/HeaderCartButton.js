// import CartIcon from "../Cart/CartIcon";
// import "./HeadercartButton.css";
// const HeaderCartButton = (props) => {
//   function cartHanlder() {
//     props.onCartClick();
//   }
//   return (
//     <button className="button" onClick={cartHanlder}>
//       <span className="icon">
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className="badge">0</span>
//     </button>
//   );
// };
// export default HeaderCartButton;

import { useContext } from "react";

import CartContext from "../../Store/cartItem-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadercartButton.module.css";

const HeaderCartButton = (props) => {
  const cartcontextvalue = useContext(CartContext);

  //to check number of items in cart
  const numberOfCartItems = cartcontextvalue.items.reduce(
    (cartNumber, item) => {
      return cartNumber + item.amount;
    },
    0
  );
  function cartHanlder() {
    props.onCartClick();
  }
  return (
    <button className={classes.button} onClick={cartHanlder}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
