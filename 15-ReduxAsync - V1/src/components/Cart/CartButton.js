import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartStore";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((cartState) => {
    return cartState.cartItems;
  });
  const showCartHandler = () => {
    dispatch(cartActions.toggleShowCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
