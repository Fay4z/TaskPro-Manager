import TaskList from "@/components/TaskList";
import useTaskContext from "@/hooks/useTaskContext";
import { useEffect, useState } from "react";

function Tasks() {
  const [alltasks, setAllTasks] = useState([]);
  const { tasks, dispatch } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        setAllTasks(data);
        if (response.ok) {
          dispatch({ type: "SET_TASK", payload: data });
        }
        console.log(tasks);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    console.log(tasks);
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Tasks;
