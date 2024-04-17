import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
      <div className=" space-y-8 sm:space-y-0 md:grid md:grid-cols-2 md:gap-5">
        <div className="">
          <TaskCard taskCount={taskStatus.totalTasks} title="Total Task" />
          <TaskCard
            taskCount={taskStatus.completedTasksCount}
            title="Completed Task"
          />
        </div>
        <div>
          <TaskCard
            taskCount={taskStatus.pendingTasksCount}
            title="Pending Task"
          />
          <TaskCard
            taskCount={taskStatus.doingTaskCount}
            title="Ongoing Task"
          />
        </div>
      </div>
    </div>
  );
}

function TaskCard({ taskCount, title }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{taskCount}</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
