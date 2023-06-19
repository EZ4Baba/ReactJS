import React, { useState } from "react";
import CompA from "./compA";
import Context_Comp from "./context-component";
import CompZ from "./CompZ";
import CompX from "./CompX";

function App() {
  console.log("rendering APP");
  const [val1, setVal] = useState("Aditya");
  let context = {
    val: val1,
    valhandler: valfunction,
  };

  function valfunction(str) {
    setVal(str);
  }

  return (
    <>
      <Context_Comp.Provider value={context}>
        <CompA />
        <CompZ />
      </Context_Comp.Provider>
      <CompX pv={val1}></CompX>
    </>
  );
}

export default App;
