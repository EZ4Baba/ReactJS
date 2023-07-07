import React from "react";
import { useReducer } from "react";
import CartContext from "./cartItem-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (currentState, action) => {
  if (action.type === "ITEMADDCART") {
    const existingItemIndex = currentState.items.findIndex((item) => {
      return item.name === action.payLoad.name;
    });
    console.log(existingItemIndex);
    let updatedItems;
    if (existingItemIndex == -1) {
      updatedItems = currentState.items.concat(action.payLoad);
    } else {
      currentState.items[existingItemIndex].amount++;
      updatedItems = currentState.items.concat();
    }
    const updatedTotalAmount =
      currentState.totalAmount + action.payLoad.price * action.payLoad.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "ITEMREMOVECART") {
    //to be implemented
  }
};

const CartProvider = (props) => {
  const [cartState, CartDispatch] = useReducer(cartReducer, defaultCartState);

  console.log("rendering cart provider");
  console.log(cartState);

  const addItemToCartHandler = (item) => {
    CartDispatch({ type: "ITEMADDCART", payLoad: item });
  };
  const removeItemFromCartHandler = (ID) => {
    CartDispatch({ type: "ITEMREMOVECART", payLoad: ID });
  };

  const cartcontextvalue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartcontextvalue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
