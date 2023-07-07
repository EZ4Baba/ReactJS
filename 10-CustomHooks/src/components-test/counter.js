import useCounter from "../hooks-test/useCounter";

function Counter() {
  const { count, increament } = useCounter();
  return (
    <>
      <button onClick={increament}>Clicked {count} times</button>
    </>
  );
}
export default Counter;
