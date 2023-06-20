import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [valid, setValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const [formIsValid, setformIsValid] = useState(false);

  function inputChangeHandler(e) {
    setEnteredName(e.target.value);
    if (e.target.value === "") setValid(false);
    else setValid(true);
    setInputTouched(true);
  }
  function inputBlurHandler() {
    setInputTouched(true);
    if (enteredName.trim() === "") setValid(false);
  }

  const [emailisValid, setEmailisValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  function EmailChangeHandler(e) {
    setEnteredEmail(e.target.value);
    if (e.target.value.includes("@") && e.target.value !== "")
      setEmailisValid(true);
    else setEmailisValid(false);
  }
  function EmailBlurHandler() {
    if (enteredEmail.includes("@")) setEmailisValid(true);
  }
  function fromHandler(e) {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setValid(false);
    } else {
      setValid(true);
    }
    if (!enteredEmail.includes("@") || enteredEmail.trim() !== "") {
      console.log("email not includes @", enteredEmail);

      setEmailisValid(false);
    } else {
      console.log("email includes @");

      setEmailisValid(true);
    }
    setEnteredName("");
    setEnteredEmail("");
    setInputTouched(true);

    console.log("form cmplte");
  }
  useEffect(() => {
    console.log("use effect ran");
    if (enteredName && emailisValid) setformIsValid(true);
    else setformIsValid(false);
  }, [enteredName, emailisValid]);

  return (
    <form onSubmit={fromHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="text"
          id="email"
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
        />
      </div>
      {!valid && inputTouched && <p>Wrong Credential</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
