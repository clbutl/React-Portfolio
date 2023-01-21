import React from "react";

import HappyHourPic from '../../assets/happyHourLogCoverPhoto.jpg'
import '../allProjects.css'

const Project1 = () => {


  return (
    <div className="each-project-div">
      <h1>Happy Hour Log</h1>
      <img className="each-project-pic" src={HappyHourPic} alt='Happy Hour Log Pic'/>
    </div>
  )
}

export default Project1;