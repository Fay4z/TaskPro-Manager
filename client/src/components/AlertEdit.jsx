import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useTaskContext from "@/hooks/useTaskContext";
import { FilePen } from "lucide-react";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const AlertEdit = ({ taskId, task }) => {
  const { dispatch } = useTaskContext();

  const [open, setOpen] = useState(false);

  const [updatetask, setUpdateTask] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update the task in your data source
    console.log("Updated task:", updatetask);

    if (updatetask) {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatetask),
      });
      const updatedTask = await response.json();
      console.log("after updatation in db", updatedTask);

      if (!response.ok) {
        console.log("error");
      }

      if (response.ok) {
        console.log("no error");
        console.log("ss", updatedTask);
        dispatch({
          type: "UPDATE_TASK",
          payload: updatedTask,
        });
        toast("Task has been edited", {
          description: "Kindly refresh the page to see changes",
        });
        setOpen(false);
      }
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <span className="mr-3">
              <FilePen />
            </span>{" "}
            Edit Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Edit Task here. Click update task when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title:</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={updatetask.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description:</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={updatetask.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dueDate">Due Date:</Label>
                <Input
                  type="datetime-local"
                  id="dueDate"
                  name="dueDate"
                  value={updatetask.dueDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="status">Status:</Label>
                <select
                  className="  border p-2 rounded-md w-full text-sm "
                  id="status"
                  name="status"
                  value={updatetask.status}
                  onChange={handleInputChange}
                >
                  <option value="Todo">Todo</option>
                  <option value="Doing">Doing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="priority">Priority:</Label>
                <select
                  className="  border p-2 rounded-md w-full text-sm "
                  id="priority"
                  name="priority"
                  value={updatetask.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <Button type="submit">Update Task</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlertEdit;
