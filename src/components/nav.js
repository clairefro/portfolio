import React from 'react'
import { Link } from 'gatsby'
import Slide from 'react-reveal/Slide'

const Nav = (props) => {
  return (
    <Slide left>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contributions">Contributions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </Slide>
  )
}

export default Nav;
