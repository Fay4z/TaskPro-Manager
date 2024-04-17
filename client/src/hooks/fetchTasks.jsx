//custom hook to fetch data from db
import { useState, useEffect } from "react";
import useTaskContext from "./useTaskContext";

const useFetchTasks = () => {
  const { dispatch } = useTaskContext();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks"); // Replace with your API endpoint
        const data = await response.json();
        setTasks(data);
        setLoading(false);
        if (response.ok) {
          dispatch({ type: "SET_TASK", payload: data });
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  return { tasks, loading };
};

export default useFetchTasks;
