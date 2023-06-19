import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
function NewExpense({ onAddExpense }) {
  let [flag, SetFlag] = useState(false);
  function DataHandler(form_data) {
    let data = { ...form_data, id: Math.random() * 10 };
    onAddExpense(data); // to move data to parent component
    SetFlag((prev) => !prev); // to collapse the add expense form
  }

  function AddExpenseHandler() {
    SetFlag((prev) => !prev);
  }
  function CancelHandler(state) {
    if (state) SetFlag((prev) => !prev);
  }
  return (
    <div className="new-expense">
      {flag === false ? (
        <button onClick={AddExpenseHandler}>Add new Expense</button>
      ) : (
        <ExpenseForm onSaveData={DataHandler} onCancel={CancelHandler} />
      )}
      {/* <ExpenseForm onSaveData={DataHandler} />; */}
    </div>
  );
}
export default NewExpense;
