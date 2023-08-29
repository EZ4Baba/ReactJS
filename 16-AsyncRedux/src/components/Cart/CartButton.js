import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UIaction } from "../../store/ui-slice";
const CartButton = (props) => {
  const cartState = useSelector((state) => state.cartReducer);
  let numberOfItems = cartState.quantity;
  let dispacth = useDispatch();
  function cartHandler() {
    dispacth(UIaction.toggle());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
