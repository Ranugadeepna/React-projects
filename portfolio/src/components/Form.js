import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="Form">
        <form>
            <label>Your Name</label>
            <input type="Text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="Text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="tyepe your massage here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form