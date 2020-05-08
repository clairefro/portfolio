import React from "react"

import Project from '../components/project'

// Images
import imgIncorpus from '../../static/images/projects/incorpus.png'
import imgBonjourhi from '../../static/images/projects/bonjourhi.png'
import imgNYSE from '../../static/images/projects/nyse.png'
import imgAMSIR from '../../static/images/projects/amisayingitright.png'
import imgAirbnb from '../../static/images/projects/airbnb.png'
import imgSlack from '../../static/images/projects/slack.png'

export default () => (
  <div className="container">
    <div className="page">
      <h2>Projects</h2>
      <Project
        img={imgIncorpus}
        title="inCORPUS website"
        description="French and English B2B marketing website for an athletic technology company"
        stack={['gatsby', 'react', 'graphql', 'contentful', 'netlify', 'intercom']}
        links={[
          ['Live site', 'https://www.in-corpus.com/'],
          ['Code', 'https://github.com/clairefro/incorpus'],
        ]}
      />
      <Project
        img={imgNYSE}
        title="NY Sock Exchange"
        description="A fake e-commerce site for buying and selling socks, complete with user auth and checkout.<br /> Enjoy a shopping spree on my credit card: <br /> 4242 4242 4242 4242 (exp. 2/22, sec. code: 222)"
        stack={['next', 'react', 'apollo', 'jest', 'prisma', 'graphql', 'heroku', 'stripe', 'postgresql']}
        links={[
          ['Demo', 'https://nyse-next-prod.herokuapp.com/'],
          ['Code', 'https://github.com/clairefro/ny-sock-exchange'],
        ]}
      />
      <Project
        img={imgBonjourhi}
        title="BonjourHi"
        description="App for finding and meeting language partners. Allows you to take vocab notes with your voice. MVP built in 10 days with a team of four."
        stack={['rails', 'js', 'sass', 'heroku']}
        links={[
          ['Demo', 'https://bonjourhiapp.herokuapp.com/'],
          ['Code', 'https://github.com/clairefro/bonjourhi'],
          ['Pitch video', 'https://youtu.be/fgP_A61UBkM?t=2301'],
        ]}
      />
      <Project
        img={imgAMSIR}
        title="Am I Saying it Right?"
        description="Simple app for checking your proncounciation of words in various languages using speech-to-text and text-to-speech (Chrome browser)"
        stack={['js', 'css3', 'html5']}
        links={[
          ['Demo', 'https://clairefro.github.io/am-i-saying-it-right/'],
          ['Code', 'https://github.com/clairefro/am-i-saying-it-right'],
          ['Tutorial', 'https://levelup.gitconnected.com/if-web-apps-could-talk-intro-to-the-web-speech-api-c9f7e0e83aff'],
        ]}
      />
      <Project
        img={imgAirbnb}
        title="AirBnb Clone"
        description="Simple AirBnb clone I used for teaching an Intro to React workshop to Le Wagon Coding Bootcamp graduates."
        stack={['react', 'css3', 'mapbox']}
        links={[
          ['Demo', 'https://clairefro.github.io/airbnb-clone/'],
          ['Code', 'https://github.com/clairefro/airbnb-clone'],
        ]}
      />
      <Project
        img={imgSlack}
        title="Slack Clone - React Redux"
        description="A channeled real-time chat app modeled after Slack. Be warned that all chats are completely public"
        stack={['react', 'redux', 'css3']}
        links={[
          ['Demo', 'https://clairefro.github.io/https://clairefro.github.io/chat-redux/'],
          ['Code', 'https://github.com/clairefro/chat-redux'],
        ]}
      />
    </div>
  </div>
)
