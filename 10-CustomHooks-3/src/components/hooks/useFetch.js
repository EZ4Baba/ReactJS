import { useCallback, useState } from "react";

function useFetch(responseHandlerCallbaack) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // we can use useCallback here if we are using this function as dependency in use effect in App.js
  const sendTaskRequest = useCallback(
    async (fetchConfig, taskText) => {
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
    },
    [responseHandlerCallbaack]
  );
  return {
    isLoading: isLoading,
    error: error,
    sendTaskRequest: sendTaskRequest,
  };
}

export default useFetch;
