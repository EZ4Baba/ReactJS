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
  async function orderConfrimation(userName) {
    console.log("uploading data of ", contextValue.cartItems);
    fetch(
      "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/foodItems/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userName,
          items: contextValue.items,
        }),
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.log("error while fetching");
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log("confrimed");
        console.log(data);
      })
      .catch((err) => {
        console.log("error while fetching..", err);
      });
    setonOrder(false);
    props.onClose();
    contextValue.emptyCart();
  }
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount </span>
        <span>{contextValue.totalAmount} ₹</span>
      </div>

      {onOrder && <CheckoutForm onOrderConfirmation={orderConfrimation} />}
      {!onOrder && (
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
      )}
    </Modal>
  );
}
export default Cart;
