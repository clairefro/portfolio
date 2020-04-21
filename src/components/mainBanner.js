import React from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import imgMe from '../../static/images/general/half-duck.png'

const MainBanner = () => {
  return (
    <div className="main-banner">
      <Slide bottom>
        <img src={imgMe} alt="Claire Froelich with rubber duck on her head" className="main-banner-img" />
      </Slide>
      <Fade bottom>
        <div>
          <h1>{'{ Claire Froelich }'}</h1>
          <h2>{'// Full Stack Web Developer'}</h2>
        </div>
      </Fade>
    </div>
  )
}

export default MainBanner;
