import { useState } from "react";
import LogButton from "./LogButton";
function App() {
  //   There are 2 rules to remember about references:

  // The value of the reference is persisted (remains unchanged) between component re-renderings;
  // Updating a reference doesn't trigger a component re-rendering.

  /*So, the 2 main differences between reference and state:

  1- Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render;
  2- The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering). */
  const [id, setId] = useState("");
  const [count, setCount] = useState(0);

  const inputHandler = (e) => {
    setId(e.target.value);
    setCount((c) => c + 1);
  };
  return (
    <div>
      <input value={id} onChange={inputHandler} />
      <div>My name id {id}</div>
      <div> this comp haas rendered {count} times</div>
      <LogButton />
    </div>
  );
}
export default App;
