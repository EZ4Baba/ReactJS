import React, { useState } from "react";
import DemoOutput from "./DemoOutput";

function App() {
  console.log("app running");
  const [flag, setFlag] = useState(false);
  const toogleHandler = () => {
    setFlag((f) => !f);
  };
  return (
    <div>
      <h1>Hi There</h1>
      <DemoOutput show={flag} />
      <button onClick={toogleHandler}>TOGGLE BUTTON</button>
    </div>
  );
}

export default App;
