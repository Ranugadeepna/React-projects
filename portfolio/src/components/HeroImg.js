import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/img3.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg}/>
        </div>
        <div className="content">
            <p>HI IM A FREELANCER</p>
            <h1>React Develpoer. </h1>
            <div>
                <Link to="/project" className="btn" > Projects </Link>
                <Link to="/contact" className="btn-light" > Contact </Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg