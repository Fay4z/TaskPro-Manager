import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import AlertDelete from "./AlertDelete";
import AlertEdit from "./AlertEdit";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";

function AllTasksByStatus({ status, formatDate, handleDelete }) {
  const [taskstatus, setTaskStatus] = useState(status);
  const [taskByStatus, setTaskByStatus] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    async function fetchTasksbyStatus(status) {
      try {
        const response = await fetch(
          `http://localhost:3000/tasks/status/${status}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setTaskByStatus(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (user) {
      fetchTasksbyStatus(taskstatus);
    }
  }, [user]);

  if (taskByStatus.message) {
    return <p>{taskByStatus.message}</p>;
  }
  return (
    <div className="space-y-3 sm:space-y-0 md:grid md:grid-cols-2 md:gap-5">
      {taskByStatus.message && <p>{taskByStatus.message}</p>}
      {taskByStatus ? (
        taskByStatus.map((task) => (
          <div key={task._id}>
            <Card className=" p-2">
              <CardHeader className="pb-1">
                <CardTitle>
                  <div className=" flex justify-between">
                    <h3>{task.title}</h3>
                    <p className="block text-sm">
                      {formatDate(task.createdAt)}
                    </p>
                  </div>
                </CardTitle>
                <CardDescription className="max-w-lg text-balance leading-normal">
                  {task.description ? task.description : "No description"}
                </CardDescription>
              </CardHeader>
              <CardContent className="my-3">
                <div className="space-y-4">
                  <h3>{task._id}</h3>

                  <div className="flex space-x-3">
                    <h4 className="text-md text-balance">Status: </h4>
                    <Badge>{task.status}</Badge>
                  </div>
                  <div className=" flex space-x-3">
                    <h4 className="text-md text-balance">Due Date: </h4>
                    <p>{formatDate(task.dueDate)}</p>
                  </div>
                  <div className=" flex space-x-3">
                    <h4 className="text-md text-balance">Priority: </h4>
                    <p>{task.priority}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className=" space-x-3">
                <AlertEdit taskId={task._id} task={task} />
                <AlertDelete handleDelete={handleDelete} taskId={task._id} />
              </CardFooter>
            </Card>
          </div>
        ))
      ) : (
        <p>error</p>
      )}
    </div>
  );
}

export default AllTasksByStatus;
