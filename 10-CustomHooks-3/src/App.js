import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./components/hooks/useFetch";

function App() {
  const [tasks, setTasks] = useState([]);

  const responseHandlerCallback = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const {
    isLoading,
    error,
    sendTaskRequest: fetchTasks,
  } = useFetch(responseHandlerCallback);

  useEffect(() => {
    fetchTasks({
      URL: "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = async (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);
// const [tasks, setTasks] = useState([]);

// const fetchTasks = async (taskText) => {
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
//     );

//     if (!response.ok) {
//       throw new Error("Request failed!");
//     }

//     const data = await response.json();
//     const loadedTasks = [];

//     for (const taskKey in data) {
//       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//     }

//     setTasks(loadedTasks);
//   } catch (err) {
//     setError(err.message || "Something went wrong!");
//   }
//   setIsLoading(false);
// };
