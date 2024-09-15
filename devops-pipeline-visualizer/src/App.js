import React, { useState } from "react";
import ResourceLinks from "./components/ResourceLinks"; // Ensure the path is correct
import "./App.css"; // Importing CSS for the app

function App() {
  const [activeStage, setActiveStage] = useState("");

  // Stages data
  const stages = [
    {
      name: "Plan",
      description: "Planning the software development lifecycle.",
      tools: ["Jira", "Confluence", "Trello"],
    },
    {
      name: "Code",
      description: "Writing the actual code of the software.",
      tools: ["Git", "GitHub", "Bitbucket"],
    },
    {
      name: "Build",
      description: "Building the software from the code.",
      tools: ["Maven", "Gradle", "Ant"],
    },
    {
      name: "Test",
      description: "Testing the software to ensure it works correctly.",
      tools: ["Selenium", "JUnit", "TestNG"],
    },
    {
      name: "Deploy",
      description: "Deploying the software to production.",
      tools: ["Docker", "Kubernetes", "Helm"],
    },
    {
      name: "Monitor",
      description: "Monitoring the software in the production environment.",
      tools: ["Prometheus", "Grafana", "New Relic"],
    },
  ];

  // Toggle function for stages
  const handleToggle = (stage) => {
    setActiveStage(activeStage === stage ? "" : stage);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>DevOps Pipeline Visualizer</h1>
        <p>Explore the lifecycle stages of DevOps.</p>

        <div className="stage-list">
          {stages.map((stage) => (
            <div className="stage-item" key={stage.name}>
              <button
                className={`stage-button ${
                  activeStage === stage.name ? "active" : ""
                }`}
                onClick={() => handleToggle(stage.name)}
              >
                {stage.name}
              </button>
              {activeStage === stage.name && (
                <div className="stage-details">
                  <p className="stage-description">{stage.description}</p>
                  <ul className="tool-list">
                    {stage.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resource Links Component */}
      <ResourceLinks />

      {/* Footer */}
      <footer>
        <p>&copy; 2024 DevOps Pipeline Visualizer</p>
      </footer>
    </div>
  );
}

export default App;
