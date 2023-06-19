import { useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartContext from "../../Store/cartItem-context";
import Modal from "../UI/Modal";
import "./Cart.css";
const Cart = (props) => {
  const cartDetails = useContext(CartContext);
  // useEffect(() => {
  //   console.log(cartDetails.items);
  // }, [cartDetails.items]);
  const CART_MEALS = cartDetails.items;
  let cartHasItems = CART_MEALS.length > 0;

  const addItemToCartHandler = (item) => {
    console.log(item);
    cartDetails.addItem(item);
  };
  const removeItemfromCatHadle = (id) => {
    // cartDetails.removeItem(id);
  };

  const cartItems = (
    <ul className="cart-items">
      {CART_MEALS.map((meal) => {
        return (
          <CartItem
            key={Math.random()}
            name={meal.name}
            amount={meal.amount}
            price={meal.price}
            onAdd={addItemToCartHandler.bind(null, meal)}
            onRemove={removeItemfromCatHadle.bind(null, meal.id)}
          ></CartItem>
        );
      })}
    </ul>
  );
  const order = () => {
    console.log("ordering...");
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{cartDetails.totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {cartHasItems && (
          <button className="button" onClick={order}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
