import useFetch from "../hooks/useFetch";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  //callback function
  const transformData = (resData, taskText) => {
    const generatedId = resData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };
  const { isLoading, error, sendTaskRequest } = useFetch(
    {
      URL: "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/task.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    transformData
  );

  const enterTaskHandler = async (task) => {
    await sendTaskRequest(task);
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

// -----------without custom hook-----------

// const NewTask = (props) => {
//   console.log("new tasks render");

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const enterTaskHandler = async (taskText) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/task.json",
//         {
//           method: "POST",
//           body: JSON.stringify({ text: taskText }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Request failed!");
//       }
//       const data = await response.json();
//       const generatedId = data.name; // firebase-specific => "name" contains generated id
//       const createdTask = { id: generatedId, text: taskText };
//       props.onAddTask(createdTask);
//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     }
//     setIsLoading(false);
//   };

//   return (
//     <Section>
//       <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
//       {error && <p>{error}</p>}
//     </Section>
//   );
// };

// export default NewTask;
