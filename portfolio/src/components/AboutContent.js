import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import code1 from "../assets/code1.jpg"
import code2 from "../assets/code2.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Im a Full stack Developer.I Create All kind of projects for my Clients
                Im also A Photographer Within that im triying see the new Angles of Photography
            </p>
            <Link to="/contact" className="btn">Contact</Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="top">
                    <img src={code1} className="img" />
                </div>
                <div className="bottom">
                <img src={code2} className="img" />
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default AboutContent