// import { useEffect, useState } from "react";

// export default function Apple() {
//   const [count, setCount] = useState(0);
//   let [delay, setDelay] = useState(1000);
//   function delayChanger(e) {
//     console.log("change");
//     setDelay(e.target.value);
//   }
//   useEffect(() => {
//     console.log("efect runnig");
//     let timer = setInterval(() => {
//       setCount((count) => count + 1);
//     }, delay);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [delay]);
//   return (
//     <>
//       <div>{count}</div>;<input type="number" onChange={delayChanger}></input>
//     </>
//   );
// }

// "https://overreacted.io/making-setinterval-declarative-with-react-hooks/"

import { useState } from "react";
import useInterval from "./intervalHook";
export default function Counter() {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);
  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, delay);

  return (
    <>
      <h1>{count}</h1>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value <= 100) setDelay(100);
          else setDelay(e.target.value);
        }}
      />
    </>
  );
}
