import { useRef, useState } from "react";

import Input from "../../UI/Input";
import "./MealItemForm.css";

const MealItemForm = (props) => {
  const [valid, setValid] = useState(true);
  const inputRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    let quantity_str = inputRef.current.value;
    let quantity = +quantity_str;
    if (quantity_str.trim().length === 0 || quantity < 1 || quantity > 5) {
      setValid(false);
      return;
    }
    setValid(true);
    props.onAdd(quantity);
    // } else {
    //   setValid(true);
    // }
  };
  return (
    <form className="form" onSubmit={SubmitHandler}>
      <Input
        ref={inputRef}
        label={"Amount"}
        input={{
          id: `amount${Math.random()}`,
          type: "number",

          step: "1",
          defaultValue: "1",
        }}
      />
      <button> Add</button>
      {!valid && <div> Please fill correct amount</div>}
    </form>
  );
};
export default MealItemForm;
