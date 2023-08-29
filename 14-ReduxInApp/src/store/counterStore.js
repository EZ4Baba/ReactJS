//Using Redux

// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
//   showCounter: true,
// };
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + action.payLoad,
//       showCounter: state.showCounter,
//       // the reason we are adding showCounter even when we are not making any change to it(just copying the
//       // state.showCounter) cause if we dont add it the state will be {counter:n} and showCounter will be removed
//       // thus if we are using it anywhere is will be undefined.

//       // REDUX DOES'NT MERGES STATE BUT OVERWRITES IT THUS WE HAVE TO SET OTHER STATES AS WELL
//       // **ALWAYS RETURN NEW STATE OBJECT**
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - action.payLoad,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
// const counterStore = createStore(counterReducer);

// // const counterSubscriber = () => {
// //   const count = counterStore.getState();
// //   console.log(count);
// // };
// // counterStore.subscribe(counterSubscriber);

// // counterStore.dispatch({ type: "increment" });
// export default counterStore;

//with redux toolkit
const reduxTK = require("@reduxjs/toolkit");
const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = reduxTK.createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      // state.counter++; //mutation is also allowed with reduc-toolkit
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    },
    decrement(state, action) {
      // state.counter--;
      return {
        counter: state.counter - action.payload,
        showCounter: state.showCounter,
      };
    },
    increase(state, action) {
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    },
    toggleCounter(state) {
      // state.showCounter = !state.showCounter;
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = reduxTK.createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
//map the reducers to store
const store = reduxTK.configureStore({
  // reducer: counterSlice.reducer,
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
  /*this will make state as  - 
  {
    auth:  {isAuthenticated: false}
    counter: {counter: 0, showCounter: true}
  }
*/
});
// const counterStore = reduxTK.createStore(counterSlice.reducer); //we can also use createStore

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
