//custom hook to fetch data from db
import { useState, useEffect } from "react";
import useTaskContext from "./useTaskContext";
import { useAuthContext } from "./useAuthContext";

const useFetchTasks = () => {
  const { dispatch } = useTaskContext();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://${import.meta.env.VITE_WEB_URL}/tasks`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
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
    if (user) {
      fetchData();
    }
  }, [user]);

  return { tasks, loading };
};

export default useFetchTasks;
