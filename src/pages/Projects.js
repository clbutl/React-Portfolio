import React from "react";
import Project1 from "../components/Project1";

import './css/projects.css'

const Projects = () => {
  

  return (
    <div>
      <h1 className="project-header">My Projects</h1>
      <div className="projects-div">
        <Project1/>
        <div className="test-project">
          <h1>hi</h1>
        </div>
      </div>
      <div className="projects-div">
        <div className="test-project">
          <h1>hi</h1>
        </div>
        <div className="test-project">
          <h1>hi</h1>
        </div>
      </div>
    </div>
  )
} 

export default Projects;