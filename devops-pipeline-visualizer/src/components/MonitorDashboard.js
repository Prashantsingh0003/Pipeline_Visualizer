import React from "react";
import "./MonitorDashboard.css";

const MonitorDashboard = () => {
  return (
    <div className="monitor-dashboard">
      <h2>Monitoring Dashboard</h2>
      <p>Monitor the performance and reliability of your deployed applications in real-time.</p>
      <div className="tools">
        <h3>Tools Used</h3>
        <ul>
          <li>Prometheus</li>
          <li>Grafana</li>
          <li>New Relic</li>
        </ul>
      </div>
    </div>
  );
};

export default MonitorDashboard;
