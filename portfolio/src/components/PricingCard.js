import { FaDashcube, FaDeaf, FaDog } from "react-icons/fa"
import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="card-container">
        <div className="card">
            <h4>- Basic -</h4>
            <span className="bar" />
            <h1>20000 LKR</h1>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>

            <Link to="#" className="btn2">Purchase Now</Link>

        </div>
        <div className="card">
            <h4>- Premium -</h4>
            <span className="bar" />
            <h1>40000 LKR</h1>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>

            <Link to="#" className="btn2">Purchase Now</Link>

        </div>
        <div className="card">
            <h4>- Paltinum -</h4>
            <span className="bar" />
            <h1>60000 LKR</h1>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>

            <Link to="#" className="btn2">Purchase Now</Link>

        </div>
    </div>
  )
}

export default PricingCard