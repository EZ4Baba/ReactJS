import { useReducer } from "react";

const stateReducer = (state, action) => {
  if (action.type === "change") {
    return {
      value: action.payLoad,
      touched: state.touched,
    };
  }
  if (action.type === "blur") {
    return {
      value: state.value,
      touched: true,
    };
  }
  if (action.type === "reset") {
    return {
      value: "",
      touched: false,
    };
  }
  return {
    value: "",
    touched: "false",
  };
};
const useInputBasicForm = (validatorFn) => {
  //use-State

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [inputFieldTouched, setInputFieldTouched] = useState(false);

  //   const onChangeHandler = (e) => {
  //     setEnteredValue(e.target.value);
  //   };
  //   const onBlurHandler = () => {
  //     setInputFieldTouched(true);
  //   };
  //   const inputisValid = validatorFn(enteredValue);
  //   const inputisInvalid = !inputisValid && inputFieldTouched;
  //   const reset = () => {
  //     setEnteredValue("");
  //     setInputFieldTouched(false);
  //   };

  // USE-REDUCER

  const [newstate, dispatch] = useReducer(stateReducer, {
    value: "",
    touched: false,
  });

  const onChangeHandler = (e) => {
    dispatch({ type: "change", payLoad: e.target.value });
  };
  const onBlurHandler = () => {
    dispatch({ type: "blur" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  const inputisValid = validatorFn(newstate.value);
  const inputisInvalid = !inputisValid && newstate.touched;
  return {
    //use State return
    // enteredValue,
    // inputFieldTouched,
    // onChangeHandler,
    // onBlurHandler,
    // inputisInvalid,
    // inputisValid,
    // reset,
    enteredValue: newstate.value,
    inputFieldTouched: newstate.touched,
    onChangeHandler,
    onBlurHandler,
    inputisInvalid,
    inputisValid,
    reset,
  };
};
export default useInputBasicForm;

// import { useReducer } from "react";

// const initialInputState = {
//   value: "",
//   isTouched: false,
// };

// const inputStateReducer = (state, action) => {
//   if (action.type === "INPUT") {
//     return { value: action.value, isTouched: state.isTouched };
//   }
//   if (action.type === "BLUR") {
//     return { isTouched: true, value: state.value };
//   }
//   if (action.type === "RESET") {
//     return { isTouched: false, value: "" };
//   }
//   return state;
// };

// const useInputBasicForm = (validateValue) => {
//   const [inputState, dispatch] = useReducer(inputStateReducer, {
//     value: "",
//     isTouched: "false",
//   });

//   const valueIsValid = validateValue(inputState.value);
//   const hasError = !valueIsValid && inputState.isTouched;

//   const valueChangeHandler = (event) => {
//     dispatch({ type: "INPUT", value: event.target.value });
//   };

//   const inputBlurHandler = () => {
//     dispatch({ type: "BLUR" });
//   };

//   const reset = () => {
//     dispatch({ type: "RESET" });
//   };

//   return {
//     value: inputState.value,
//     inputisValid: valueIsValid,
//     inputisInvalid: hasError,
//     onChangeHandler: valueChangeHandler,
//     onBlurHandler: inputBlurHandler,
//     reset,
//     // enteredValue: newstate.value,
//     //     inputFieldTouched: newstate.touched,
//     //     onChangeHandler,
//     //     onBlurHandler,
//     //     inputisInvalid,
//     //     inputisValid,
//     //     reset,
//   };
// };

// export default useInputBasicForm;
