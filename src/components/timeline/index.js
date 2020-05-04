import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import iconLewagon from '../../../static/images/icons/timeline/lewagon.png'
import iconGengo from '../../../static/images/icons/timeline/gengo.png'
import iconSapporo from '../../../static/images/icons/timeline/sapporo.png'
import iconAmazon from '../../../static/images/icons/timeline/amazonjapan.png'
import iconSelf from '../../../static/images/general/half-duck.png'
const Timeline = (props) => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2019 - present"
      iconStyle={{ background: '#fff', color: '#fff' }}
      icon={<img src={iconSelf} alt=""/>}
    >
      <h3 className="vertical-timeline-element-title">Freelance Frontend Dev</h3>
      <p>
        Creation and deployment of static websites for clients
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#FE7F17', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #FE7F17' }}
      date="2019"
      iconStyle={{ background: '#fff', color: '#fff' }}
      icon={<img src={iconLewagon} alt=""/>}
    >
      <h3 className="vertical-timeline-element-title">Student, Full Stack Coding Bootcamp</h3>
      <h4 className="vertical-timeline-element-subtitle">Le Wagon - Montréal, Canada </h4>
      <p>
        9-week intensive bootcamp to learn MVC software structure, database structure, product design and frontend development. Designed, developed and pitched two apps in built Ruby on Rails. See our team's pitch <a href="https://youtu.be/fgP_A61UBkM?t=2301" target="_blank" style={{color: '#fff'}}>here</a>
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2016 - 2018"
      iconStyle={{ background: '#fff', color: '#fff' }}
      icon={<img src={iconAmazon} alt=""/>}
    >
      <h3 className="vertical-timeline-element-title">Translator</h3>
      <h4 className="vertical-timeline-element-subtitle">Amazon Japan - Sapporo, Japan</h4>
      <p>
        Internal translator and interpreter for management and ops, business review editor and advisor, quality program manager, administrative assistant to director. Led development of internal translation tool (PHP, VBA and SharePoint)
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#FE7F17', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #FE7F17' }}
      date="2013 - 2016"
      iconStyle={{ background: '#fff', color: '#fff', padding: '8px' }}
      icon={<img src={iconSapporo} alt=""/>}
    >
      <h3 className="vertical-timeline-element-title">Coordinator for International Relations</h3>
      <h4 className="vertical-timeline-element-subtitle">City of Sapporo - Sapporo, Japan </h4>
      <p>
        Japanese-English translator and interpreter for city government and international conferences, public speaker, developed JavaScript tools for city staff
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2013 - present"
      iconStyle={{ background: '#fff', color: '#fff' }}
      icon={<img src={iconGengo} alt=""/>}
    >
      <h3 className="vertical-timeline-element-title">Translator</h3>
      <h4 className="vertical-timeline-element-subtitle">Gengo</h4>
      <p>
        Independent contractor, Japanese-English translation
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default Timeline
