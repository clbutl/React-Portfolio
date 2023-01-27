import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './styles.css'

const Header = () => {
  const [currentNav, changeNav] = useState(true)

  const navigationChange = () => {
    changeNav(!currentNav)
  }

  const switchPage = () => {
    changeNav(true)
    console.log("change")
  }

  document.title = 'Cannon Butler Portfolio'
  return (
    <header>
      <div className="name-header-div">
        <h1 className="name-header">Cannon Butler</h1>
      </div>
      <div className="header-links-div">
        <Link onClick={switchPage} className={currentNav ? 'header-links hide-nav' : 'header-links'} to='/'>
          <h2>Home</h2>
        </Link>
        <Link onClick={switchPage} className={currentNav ? 'header-links hide-nav' : 'header-links'} to='/projects'>
          <h2>Projects</h2>
        </Link>
        <Link onClick={switchPage} className={currentNav ? 'header-links hide-nav' : 'header-links'} to='/resume'>
          <h2>Resume</h2>
        </Link>
      </div>
      <div className="navigation-dropdown" onClick={navigationChange}>
        <div id={currentNav ? '' : 'nav-dropdown-1'}></div>
        <div id={currentNav ? '' : 'nav-dropdown-2'}></div>
        <div id={currentNav ? '' : 'nav-dropdown-3'}></div>
      </div>
    </header>
  )
}

export default Header;