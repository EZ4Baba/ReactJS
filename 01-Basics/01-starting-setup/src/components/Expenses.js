import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [year, setYear] = useState("2022");

  function addYearHadnler(newYear) {
    setYear(newYear);
  }
  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === year
  );
  // another cleaner way to render expenses on slected year
  //------
  // let year_expenses = <p>No expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   year_expenses = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       price={expense.amount}
  //     />
  //   ));
  //--------

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart items={filteredExpenses} />
        <ExpenseFilter selected={year} onYearChange={addYearHadnler} />
        {filteredExpenses.length === 0 ? (
          <p>No Expense Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.amount}
            />
          ))
        )}
        {/* clear way to render */}
        {/* {year_expenses} */}
      </Card>
    </div>
  );
}
export default Expenses;
