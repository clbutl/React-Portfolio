import React from "react";

import HappyHourPic from '../../assets/happyHourLogCoverPhoto.jpg'
import './styles.css'

const Project1 = () => {


  return (
    <div className="each-project-div">
      <div className="project-info-div">
        <div className="project-name-header">
          <h1>Happy Hour Log</h1>
        </div>
        <p>
          This application uses used Node.js, Express.js, Handlebars, Sequelize, and deployed using Heroku to run an application to view and post happy hour deals. The application allows users to register and log in to the application. Upon registration, a welcome email will be sent to the new user. Logged in users can then post and view their happy hour deals they have seen and that others have seen.
        </p>
        <section className="project-links-section">
          <div>
            <a href="https://github.com/clbutl/happy-hour-log" rel='noreferrer' target='_blank'>
              <h2>GitHub Repo</h2>
            </a>
          </div>
          <div>
            <a href="https://happyhourlog.herokuapp.com/" rel='noreferrer' target='_blank'>
              <h2>Deployed Site</h2>
            </a>
          </div>
        </section>
      </div>
      <div className="project-image-div">
        <img className="each-project-pic" src={HappyHourPic} alt='Happy Hour Log Pic'/>
      </div>
    </div>
  )
}

export default Project1;