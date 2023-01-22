import React from "react";
import { Link } from 'react-router-dom';

import './styles.css'
import LinkedIn from '../../assets/LinkedIn-image.png'

const Footer = () => {


  return (
    <footer>
        <Link className="footer-links" target='_blank' onClick={() => {
          window.location = 'mailto:cannonlbutler@gmail.com';
        }}>
          <h1>cannonlbutler@gmail.com</h1>
        </Link>
        <h1 className="footer-links">419-569-7959</h1>
        <Link className="footer-links" target='_blank' onClick={() => {
          window.open('https://www.linkedin.com/in/cannon-butler-61122b205/', '_blank')
        }}>
          <img src={LinkedIn} alt="LinkedIn Link"/>
        </Link>
    </footer>
  )
}

export default Footer;