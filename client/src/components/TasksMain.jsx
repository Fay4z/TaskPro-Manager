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

export default function Component() {
  return (
    <div className=" p-4 space-y-4  sm:p-10 md:grid md:grid-cols-2 gap-3">
      <Card className=" p-2">
        <CardHeader className="pb-1">
          <CardTitle>
            <div className=" flex justify-between">
              <h3>Buy Coffee</h3>
              <p className="block text-sm">12th August 2021</p>
            </div>
          </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-normal">
            Introducing Our Dynamic Orders Dashboard for Seamless Management and
            Insightful Analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="my-3">
          <div className="space-y-4">
            <div className="flex space-x-3">
              <h4 className="text-md text-balance">Status: </h4>
              <Badge>To-do</Badge>
            </div>
            <div className=" flex space-x-3">
              <h4 className="text-md text-balance">Due Date: </h4>
              <p>12th August 2021</p>
            </div>
            <div className=" flex space-x-3">
              <h4 className="text-md text-balance">Priority: </h4>
              <p>Medium</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className=" space-x-3">
          <Button variant="outline">Edit this task</Button>
          <Button>Delete this task</Button>
        </CardFooter>
      </Card>

      <Card className=" p-2">
        <CardHeader className="pb-1">
          <CardTitle>
            <div className=" flex justify-between">
              <h3>Buy Coffee</h3>
              <p className="block text-sm">12th August 2021</p>
            </div>
          </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-normal">
            Introducing Our Dynamic Orders Dashboard for Seamless Management and
            Insightful Analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="my-3">
          <div className="space-y-4">
            <div className="flex space-x-3">
              <h4 className="text-md text-balance">Status: </h4>
              <Badge>To-do</Badge>
            </div>
            <div className=" flex space-x-3">
              <h4 className="text-md text-balance">Due Date: </h4>
              <p>12th August 2021</p>
            </div>
            <div className=" flex space-x-3">
              <h4 className="text-md text-balance">Priority: </h4>
              <p>Medium</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className=" space-x-3">
          <Button variant="outline">Edit this task</Button>
          <Button>Delete this task</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
