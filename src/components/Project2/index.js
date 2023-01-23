import React from "react";

import PlanItPic from '../../assets/PlanItCoverPhoto.png'
import '../Project1/styles.css'

const Project2 = () => {


  return (
    <div className="each-project-div">
      <div className="project-info-div">
        <div className="project-name-header">
          <h1>PlanIt</h1>
        </div>
        <p>
          This application uses GraphQL API, Node.js, Express.js, MongotDB, and React, and was deployed using Heroku to run an application to that acts as a project management software. The application allows users to register and log in to the application. Upon registration, users can create projects, add tasks to projects, and add other users to the project to encourage cooperation on projects and tasks.
        </p>
        <section className="project-links-section">
          <div>
            <a href="https://github.com/Edna1999/planit" rel='noreferrer' target='_blank'>
              <h2>GitHub Repo</h2>
            </a>
          </div>
          <div>
            <a href="https://planit.herokuapp.com/" rel='noreferrer' target='_blank'>
              <h2>Deployed Site</h2>
            </a>
          </div>
        </section>
      </div>
      <div className="project-image-div">
        <img className="each-project-pic" src={PlanItPic} alt='PlanIt Pic'/>
      </div>
    </div>
  )
}

export default Project2;