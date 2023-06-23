import useInputBasicForm from "../hooks/use-baasicForm";

const BasicForm = (props) => {
  const {
    enteredValue: FNameValue,
    onChangeHandler: FNameChangeHandler,
    onBlurHandler: FNameBlurHandler,
    inputisInvalid: FNameInvalid,
    inputisValid: FNameisValid,
    reset: FReset,
  } = useInputBasicForm((value) => {
    return value.trim() !== ""; //validator Fn...will return true if valid
  });
  const {
    enteredValue: LNameValue,
    onChangeHandler: LNameChangeHandler,
    onBlurHandler: LNameBlurHandler,
    inputisInvalid: LNameInvalid,
    inputisValid: LNameIsValid,
    reset: LReset,
  } = useInputBasicForm((value) => {
    return value.trim() !== ""; //validator Fn...will return true if valid
  });
  const {
    enteredValue: EmailValue,
    onChangeHandler: EmailChangeHandler,
    onBlurHandler: EmailBlurHandler,
    inputisInvalid: EmailInvalid,
    inputisValid: EmailIsValid,
    reset: EReset,
  } = useInputBasicForm((value) => {
    return value.includes("@"); //validator Fn...will return true if valid
  });
  let formIsValid = false;
  if (FNameisValid && LNameIsValid && EmailIsValid) {
    console.log("form is valid");
    formIsValid = true;
  }

  const formHandler = (e) => {
    e.preventDefault();
    // console.log(FNameInvalid, LNameInvalid);
    if (!formIsValid) return;
    FReset();
    LReset();
    EReset();
  };
  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={FNameChangeHandler}
            onBlur={FNameBlurHandler}
            value={FNameValue}
          />
          {!FNameInvalid ? "" : "first name invalid "}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={LNameChangeHandler}
            onBlur={LNameBlurHandler}
            value={LNameValue}
          />
          {!LNameInvalid ? "" : "Last name invalid"}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
          value={EmailValue}
        />
        {!EmailInvalid ? "" : "Email invalid"}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
