import React from 'react'
import SVG from 'react-inlinesvg'

import linkedin from '../../static/images/icons/linkedin.svg'
import github from '../../static/images/icons/github-image.svg'
import medium from '../../static/images/icons/medium.svg'
import npm from '../../static/images/icons/npm.svg'

const Socials = () => (
  <div className="socials">
    <a href="https://www.linkedin.com/in/claire-froelich/" target="_blank" rel="noopener noreffer"><SVG src={linkedin} /></a>
    <a href="https://github.com/clairefro" target="_blank" rel="noopener noreffer"><SVG src={github} /></a>
    <a href="https://medium.com/@clairefroelich" target="_blank" rel="noopener noreffer"><SVG src={medium} /></a>
    <a href="https://www.npmjs.com/settings/clairefro/packages" target="_blank" rel="noopener noreffer"><SVG src={npm} /></a>
  </div>
)

export default Socials
