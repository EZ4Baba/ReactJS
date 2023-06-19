import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  // without custom hook useCounter

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // way - 1 with custom hook
  let counter = useCounter("add");

  //way -2 with custom hook
  // let counter = useCounter((prev) => {
  //   return prev + 1;
  // });

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
