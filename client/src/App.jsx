import RootLayout from "./Layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import DummyLayout from "./Layout/DummyLayout";
import TasksTable from "./pages/TasksTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DummyLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="tasksTable" element={<TasksTable />} />
            <Route path="task/:taskId" element={<TaskDetails />} />
            <Route path="teams" element={<Users />} />
            <Route path="trash" element={<Trash />} />
            <Route path="sign-in" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
