import CompB from "./compB";
const compA = () => {
  console.log("rendering A");
  return (
    <>
      <CompB />
    </>
  );
};
export default compA;
