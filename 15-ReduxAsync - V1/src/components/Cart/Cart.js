import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((cartState) => {
    return cartState.cartItems;
  });
  let total = 6 * cartItems.length;
  let numberofitems = cartItems.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);
  console.log(numberofitems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity: numberofitems,
            total: total,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
