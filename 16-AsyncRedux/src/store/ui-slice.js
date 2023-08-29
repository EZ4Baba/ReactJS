const reduxTK = require("@reduxjs/toolkit");

const cartInitialState = {
  showCart: false,
  notification: null,
};

const UISlice = reduxTK.createSlice({
  name: "UI",
  initialState: cartInitialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const UIaction = UISlice.actions;
export default UISlice;
