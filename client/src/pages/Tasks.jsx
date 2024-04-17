import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import useTaskContext from "@/hooks/useTaskContext";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { CreateTask } from "@/components/CreateTask";
import useFetchTasks from "@/hooks/fetchTasks";

function Tasks() {
  const [alltasks, setAllTasks] = useState([]);
  // const { tasks, dispatch } = useTaskContext();
  const { tasks, loading } = useFetchTasks();
  console.log(tasks);
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/tasks");
  //       const data = await response.json();
  //       setAllTasks(data);
  //       if (response.ok) {
  //         dispatch({ type: "SET_TASK", payload: data });
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  //   fetchTasks();
  // }, []);

  return (
    <div className="p-4 sm:p-10">
      <div className=" flex justify-between items-center">
        {/* <h1 className=" text-2xl py-4">Tasks</h1>
        <CreateTask /> */}
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Tasks;
