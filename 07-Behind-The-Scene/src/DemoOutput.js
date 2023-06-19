function DemoOutput(props) {
  console.log("demo running");

  return <div>{props.show ? <p>this is new</p> : ""}</div>;
}
export default DemoOutput;
