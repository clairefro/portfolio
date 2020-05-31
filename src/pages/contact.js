import React from "react"
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

export default () => (
  <div className="container">
  <SEO
    title="Contact"
    description="Have a question or want to collaborate? Get in touch!" 
  />
    <Fade bottom>
      <ContactForm />
    </Fade>
  </div>
)
