import { useContext, useEffect } from "react";

import Context_Comp from "./context-component";
function CompZ() {
  let valueCTX = useContext(Context_Comp);
  console.log("rendering Z");
  console.log(valueCTX);

  // useEffect(() => {
  //   console.log("use effect");
  // }, [valueCTX]);

  return (
    <div>
      <p>i m comp Z</p>
      <div>{valueCTX.val}</div>
    </div>
  );
}
export default CompZ;
