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
              <p>
                The main goal of my recent Ohio State University Coding Boot 
                Camp was to learn AND become comfortable with React.  I have 
                accomplished this goal, as I understand the concepts of 
                Object-Oriented Programming(OOP), Model-View-Controller (MVC), 
                and Object-Relational Mapping (ORM) very well.  Understanding 
                these programming languages greatly helps me when building a 
                myriad of applications using React framework.
              </p>
            </div>
            <div>
              <h1>🤝Teamwork</h1>
              <p>
                I have always thrived when working in a team-oriented 
                environment, whether it was during the many group school 
                assignments or in my current employment at ALDI.  I truly 
                believe great teamwork is paramount to achieving success in 
                any project.
              </p>
            </div>
            <div>
              <h1>🧠Troubleshooting</h1>
              <p>
              I have a constant will to adapt to any given situation or 
              problem that arises, development related, or not.  I am always 
              eager to step out of my comfort zone to grow as an individual 
              or learn something new.  
              </p>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Home;