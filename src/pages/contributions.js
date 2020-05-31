import React from "react"

import SEO from '../components/seo'
import Project from '../components/project'

import imgASIR from '../../static/images/contributions/ASIR.jpg'
import imgPrettyTitles from '../../static/images/contributions/prettytitles.jpg'
import imgActiveCampaign from '../../static/images/contributions/activecampaign.jpg'

export default () => (
  <div className="container">
    <SEO
      title="Contributions"
      description="Keeping with the open source spirit. Articles, tutorials, npm packages and more"
    />
    <div className="page">
      <div className="text-box">
        <h2>Contributions</h2>
        <p>I've benefitted from hundreds of free teachings and articles. I'd like to keep the open source wheel turning by sharing my learnings and time.</p>
      </div>
      <br />
      <br />
      <h3>Articles</h3>
      <Project
        img={imgASIR}
        title="If Web Apps Could Talk — Intro to the Web Speech API"
        description="Tutorial on using JavaScript to add speech-to-text and text-to-speech to web apps"
        stack={[]}
        links={[
          ['Read', 'https://levelup.gitconnected.com/if-web-apps-could-talk-intro-to-the-web-speech-api-c9f7e0e83aff'],
          ['Demo', 'https://clairefro.github.io/am-i-saying-it-right/'],
          ['Code', 'https://github.com/clairefro/am-i-saying-it-right'],
        ]}
      />
      <Project
        img={imgPrettyTitles}
        title="Quick HTML/CSS hack for prettier Japanese titles"
        description="How to handle line breaks in a language without spaces?"
        stack={[]}
        links={[
          ['Read', 'https://medium.com/@clairefroelich/quick-html-css-hack-for-prettier-japanese-titles-fb4ce3d41309'],
          ['Demo', 'https://www.power-of-vegetables.com/ja/'],
        ]}
      />
      <Project
        img={imgActiveCampaign}
        title="How to hack yourself a custom ActiveCampaign form component in React"
        description="A tale as old as time — you just want a simple newsletter subscribe form in your website."
        stack={[]}
        links={[
          ['Read', 'https://medium.com/le-wagon/how-to-hack-yourself-a-custom-activecampaign-form-component-in-react-73e4624dfbff'],
        ]}
      />
    </div>
  </div>
)
