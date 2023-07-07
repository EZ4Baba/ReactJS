import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";
import { useContext } from "react";
function HeaderCartButton(props) {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.items.reduce((total, curr) => {
    return +curr.amount + total;
  }, 0);
  return (
    <>
      <button className="button" onClick={props.onCartShowClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </>
  );
}
export default HeaderCartButton;
