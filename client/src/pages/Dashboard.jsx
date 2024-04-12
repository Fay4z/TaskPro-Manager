import Charts from "@/components/Charts";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ModeToggle />
      <Charts />
    </div>
  );
}

export default Dashboard;
