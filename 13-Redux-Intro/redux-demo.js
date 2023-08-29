const redux = require("redux");

const counterReducerFuncion = (oldState = { counter: 0 }, dispatchAction) => {
  if (dispatchAction.type === "increment") {
    return {
      counter: oldState.counter + 1,
    };
  }
  if (dispatchAction.type === "decrement") {
    return {
      counter: oldState.counter - 1,
    };
  }
  return oldState;
};
const store = redux.createStore(counterReducerFuncion);

const counterSubscriber = () => {
  //will get the latest state after dispatcher is called
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribe => Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.

store.subscribe(counterSubscriber);

for (let i = 0; i < 2; i++) {
  store.dispatch({ type: "increment" });
}
for (let i = 0; i < 2; i++) {
  store.dispatch({ type: "decrement" });
}
