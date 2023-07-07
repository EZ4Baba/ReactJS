import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./checkout";
import "./Cart.css";
import { useContext, useState } from "react";

function Cart(props) {
  const [onOrder, setonOrder] = useState(false);

  const contextValue = useContext(CartContext);
  const hasItems = contextValue.items.length > 0;
  const allcartItems = contextValue.items;
  function addItemToCartHandler(item) {
    contextValue.addItem(item);
  }
  function removeItemfromCartHandler(item) {
    contextValue.removeItem(item);
  }
  const cartItems = (
    <ul className="cart-items">
      {allcartItems.map((meal) => {
        return (
          <CartItem
            key={meal.id}
            name={meal.name}
            amount={meal.amount}
            price={meal.price}
            onAdd={addItemToCartHandler.bind(null, meal)} //while invoking the function use parameter as meal
            onRemove={removeItemfromCartHandler.bind(null, meal)}
          ></CartItem>
        );
      })}
    </ul>
  );
  function orderHandler() {
    setonOrder(true);
  }
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount </span>
        <span>{contextValue.totalAmount} ₹</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className="button" onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
      {onOrder && <CheckoutForm />}
    </Modal>
  );
}
export default Cart;
