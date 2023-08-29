import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const addThisToCartHandler = (item) => {
    dispatch(cartAction.addToCart(item));
  };
  const removeThisFromCartHandler = (itemID) => {
    dispatch(cartAction.removeFromCart(itemID));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={addThisToCartHandler.bind(null, {
              id,
              title,
              quantity,
              total,
              price,
            })}
          >
            +
          </button>
          <button onClick={removeThisFromCartHandler.bind(null, id)}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
