import React from "react";

import SleeperAPIPic from '../../assets/sleeperAPICoverPhoto.jpg'
import '../Project1/styles.css'

const Project3 = () => {


  return (
    <div className="each-project-div">
      <div className="project-image-div">
        <img className="each-project-pic" src={SleeperAPIPic} alt='PlanIt Pic'/>
      </div>
      <div className="project-info-div">
        <div className="project-name-header">
          <h1>Sleeper API</h1>
        </div>
        <p>
          This project was a test of our coding skills, along with a test of our teamwork skills. We were supposed to design an application, that used our knowledge of server-side APIs, UI design, along with using our knowledge of GitHub to work with our group.
        </p>
        <section className="project-links-section">
          <div>
            <a href="https://github.com/AndrewKamSki/Sleeper-API-Project" rel='noreferrer' target='_blank'>
              <h2>GitHub Repo</h2>
            </a>
          </div>
          <div>
            <a href="https://andrewkamski.github.io/Sleeper-API-Project/" rel='noreferrer' target='_blank'>
              <h2>Deployed Site</h2>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Project3;