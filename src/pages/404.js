import React from "react"
import { Link } from 'gatsby'

import duck from '../../static/images/general/duck.png'

export default () => (
  <div className="container">
    <div className="ta-center" style={{margin: '0 auto'}}>
      <img src={duck} className="responsive" style={{maxWidth: '300px'}} alt="404 duck"/>
      <h3>Oops</h3>
      <p>Page not found. Maybe you wanted to go here?</p>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/projects">Projects</Link>
      <br/>
      <Link to="/contributions">Contributions</Link>
      <br/>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)
