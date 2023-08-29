const reduxTK = require("@reduxjs/toolkit");

const cartInitialState = {
  cartItems: [],
  quantity: 0,
  amount: 0,
};

const cartSlice = reduxTK.createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, data) {
      const addedItem = data.payload;
      const existingItem = state.cartItems.find((item) => {
        return item.id === addedItem.id;
      });
      if (!existingItem) {
        state.cartItems.push(data.payload);
      } else {
        existingItem.quantity++;
      }
      let numberOfItems = state.cartItems.reduce((total, curr) => {
        return (total += curr.quantity);
      }, 0);
      state.quantity = numberOfItems;
      return undefined;
    },
    removeFromCart(state, action) {
      const itemID = action.payload;
      const existingItem = state.cartItems.find((item) => {
        if (item.id === itemID) return true;
        return false;
      });
      if (existingItem.quantity > 1) existingItem.quantity--;
      else {
        let newcartitem = state.cartItems.filter((item) => {
          return item.id !== itemID;
        });
        state.cartItems = newcartitem;
      }
      state.quantity--;
      return undefined;
    },
    // replcaeCart(state, action) {
    //   state.cartItems = action.payload;
    // },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
