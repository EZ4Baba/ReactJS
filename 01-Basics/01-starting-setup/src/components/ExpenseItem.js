import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card";

function ExpenseItem(props) {
  // props = {
  //   title:xyz,
  //   day:xyz,
  //   price:xyz,
  // }
  // use Effect
  // 1st argument will be initial value for the variable
  const [title, setTitle] = useState(props.title);

  function ran() {
    return Math.random() * 100;
  }
  const clickHandler = () => {
    setTitle(ran); // pass the new value u want to set, to setTitle function
    console.log("changed");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.price}$</div>
        <button onClick={clickHandler}> change</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
