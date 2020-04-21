import React from 'react'
import Slide from 'react-reveal/Slide'

import imgMe from '../../static/images/general/half-duck.png'

const MainBanner = () => {
  return (
    <div className="main-banner">
        <Slide bottom>
          <img src={imgMe} alt="Claire Froelich with rubber duck on her head" className="main-banner-img" />
        </Slide>
      <div>
        <h1>{'{ Claire Froelich }'}</h1>
        <h2>{'// Full Stack Web Developer'}</h2>
      </div>
    </div>
  )
}

export default MainBanner;
