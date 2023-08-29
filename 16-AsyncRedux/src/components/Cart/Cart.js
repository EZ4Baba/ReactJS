import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              item={{
                id: cartItem.id,
                title: cartItem.title,
                quantity: cartItem.quantity,
                total: cartItem.price * cartItem.quantity,
                price: cartItem.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
