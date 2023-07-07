import { useState } from "react";
import useCounter from "../hooks-test/useCounter";
function HoverCounter() {
  const { count, increament } = useCounter();
  return (
    <>
      <h1 onMouseOver={increament}>Hovered {count} times</h1>
    </>
  );
}
export default HoverCounter;
