import CardDashboard from "@/components/CardDashboard";
import useFetchTasks from "@/hooks/fetchTasks";

function Dashboard() {
  const { tasks, loading } = useFetchTasks();
  console.log(tasks);
  return (
    <div>
      <div className=" p-4 md:p-10">
        <h1 className=" font-semibold text-2xl">Tasks filtered by Status</h1>
        <CardDashboard tasks={tasks} />
      </div>
    </div>
  );
}

export default Dashboard;
