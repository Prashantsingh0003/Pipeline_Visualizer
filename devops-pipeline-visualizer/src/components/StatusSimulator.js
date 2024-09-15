import React, { useState } from 'react';
import './StatusSimulator.css';

const StatusSimulator = () => {
    const [status, setStatus] = useState("Running");

    const simulateStatus = () => {
        const statuses = ["Success", "Failure", "Error", "Running"];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setStatus(randomStatus);
    };

    return (
        <div className="status-simulator">
            <h2>Pipeline Status: {status}</h2>
            <button onClick={simulateStatus}>Simulate Pipeline</button>
        </div>
    );
};

export default StatusSimulator;
