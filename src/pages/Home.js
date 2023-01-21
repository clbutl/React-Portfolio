import React from "react";

import './css/home.css'
import homePic from '../assets/myPic2.jpg'

const Home = () => {




  return (
      <main>
        <section className="top-section">
          <div className="pfp-section">
            <div className="pfp-div">
              <img src={homePic} alt='me smiling at the camera'/>
            </div>
          </div>
          <div className="about-me-section">
            <div className='about-me'>
              <h1>About me</h1>
              <p>
                I am 18 years old, and 
                I recently graduated from the Ohio State University College of
                Engineering's Full-Stack Web Development Program in early January
                2023.  I'm looking for new opportunities to continue to grow my 
                skillset!
              </p>
            </div>
          </div>
        </section>
        <section className="bottom-section">
          <h1 className="skillset-header">
            Skillset
          </h1>
          <div className="skillsets-div">
            <div>
              <h1>⚛️React.js</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h1>🤝Teamwork</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h1>🧠Troubleshooting</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Home;