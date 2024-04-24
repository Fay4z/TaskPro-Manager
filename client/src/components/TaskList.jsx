import dateFormat from "dateformat";
import useTaskContext from "@/hooks/useTaskContext";
import { toast } from "sonner";
import AllTasks from "./AllTasks";
import AllTasksByStatus from "./AllTaskByStatus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useAuthContext } from "@/hooks/useAuthContext";

export default function TaskList({ tasks }) {
  const { dispatch } = useTaskContext();
  const { user } = useAuthContext();

  const formatDate = (date) => {
    return dateFormat(date, "mmmm dS, yyyy");
  };

  const handleDelete = async (e) => {
    try {
      const id = e.target.dataset.id;
      console.log(id);
      console.log(user);
      if (!user) {
        return;
      }
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
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
        toast("Task has been deleted", {
          description: "Kindly refresh the page to see changes",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.dataset.id);
  };

  return (
    <div>
      <Tabs defaultValue="allTasks" className="">
        <TabsList className="grid grid-cols-4 w-[400px] sm:w-[600px]">
          <TabsTrigger value="allTasks">All Tasks</TabsTrigger>
          <TabsTrigger value="todoTasks">Todo</TabsTrigger>
          <TabsTrigger value="doingTasks">Doing</TabsTrigger>
          <TabsTrigger value="completedTasks">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="allTasks">
          <AllTasks
            tasks={tasks}
            formatDate={formatDate}
            handleDelete={handleDelete}
          />
        </TabsContent>
        <TabsContent value="todoTasks">
          <AllTasksByStatus
            status={"Todo"}
            formatDate={formatDate}
            handleDelete={handleDelete}
          />
        </TabsContent>
        <TabsContent value="doingTasks">
          <AllTasksByStatus
            status={"Doing"}
            formatDate={formatDate}
            handleDelete={handleDelete}
          />
        </TabsContent>
        <TabsContent value="completedTasks">
          <AllTasksByStatus
            status={"Completed"}
            formatDate={formatDate}
            handleDelete={handleDelete}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
