import "./ExpenseFilter.css";
function ExpenseFilter(props) {
  function yearHandler(event) {
    props.onYearChange(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control ">
        <label htmlFor="cars" className="expenses-filter label">
          Filter by Year
        </label>
        <select
          value={props.selected}
          name="cars"
          id="cars"
          onChange={yearHandler}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
export default ExpenseFilter;
