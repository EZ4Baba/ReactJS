import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import "./MealItem.css";
import { useContext } from "react";
function MealItem(props) {
  const cartContext = useContext(CartContext);
  function AddItemtoCart(quantity) {
    const item = {
      name: props.name,
      id: props.id,
      amount: quantity,
      price: props.price,
    };
    cartContext.addItem(item);
  }
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={AddItemtoCart} />
      </div>
    </li>
  );
}
export default MealItem;
