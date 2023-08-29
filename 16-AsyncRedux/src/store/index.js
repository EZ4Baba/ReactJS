import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./ui-slice";
import cartSlice from "./cart-slice";

const Store = configureStore({
  reducer: {
    uiReducer: UISlice.reducer,
    cartReducer: cartSlice.reducer,
  },
});
export default Store;
