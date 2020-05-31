import React from "react"
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import StackList from '../components/stackList'
import Timeline from '../components/timeline'
import Socials from '../components/socials'

export default () => (
  <>
    <SEO title="Portfolio"/>
    <div className="container">
      <Fade bottom>
        <div className="page">

          <div className="ta-center">
            <Socials />
            <h3>Hello world!</h3>
            <p>I like to build things with people.</p>
            <Link to="/projects">Take a look</Link>
          </div>
          <div className="section">
            <h3 className="ta-center">My Stack & Tools</h3>
            <StackList />
            <p className="ta-right">... and learning more everyday!</p>
          </div>
          <br/>
          <h3 className="ta-center">Some life experiences</h3>
          <div className="section section-colored-background">
            <Timeline />
          </div>
        </div>
      </Fade>
    </div>
  </>
)
