import React from 'react'
import { Link } from 'gatsby'

import Socials from './socials'

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <Socials />
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)

export default Footer
