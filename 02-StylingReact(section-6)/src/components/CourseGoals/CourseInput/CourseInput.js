import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // useState to check validity
  const [isValid, setisValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    setisValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //cant add empty goals
    if (enteredValue.trim() === "") {
      //invalid
      setisValid(false);
      return; // stops execution of this function ie dont add the goals
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Using Inline
      
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div> */}

      {/* using Classname dynamically */}

      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
