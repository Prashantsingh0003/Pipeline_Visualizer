import React from "react";
import "./ResourceLinks.css";

const ResourceLinks = () => {
  return (
    <div className="resource-links">
      <h2>Useful DevOps Resources</h2>
      <ul>
        <li><a href="https://docs.github.com/en">GitHub Documentation</a></li>
        <li><a href="https://www.jenkins.io/doc/">Jenkins Documentation</a></li>
        <li><a href="https://www.docker.com/">Docker Official Site</a></li>
        <li><a href="https://kubernetes.io/docs/home/">Kubernetes Documentation</a></li>
        <li><a href="https://prometheus.io/docs/">Prometheus Documentation</a></li>
      </ul>
    </div>
  );
};

export default ResourceLinks;
