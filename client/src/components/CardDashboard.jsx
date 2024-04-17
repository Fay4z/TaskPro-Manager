import { ArrowLeftIcon, DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function CardDashboard({ tasks }) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [taskStatus, setTaskStatus] = useState({
    totalTasks: 0,
    completedTasksCount: 0,
    pendingTasksCount: 0,
    doingTaskCount: 0,
  });

  const taskStatusFunction = (tasks) => {
    const completedTasks = tasks.filter((task) => task.status === "Completed");
    const pendingTasks = tasks.filter((task) => task.status === "Todo");
    const doingTasks = tasks.filter((task) => task.status === "Doing");
    const totalTasks = tasks.length;
    const completedTasksCount = completedTasks.length;
    const pendingTasksCount = pendingTasks.length;
    const doingTaskCount = doingTasks.length;

    setTaskStatus({
      totalTasks,
      completedTasksCount,
      pendingTasksCount,
      doingTaskCount,
    });
  };

  useEffect(() => {
    setTotalTasks(tasks.length);
    taskStatusFunction(tasks);
  }, [tasks]);
  console.log(totalTasks);
  return (
    <div>
      <div className="">
        <TaskCard taskCount={taskStatus} title="Total Tasks" />
      </div>
    </div>
  );
}

function TaskCard({ taskCount, title }) {
  const navigate = useNavigate();
  const handleclick = () => {
    console.log("clicked");
    navigate("/tasks");
  };
  return (
    <div className="flex-1 flex flex-col">
      <div className="grid gap-4 mt-4 md:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col justify-center p-6">
            <div className="text-3xl font-bold">{taskCount.totalTasks}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Total Tasks
            </div>
            <div className="flex flex-col space-y-6 pt-6">
              <Button onClick={handleclick}>Add a new task</Button>
              <Button onClick={handleclick}>View all tasks</Button>
            </div>
          </CardContent>
        </Card>
        <div className="md:col-span-2 space-y-3">
          <Card>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="text-3xl font-bold">
                {taskCount.pendingTasksCount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Pending Tasks
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="text-3xl font-bold">
                {taskCount.completedTasksCount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Completed Tasks
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="text-3xl font-bold">
                {taskCount.doingTaskCount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Tasks In Progress
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
