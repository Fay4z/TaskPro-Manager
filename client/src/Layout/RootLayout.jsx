import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Task</NavLink>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
