import { useReducer } from "react";
import CartContext from "./cart-context";

const initailCartState = {
  items: [],
  totalAmount: 0,
};
const CardReducer = (state, action) => {
  //cart add logic
  if (action.type === "ADD") {
    const itemindex = state.items.findIndex((existingItem) => {
      return existingItem.name === action.payLoad.name;
    });
    let updatedItems;
    if (itemindex === -1) {
      //new item
      updatedItems = [...state.items, action.payLoad];
    } else {
      //existing item
      state.items[itemindex].amount++;
      updatedItems = [...state.items];
    }
    const AmountToPay = updatedItems.reduce((total, currentItem) => {
      return (total += currentItem.price * currentItem.amount);
    }, 0);
    return { items: updatedItems, totalAmount: AmountToPay };
  }

  //cart removal logic
  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => {
      return item.name === action.payLoad.name;
    });

    let updatedItems = [...state.items];
    updatedItems[itemIndex].amount--;
    let AmountToPay;
    if (updatedItems[itemIndex].amount <= 0) {
      updatedItems = state.items.filter((itm) => {
        return itm.name !== action.payLoad.name;
      });
    }
    AmountToPay = updatedItems.reduce((total, currentItem) => {
      return (total += currentItem.price * currentItem.amount);
    }, 0);

    return { items: updatedItems, totalAmount: AmountToPay };
  }
};
function CartProvider(props) {
  const [cartState, dispatcher] = useReducer(CardReducer, initailCartState);

  function addItemHandler(item) {
    dispatcher({ type: "ADD", payLoad: item });
  }

  function removeItemHandler(item) {
    dispatcher({ type: "REMOVE", payLoad: item });
  }

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount.toFixed(2),
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
