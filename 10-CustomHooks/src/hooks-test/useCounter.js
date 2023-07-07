import { useState } from "react";
function useCounter() {
  const [count, setCount] = useState(0);
  function increament() {
    setCount((c) => c + 1);
  }
  return { count, increament };
}
export default useCounter;
