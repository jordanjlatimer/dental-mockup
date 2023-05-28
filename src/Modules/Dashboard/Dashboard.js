import React from "react";
import Graphs from "./Graphs";
import QuickStats from "./QuickStats/QuickStats";

export default function Dashboard(props) {
  return (
    <>
      <h1 className="moduleTitle">Dashboard</h1>
      <div className="dashboardContent">
        <QuickStats />
        <Graphs />
      </div>
    </>
  );
}
