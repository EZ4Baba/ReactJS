import { useState } from "react";

function useInput(validaterFn) {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const valueIsValid = validaterFn(enteredValue);
  const hasError = !valueIsValid && inputTouched;
  const InputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const InputBlurHandler = (event) => {
    setInputTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setInputTouched(false);
  };

  return {
    valueIsValid,
    hasError,
    InputChangeHandler,
    InputBlurHandler,
    reset,
    setEnteredValue,
    setInputTouched,
    enteredValue,
  };
}
export default useInput;
