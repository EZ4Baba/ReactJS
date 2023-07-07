import React, { useContext } from "react";
import CartContext from "../../../Store/cartItem-context";
import MealItemForm from "./MealItemForm";

import "./MealItem.css";
const MealItem = (props) => {
  let cartCTX = useContext(CartContext);
  function CartHandler(quantity) {
    let item = {
      id: props.id,
      name: props.name,
      amount: quantity,
      price: props.price,
    };
    cartCTX.addItem(item);
  }
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAdd={CartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
