import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

const AlertEdit = ({ taskId, handleDelete }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Edit this Task</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <Card className="w-[450px]">
              <CardHeader>
                <CardTitle>Edit Task</CardTitle>
                <CardDescription>
                  Edit your existing task in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Title of the task" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="todo">Todo</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="doing">Doing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="priority">Priority</Label>
                      <Select>
                        <SelectTrigger id="priority">
                          <SelectValue placeholder="Select Priority" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Description of the task"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input id="dueDate" placeholder="Title of the task" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertEdit;
