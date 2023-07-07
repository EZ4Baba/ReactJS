import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

import Counter from "./components-test/counter";
import HoverCounter from "./components-test/hoverCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>

    //test

    // <>
    //   <Counter />
    //   <HoverCounter />
    // </>
  );
}

export default App;
