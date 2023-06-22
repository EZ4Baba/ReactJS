import useInput from "../hooks/use-input";
const SimpleInputTwo = (props) => {
  const NameValidator = (enteredName) => {
    return enteredName.trim() !== "";
  };
  const EmailValidator = (enteredEmail) => {
    return enteredEmail.includes("@");
  };
  const {
    enteredValue: nameValue,
    valueIsValid: nameValueValid,
    hasError: nameError,
    InputChangeHandler: nameChangeHandler,
    InputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(NameValidator);
  const {
    enteredValue: emailValue,
    valueIsValid: emailValueValid,
    hasError: emailError,
    InputChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(EmailValidator);

  const formValid = nameValueValid && emailValueValid;
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (nameError) return;

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameError ? "form-control invalid" : "form-control";

  const emailInputClasses = emailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputTwo;
