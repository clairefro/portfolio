import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

import SEO from '../components/seo'

export default () => (
  <div className="container">
    <SEO
      title="Thanks!"
      description="If you're on this page, you've successfully sent me a message in the contact form. Get back to you soon!"
    />
    <Fade bottom>
      <div className="ta-center">
        <h3>Thank you!</h3>
        <p>I'll be in touch shortly</p>
        <Link to="/">{'< '}Home</Link>
      </div>
    </Fade>
  </div>
)
