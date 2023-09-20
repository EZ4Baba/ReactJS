import { useRef, useState } from "react";

function Stopwatch() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  let timerID = useRef(null);
  const StartStopwatch = () => {
    clearInterval(timerID.current);
    setStart(Date.now());
    timerID.current = setInterval(() => {
      setEnd(Date.now());
    }, 100);
  };
  const StopStopwatch = () => {
    clearInterval(timerID.current);
  };
  const ResetStopwatch = () => {
    clearInterval(timerID.current);
    setStart(0);
    setEnd(0);
  };
  return (
    <>
      <div>{(end - start) / 1000}</div>
      <button onClick={StartStopwatch}>Start</button>
      <button onClick={StopStopwatch}>Stop</button>
      <button onClick={ResetStopwatch}>Reset</button>
    </>
  );
}
export default Stopwatch;
