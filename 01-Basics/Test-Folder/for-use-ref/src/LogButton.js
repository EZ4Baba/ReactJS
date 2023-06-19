import { useRef, useState } from "react";

function LogButton() {
  console.log("re");
  const countRef = useRef(0);
  const [flag, setFlag] = useState(true);

  const handle = () => {
    countRef.current++;
    setFlag((c) => !c);
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return <button onClick={handle}>Click me</button>;
}
export default LogButton;
