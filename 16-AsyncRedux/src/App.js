import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { UIaction } from "./store/ui-slice";
import { useState } from "react";
// import { useRef } from "react";

// to stop sending empty cart request to backend at start
let inital = true;

function App() {
  const [show, setShow] = useState(true);
  // let timerID = useRef(null);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => {
    return state.uiReducer.showCart;
  });
  const cart = useSelector((state) => {
    return state.cartReducer;
  });
  const showNotification = useSelector((state) => state.uiReducer.notification);

  let firebaseURL =
    "https://reactapp2-8b069-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json";

  useEffect(() => {
    const sendCartData = async () => {
      setShow(true);
      dispatch(UIaction.showNotification("pending"));
      let response = await fetch(firebaseURL, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (response.ok) {
        dispatch(UIaction.showNotification("success"));
      }
      if (!response.ok) {
        throw new Error("Failed");
      }
    };
    // to stop sending request at start of application
    if (inital) {
      inital = false;
      return;
    }
    sendCartData().catch((err) => {
      dispatch(UIaction.showNotification("error"));
    });
  }, [firebaseURL, cart, dispatch]);
  return (
    <>
      {show && showNotification && <Notification status={showNotification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
