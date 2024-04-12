import useTaskContext from "@/hooks/useTaskContext";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import dateformat from "dateformat";

const Edit = ({ task, taskId }) => {
  //   const { tasks, dispatch } = useTaskContext();

  const [updatetask, setUpdateTask] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the task in your data source
    console.log("Updated task:", updatetask);
    // Reset the form
    setUpdateTask(task);
  };

  return (
    <div>
      <h2>Edit Task</h2>
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
              type="date"
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
    </div>
  );
};

export default Edit;
