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
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export function CreateTask() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { tasks, dispatch } = useTaskContext();

  const onSubmit = async (data) => {
    console.log(data);
    if (data) {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const createdTask = await response.json();
      console.log(createdTask);

      if (!response.ok) {
        console.log("error");
      }
      if (response.ok) {
        console.log("no error");
        console.log("ss", createdTask);
        dispatch({
          type: "CREATE_TASK",
          payload: createdTask,
        });
      }
    }
  };
  if (!errors == {}) {
    console.log(errors);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="mr-3">
            <Plus />
          </span>{" "}
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Create Task here. Click create when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <select
                {...register("status", { required: true })}
                className=" border p-2 rounded-md w-full text-sm "
              >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <select
                {...register("priority", { required: true })}
                className="  border p-2 rounded-md w-full text-sm "
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                placeholder="Description"
                {...register("description", { required: true, min: 8 })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dueDate">DueDate</Label>
              <Input
                type="datetime-local"
                placeholder="DueDate"
                {...register("dueDate", { required: true })}
              />
            </div>

            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
