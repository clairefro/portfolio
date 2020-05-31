import React from "react"
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import Project from '../components/project'

// Images
import imgIncorpus from '../../static/images/projects/incorpus.png'
import imgVegetables from '../../static/images/projects/vegetables.jpg'
import imgMememaker from '../../static/images/projects/mememaker.jpg'
import imgBonjourhi from '../../static/images/projects/bonjourhi.png'
import imgNYSE from '../../static/images/projects/nyse.png'
import imgAMSIR from '../../static/images/projects/amisayingitright.png'
import imgAirbnb from '../../static/images/projects/airbnb.png'
import imgSlack from '../../static/images/projects/slack.png'
import imgClairefro from '../../static/images/projects/clairefro.png'

export default () => (
  <div className="container">
    <SEO
      title="Projects"
      description="Portfolio of projects for clients and personal interest"
    />
    <div className="page">
      <Fade bottom>
        <Project
          img={imgIncorpus}
          title="inCORPUS website"
          description="Bilingual B2B marketing website for an athletic-tech company"
          stack={['gatsby', 'react', 'graphql', 'contentful', 'netlify', 'intercom']}
          links={[
            ['Live site', 'https://www.in-corpus.com/'],
            ['Code', 'https://github.com/clairefro/incorpus'],
          ]}
        />
      </Fade>
      <Project
        img={imgVegetables}
        title="'The Power of Vegetables'"
        description="Marketing site for a self-published children's book about deer and toots"
        stack={['gatsby', 'react', 'graphql', 'netlify', 'gimp']}
        links={[
          ['Live site', 'https://www.power-of-vegetables.com/'],
          ['Code', 'https://github.com/clairefro/power-of-vegetables'],
        ]}
      />
      <Project
        img={imgNYSE}
        title="NY Sock Exchange"
        description="A fake e-commerce site for buying and selling socks, complete with user authentication and checkout.<br /><br />Enjoy a shopping spree on my credit card:<br />4242 4242 4242 4242 (exp. 2/22, sec. code: 222)"
        stack={['next', 'react', 'apollo', 'jest', 'prisma', 'graphql', 'heroku', 'stripe', 'postgresql']}
        links={[
          ['Demo', 'https://nyse-next-prod.herokuapp.com/'],
          ['Code', 'https://github.com/clairefro/ny-sock-exchange'],
        ]}
      />
      <Project
        img={imgMememaker}
        title="Build-a-meme"
        description="Submission for Mintbeans hackathon challenge: build a meme-maker in under 4 hours. Allows layout editing and meme download. Voted first place!"
        stack={['react', 'sass']}
        links={[
          ['Demo', 'https://clairefro.github.io/meme-maker2/'],
          ['Code', 'https://github.com/clairefro/meme-maker2'],
          ['Announcement', 'https://www.linkedin.com/posts/mintbean_careerhack-mintbean-hackathons-activity-6671529819148206080-WpCX/'],
        ]}
      />
      <Project
        img={imgBonjourhi}
        title="BonjourHi"
        description="App for finding and meeting language partners. Allows you to take vocab notes with your voice. MVP designed and built in 10 days with a team of four in a coding bootcamp."
        stack={['rails', 'js', 'sass', 'heroku', 'postgresql']}
        links={[
          ['Demo', 'https://bonjourhiapp.herokuapp.com/'],
          ['Code', 'https://github.com/clairefro/bonjourhi'],
          ['Pitch video', 'https://youtu.be/fgP_A61UBkM?t=2301'],
        ]}
      />
      <Project
        img={imgAMSIR}
        title="Am I Saying it Right?"
        description="Simple app for checking your pronunciation of words in various languages using speech-to-text and text-to-speech (Chrome browser)"
        stack={['js', 'css3', 'html5']}
        links={[
          ['Demo', 'https://clairefro.github.io/am-i-saying-it-right/'],
          ['Code', 'https://github.com/clairefro/am-i-saying-it-right'],
          ['Tutorial', 'https://levelup.gitconnected.com/if-web-apps-could-talk-intro-to-the-web-speech-api-c9f7e0e83aff'],
        ]}
      />
      <Project
        img={imgAirbnb}
        title="Airbnb Clone"
        description="Simple Airbnb landing clone I enhanced for teaching an Intro to React workshop to Le Wagon Coding Bootcamp graduates."
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
      <Project
        img={imgClairefro}
        title="... this website"
        description="So meta."
        stack={['react', 'gatsby', 'sass']}
        links={[
          ['Code', 'https://github.com/clairefro/portfolio'],
        ]}
      />
    </div>
  </div>
)
