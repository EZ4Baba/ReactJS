import { useRef, useState } from "react";
import Input from "../UI/Input";
import "./MealItemForm.css";

function MealItemForm(props) {
  const [error, setError] = useState(false);
  const inputRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const amount = inputRef.current.value;
    const amountInNumber = +amount;

    if (amountInNumber === 0 || amountInNumber < 0 || amountInNumber > 5) {
      setError(true);
      return;
    }
    setError(false);
    props.onAddItem(inputRef.current.value);
  }
  return (
    <form onSubmit={submitHandler} className="form">
      <Input
        ref={inputRef}
        label={"Amount"}
        input={{
          id: `amount${props.id}`,
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add</button>
      {error && <p>Enter Valid Amount</p>}
    </form>
  );
}
export default MealItemForm;
