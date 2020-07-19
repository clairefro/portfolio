import React from 'react'
import { Link } from 'gatsby'

import Socials from './socials'

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <Socials />
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

      <p>Copyright {(new Date()).getFullYear()} Claire Froelich</p>
      <p>Icons & logos by <a href="https://svgporn.com/" rel="noopener noreferrer" target="_blank">SVG Porn</a></p>
    </div>
  </div>
)

export default Footer
