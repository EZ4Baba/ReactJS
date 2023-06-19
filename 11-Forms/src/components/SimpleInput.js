import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [valid, setValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  const inputRef = useRef();
  function inputChangeHandler(e) {
    setEnteredName(e.target.value);
    if (enteredName.trim() === "") setValid(false);
    setInputTouched(true);
  }
  function inputBlurHandler() {
    setInputTouched(true);
    if (enteredName.trim() === "") setValid(false);
  }
  function fromHandler(e) {
    e.preventDefault();
    if (enteredName.trim() === "") setValid(false);
    else setValid(true);
    setEnteredName("");
    setInputTouched(true);
  }
  useEffect(() => {
    if (valid) console.log("sending request as input is valid");
  }, [valid]);

  return (
    <form onSubmit={fromHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={inputRef}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
      </div>
      {!valid && inputTouched && <p>Wrong Credential</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
