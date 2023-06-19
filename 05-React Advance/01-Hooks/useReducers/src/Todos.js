import { useReducer, useRef } from "react";

function reducer(currentState, action) {
  console.log("reducer called and current satate ", currentState);
  switch (action.type) {
    case "finalInput":
      return [...currentState, action.payLoad];
  }
}

function Todos() {
  console.log("rendeering");
  const [text, dispatcherFn] = useReducer(reducer, []);
  //   const [nam, setNam] = useState("");
  let inputRef = useRef();

  function formhandler(e) {
    e.preventDefault();
    dispatcherFn({ type: "finalInput", payLoad: inputRef.current.value });
    inputRef.current.value = "";
    console.log("form hanlder");
  }
  return (
    <div>
      {text.map((ui) => {
        return <h2 key={Math.random()}>{ui}</h2>;
      })}
      <form onSubmit={formhandler}>
        <input
          ref={inputRef}
          type="text"
          //   value={}
          //   onChange={(e) => {
          //     setNam(e.target.value);
          //   }}
        />
      </form>
    </div>
  );
}
export default Todos;
