import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './css/resume.css'

const Resume = () => {
  const [resumeLink, changeLink] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      changeLink(true)
    }, 5000)
  })

  return (
    <div>
      <main>
        <h1>
          My Resume
        </h1>
        <div className="resume-div">
          <iframe title="resume" src="https://drive.google.com/file/d/1-x5m-AuEZikZVkSDeGuBMxRykzR4WgqE/preview" width="800px" height="650px" allow="autoplay"></iframe>
        </div>
        <div className={resumeLink ? "resume-no-load" : "resume-no-load hidden-resume"}>
          <h1>Resume Not Loading?</h1>
          <Link className="resume-link" onClick={() => {
            window.open('https://drive.google.com/file/d/1-x5m-AuEZikZVkSDeGuBMxRykzR4WgqE/preview', "_blank")
            }}>
            <h1 className="open-resume">Click Here To Open</h1>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Resume;