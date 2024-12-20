import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NavLink to="upload">Upload</NavLink>
      <NavLink to="all">All</NavLink>
      <Outlet />
    </div>
  );
};

export default Dashboard;
