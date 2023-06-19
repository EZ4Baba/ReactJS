// import Context_Comp from "./context-component";
// import { useContext } from "react";
// const compC = () => {
//   return (
//     <Context_Comp.Consumer>
//       {(passedValue) => {
//         // passed value will be value through Context_Comp.provider component
//         return (
//           <div>
//             <div>I'm bottom component, CompC</div>

//             {passedValue.id.map((i) => {
//               return <div>{i}</div>;
//             })}
//           </div>
//         );
//       }}
//     </Context_Comp.Consumer>
//   );
// };
// export default compC;

import Context_Comp from "./context-component";
import { useContext } from "react";
const CompC = () => {
  console.log("rendering C");
  let ctxvalues = useContext(Context_Comp);
  const btnHandler = () => {
    // ctxvalues.id += " Nath";
    // console.log(ctxvalues.id);
    // ctxvalues.addString(" tiwari");
    // console.log(ctxvalues.id);
    ctxvalues.valhandler("Aditya Nath Tiwari");
  };
  return (
    <>
      <div>
        <div>I'm bottom component, CompC</div>
        <button onClick={btnHandler}>Add</button>
      </div>
    </>
  );
};
export default CompC;
