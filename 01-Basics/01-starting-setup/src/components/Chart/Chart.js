import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  let vals = props.dataPoints.map((data) => data.value);
  let maxValue = Math.max(...vals);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
export default Chart;
