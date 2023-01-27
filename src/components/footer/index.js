import React from "react";
import { Link } from 'react-router-dom';

import './styles.css'
import LinkedIn from '../../assets/LinkedIn-image.png'
import GitHub from '../../assets/github-image.png'

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
          <img id="linkedin-link" src={LinkedIn} alt="LinkedIn Link"/>
        </Link>
        <Link className="footer-links" target='_blank' onClick={() => {
          window.open('https://github.com/clbutl', '_blank')
        }}>
          <img id="github-link" src={GitHub} alt="GitHub Link"/>
        </Link>
    </footer>
  )
}

export default Footer;