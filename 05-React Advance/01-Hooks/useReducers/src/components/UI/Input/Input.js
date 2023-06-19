import classes from "./Input.css";
const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.IsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.Id}>{props.Label}</label>
      <input
        type={props.Type}
        id={props.Id}
        value={props.Value}
        onChange={props.OnChange}
        onBlur={props.OnBlur}
      />
    </div>
  );
};
export default Input;
