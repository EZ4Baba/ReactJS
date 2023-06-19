import { useState } from "react";

function useFetch(fetchConfig, responseHandlerCallbaack) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // we can use useCallback here if we are using this function as dependency in use effect in App.js
  const sendTaskRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(fetchConfig.URL, {
        method: fetchConfig.method ? fetchConfig.method : "GET",
        body: taskText ? JSON.stringify(taskText) : null,
        headers: fetchConfig.headers ? fetchConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      responseHandlerCallbaack(data, taskText);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return {
    isLoading: isLoading,
    error: error,
    sendTaskRequest: sendTaskRequest,
  };
}

export default useFetch;

// "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/task.json",
//         {
//           method: "POST",
//           body: JSON.stringify({ text: taskText }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }

// ----wrong ----
// export function useFetch(options) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   let data;
//   useEffect(() => {
//     let dataf = (async function getData() {
//       let fetchoptions = {
//         method: "GET",
//       };
//       if (options.method === "POST") {
//         fetchoptions = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(options.body),
//         };
//       }
//       let response = await fetch(options.URL, fetchoptions);
//       data = await response.json();
//       //   console.log(data);
//       //   setIsLoading(false);
//       return data;
//     })().then((dt) => {
//       return dt;
//     });
//     console.log(dataf);
//   }, [options.URL, options.method]);

//   let alldata = {
//     data: data,
//     isLoading: false,
//     error: error,
//   };
//   return alldata;
// }
