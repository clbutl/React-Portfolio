import React from "react";
import { Link } from 'react-router-dom';

import './styles.css'

const Header = () => {


  return (
    <header>
      <div>
        <h1 className="name-header">Cannon Butler</h1>
      </div>
      <div>
        <Link className="header-links" to='/'>
          <h2>Home</h2>
        </Link>
        <Link className="header-links" to='/projects'>
          <h2>Projects</h2>
        </Link>
        <Link className="header-links" to='/contact'>
          <h2>Contact</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header;