import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import DummyLayout from "./Layout/DummyLayout";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DummyLayout />}>
            <Route
              index
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="tasks" element={<Tasks />} />
            <Route
              path="login"
              element={!user ? <LoginForm /> : <Navigate to="/" />}
            />
            <Route
              path="signup"
              element={!user ? <SignupForm /> : <LoginForm />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
