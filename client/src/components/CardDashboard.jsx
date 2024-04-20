import { ArrowLeftIcon, DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function CardDashboard({ tasks }) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [taskStatus, setTaskStatus] = useState({
    totalTasks: 0,
    completedTasksCount: 0,
    pendingTasksCount: 0,
    doingTaskCount: 0,
  });
  const [taskPriority, setTaskPriority] = useState({
    totalTasks: 0,
    highPriorityTasksCount: 0,
    mediumPriorityTasksCount: 0,
    lowPriorityTasksCount: 0,
  });

  const taskPriorityFunction = (tasks) => {
    const highPriorityTasks = tasks.filter((task) => task.priority === "High");
    const mediumPriorityTasks = tasks.filter(
      (task) => task.priority === "Medium"
    );
    const lowPriorityTasks = tasks.filter((task) => task.priority === "Low");
    const totalTasks = tasks.length;
    const highPriorityTasksCount = highPriorityTasks.length;
    const mediumPriorityTasksCount = mediumPriorityTasks.length;
    const lowPriorityTasksCount = lowPriorityTasks.length;

    setTaskPriority({
      totalTasks,
      highPriorityTasksCount,
      mediumPriorityTasksCount,
      lowPriorityTasksCount,
    });
  };

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
    taskPriorityFunction(tasks);
  }, [tasks]);
  console.log(totalTasks);
  return (
    <div>
      <Tabs defaultValue="status" className="">
        <TabsList className="grid grid-cols-2 w-[200px] sm:w-[400px]">
          <TabsTrigger value="status">Status</TabsTrigger>
          <TabsTrigger value="priority">Priority</TabsTrigger>
        </TabsList>
        <TabsContent value="status">
          <TaskCardbyStatus taskCount={taskStatus} />
        </TabsContent>
        <TabsContent value="priority">
          <TaskCardbyPriority taskCount={taskPriority} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TaskCardbyStatus({ taskCount }) {
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

function TaskCardbyPriority({ taskCount }) {
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
              Total tasks
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
                {taskCount.highPriorityTasksCount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                High Priority Tasks
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="text-3xl font-bold">
                {taskCount.mediumPriorityTasksCount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Medium Priority Tasks
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="text-3xl font-bold">
                {taskCount.lowPriorityTasksCount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Low Priority Tasks
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
