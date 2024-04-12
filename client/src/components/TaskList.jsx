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
import dateFormat, { masks } from "dateformat";
import useTaskContext from "@/hooks/useTaskContext";
import AlertDelete from "./AlertDelete";
import AlertEdit from "./AlertEdit";
import Edit from "./Edit";

export default function TaskList({ tasks }) {
  const { dispatch } = useTaskContext();

  const formatDate = (date) => {
    return dateFormat(date, "mmmm dS, yyyy");
  };

  const handleDelete = async (e) => {
    try {
      const id = e.target.dataset.id;
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.status === 200) {
        console.log("Task deleted");
      }
      if (response.ok) {
        dispatch({
          type: "DEL_TASK",
          payload: data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (e) => {
    try {
      const id = e.target.dataset.id;
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
      });
      if (res.status === 200) {
        console.log("Task updated");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.dataset.id);
  };

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
                <AlertEdit
                  handleEdit={handleEdit}
                  taskId={task._id}
                  task={task}
                />
                {/* <Edit taskId={task._id} task={task} /> */}
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
