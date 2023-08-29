const reduxTK = require("@reduxjs/toolkit");
const initialCartState = {
  cartItems: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = reduxTK.createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, payLoad) {
      let existingItem = state.cartItems.filter((item) => {
        return item.id === payLoad.id;
      });
      if (existingItem.length === 0) {
        state.cartItems.push({
          itemID: payLoad.payload.id,
          price: payLoad.payload.price,
          quantity: 1,
        });
      } else {
        state.cartItems.map((item, index) => {
          if (item.itemID === payLoad.payload.id) {
            state.cartItems[index].quantity++;
          }

          return undefined;
        });
        console.log(reduxTK.current(state.cartItems));
      }
    },
    removeFromCart(state) {
      state.cartItems.pop();
    },
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = reduxTK.configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;

/* Doubt
 addToCart(state, payLoad) {
      // this works

      //   state.cartItems.push("items");

      //   this doesnt

      //   state.cartItems.push("items");
      //   let items = state.cartItems;
      //   console.log(reduxTK.current(state));
      //   return {
      //     cartItems: items,
      //     showCart: false,
      //   };

      //   let items = [...state.cartItems, "items"];
      //   return {
      //     cartItems: items,
      //     showCart: false,
      //   };

      //   let items = state.cartItems.concat("items");
      //   return {
      //     cartItems: items,
      //     showCart: false,
      //   };

      let items = [...state.cartItems, payLoad];
      state.cartItems = items;
    },
*/
