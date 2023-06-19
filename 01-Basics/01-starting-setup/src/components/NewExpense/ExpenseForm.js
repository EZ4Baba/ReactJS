import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ onSaveData, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // we can also use on state instead of 3 seprate

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  function TitleChangeHandler(event) {
    setEnteredTitle((prevState) => {
      return event.target.value;
    });

    // using one state instead of 3
    // setUserInput({...userInput,enteredTitle:event.target.value})

    // right way to update the state(if depending on previous state)

    // setUserInput((previousState) => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  }
  function DateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function AmountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function cancelHandler() {
    onCancel(true);
  }
  function formSubmit(event) {
    event.preventDefault();
    let data = {
      title: enteredTitle,
      amount: +enteredAmount, //+ for number conversion
      date: new Date(enteredDate),
    };
    onSaveData(data);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-05-1"
            max="2024-05-01"
            value={enteredDate}
            onChange={DateChangeHandler}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1.00"
            step="1.00"
            value={enteredAmount}
            onChange={AmountChangeHandler}
            required={true}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
