import React from "react";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";

import './css/projects.css'

const Projects = () => {
  

  return (
    <div>
      <h1 className="project-header">My Projects</h1>
      <div className="projects-div">
        <Project2/>
      </div>
      <div className="projects-div">
        <Project1/>
      </div>
      <div className="projects-div">
        <Project3/>
      </div>
    </div>
  )
} 

export default Projects;