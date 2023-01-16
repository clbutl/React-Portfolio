import React from "react";
import Header from "../components/header/index.js";

import './css/home.css'
import homePic from '../assets/myPic2.jpg'

const Home = () => {




  return (
    <div className="home-div">
      <Header/>
      <main>
        <div className="header-div">
          <h1 className="name-header">Cannon Butler</h1>
        </div>
        <div className="top-section">
          <div className="pfp-section">
            <div className="pfp-div">
              <img src={homePic} alt=''/>
            </div>
          </div>
          <div className="about-me-section">
            <div className='about-me'>
              <h1>About me</h1>
              <p>
                I am 18 years old, an avid runner, and just completed 
                The Ohio State University's Coding Bootcamp in early January, 2023.
                I'm looking for new opprotunities to grow my skillset in any way
                possible!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;