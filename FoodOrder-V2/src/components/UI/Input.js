import React from "react";
import "./Input.css";
const Input = React.forwardRef((props, passedref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={passedref} id={props.input.id} {...props.input} />
    </div>
  );
});
export default Input;
