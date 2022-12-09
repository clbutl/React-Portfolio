import React from 'react';
import '../styles/nav.css';

const Home = () => {

  return (
    <main>
      <nav>
        <div className='left-nav'>
          <h1 className='nav-name'>
            Cannon Butler
          </h1>
        </div>
        <div className='right-nav'>
          <h1 id='about-route' className='nav-links'>
            About
          </h1>
          <h1 id='resume-route' className='nav-links'>
            Resume
          </h1>
          <h1 id='contact-route' className='nav-links'>
            Contact
          </h1>
        </div>
      </nav>
    </main>
  );
};

export default Home;
