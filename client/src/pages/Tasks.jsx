import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import useTaskContext from "@/hooks/useTaskContext";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { CreateTask } from "@/components/CreateTask";
import useFetchTasks from "@/hooks/fetchTasks";

function Tasks() {
  const [alltasks, setAllTasks] = useState([]);
  const { tasks, loading } = useFetchTasks();
  console.log(tasks);

  return (
    <div className="p-4 sm:p-10">
      <div className=" flex justify-between items-center">
        <h1 className=" text-2xl py-4">Tasks</h1>
        <CreateTask />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Tasks;
