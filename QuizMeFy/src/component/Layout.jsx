import React from "react";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <Outlet />
    </div>
  );
}
