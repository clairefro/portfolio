import React from 'react'
import SVG from 'react-inlinesvg'

import linkedin from '../../static/images/icons/linkedin.svg'
import github from '../../static/images/icons/github-image.svg'

const Socials = () => (
  <div className="socials">
    <a href="https://www.linkedin.com/in/claire-froelich/" target="_blank" rel="noopener noreffer"><SVG src={linkedin} /></a>
    <a href="https://github.com/clairefro" target="_blank" rel="noopener noreffer"><SVG src={github} /></a>
  </div>
)

export default Socials
