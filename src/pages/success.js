import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

export default () => (
  <div className="container">
    <Fade bottom>
      <div className="ta-center">
        <h3>Thank you!</h3>
        <p>I'll be in touch shortly</p>
        <Link to="/">{'< '}Home</Link>
      </div>
    </Fade>
  </div>
)
