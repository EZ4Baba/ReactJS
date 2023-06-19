import { useEffect, useState } from "react";

const useCounter = (addorsub) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let timerID = setInterval(() => {
      if (addorsub === "add") {
        setCounter((c) => c + 1);
      } else if (addorsub === "sub") {
        setCounter((c) => c - 1);
      }
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [addorsub]);
  return counter;
};

//way -2 (used in forwardcounter.js)
// const useCounter = (SetterFn) => {
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     let timerID = setInterval(() => {
//       setCounter(SetterFn);
//     }, 1000);
//     return () => {
//       clearInterval(timerID);
//     };
//   }, []);
//   return counter;
// };
export default useCounter;
