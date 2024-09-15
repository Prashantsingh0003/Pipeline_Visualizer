import React, { useState } from 'react';
import './BuildSimulator.css';

const BuildSimulator = () => {
    const [status, setStatus] = useState("Idle");

    const triggerBuild = () => {
        setStatus("Building...");
        setTimeout(() => {
            const result = Math.random() > 0.5 ? "Success" : "Failed";
            setStatus(result);
        }, 2000);  // Simulate build time
    };

    return (
        <div className="build-simulator">
            <h2>Build Simulator</h2>
            <p>Status: <strong>{status}</strong></p>
            <button onClick={triggerBuild}>Trigger Build</button>
        </div>
    );
};

export default BuildSimulator;
