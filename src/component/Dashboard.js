import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <ul>
        Your Events
        <li>Event</li>
        <li>Event</li>
      </ul>
      <button class="create-event-button">Create New Event</button>
    </div>
  );
}

export default Dashboard;
