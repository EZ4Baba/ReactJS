import { useState, useReducer } from "react";

// state will be current state , action will be passed by dispatcher
const reducerFn = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "increament":
      return { count: state.count + 1 };
  }
};
function Count() {
  // Dispatch fn
  /*
    The dispatch function returned by useReducer lets you update the state to a different value 
    and trigger a re-render. You need to pass the action as the only argument to the dispatch function:

    React will set the next state to the result of calling the reducer function you’ve provided
    with the current state and the action you’ve passed to dispatch
  */
  const [countState, Dispatch] = useReducer(reducerFn, { count: 0 });

  // const [count, setCount] = useState(0);

  function inc() {
    // setCount((c) => c + 1);
    Dispatch({ type: "increament" }); // whatever u pass in despatch will be used as actioon in  reducer fn
  }
  function dec() {
    // setCount((c) => c - 1);
    // Dispatch()
  }
  return (
    <div>
      <h2>{countState.count}</h2>
      <button onClick={inc}> Increment</button>
      <button onClick={dec}> Decrement</button>
    </div>
  );
}
export default Count;
// how to codeflow will be -

/**
 see todos console.logs for understnding
 any evethandler where dipatcher function is called, will be executed completely and its arguments
 will be passed on to reducer as action,
 dispatcher will trigger new render
 the reducer will be added to queue and new render will start
 reducer will be called then because reducers run during rendering! (Actions are queued until the next render.

 */
