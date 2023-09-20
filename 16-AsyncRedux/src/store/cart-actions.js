// creating async code in the store itself

import { UIaction } from "./ui-slice";
import { cartAction } from "./cart-slice";

let firebaseURL =
  "https://cartreact-44890-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json";

export const SendCartData = (cart, removedOrNot) => {
  let action = removedOrNot === false ? "added to the " : "removed from";
  return async (dispatch) => {
    // dispatch will be provided by redux itself and it will be executed by redux
    dispatch(
      UIaction.showNotification({
        status: "pending",
        message: `${action}  item to the Cart`,
      })
    );
    const sendRequest = async () => {
      let response = await fetch(firebaseURL, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        UIaction.showNotification({
          status: "success",
          message: `Item ${action} Cart`,
        })
      );
    } catch (err) {
      dispatch(
        UIaction.showNotification({
          status: "error",
          message: "Unexpected error..Plese try after some time",
        })
      );
    }
  };
};
let getURL =
  "https://cartreact-44890-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json";
export const fetchCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      let res = await fetch(getURL);
      if (!res.ok) throw new Error("Bad server Request ", res.status);
      let data = res.json();
      return data;
    };

    try {
      let data = await getData();
      dispatch(
        UIaction.showNotification({
          status: "success",
          message: `data fetched successfully`,
        })
      );
      dispatch(cartAction.replaceCart(data));
    } catch (err) {
      console.log(err);
      dispatch(
        UIaction.showNotification({
          status: "error",
          message: "Couldn't fetch data",
        })
      );
    }
  };
};
