import Chart from "./Chart/Chart";
function ExpensesChart(props) {
  let chartDataPoint = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];

  for (let expense of props.items) {
    let month = expense.date.getMonth(); //01-01-2023.getMonth=> 0(january)
    chartDataPoint[month].value += expense.amount;
  }
  //   return <div></div>;
  return <Chart dataPoints={chartDataPoint}></Chart>;
}
export default ExpensesChart;
