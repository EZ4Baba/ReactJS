import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
//when using toolkit
import { counterActions } from "../store/counterStore";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  //using one more state,showCounter, with counter
  const showCounter = useSelector((state) => {
    return state.counter.showCounter;
  });
  function incrementHandler() {
    // dispatch({ type: "increment", payLoad: 5 });
    dispatch(counterActions.increment(1));
  }
  function decrementHandler() {
    // dispatch({ type: "decrement", payLoad: 5 });
    dispatch(counterActions.decrement(1));
  }
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" })
    dispatch(counterActions.toggleCounter());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// using redux with class based component

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   toggleCounterHandler() {}
//   decrementHandler() {
//     this.props.decrement();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </main>
//     );
//   }
// }
// // maps redux state to props which will be received in this component
// const mapStateToProps = (state) => {
//   // in the return Object, the keys will be available as props in this component
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// // on executing connect will return a function that we have to execute with our component as arg
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
