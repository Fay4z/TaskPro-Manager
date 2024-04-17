import CardDashboard from "@/components/CardDashboard";
import useFetchTasks from "@/hooks/fetchTasks";

function Dashboard() {
  const { tasks, loading } = useFetchTasks();
  console.log(tasks);
  return (
    <div>
      <h1>Dashboard</h1>
      <CardDashboard tasks={tasks} />
    </div>
  );
}

export default Dashboard;
