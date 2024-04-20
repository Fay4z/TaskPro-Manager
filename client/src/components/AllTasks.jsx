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

function AllTasks({ tasks, formatDate, handleDelete }) {
  return (
    <div className="space-y-3 sm:space-y-0 md:grid md:grid-cols-2 md:gap-5">
      {tasks ? (
        tasks.map((task) => (
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

export default AllTasks;
