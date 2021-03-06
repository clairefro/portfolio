import React from 'react'
import PropTypes from 'prop-types'

import StackItemWithTooltip from '../stackList/stackItemWithTooltip'
// Data
import { stackListData } from '../../../static/data/stacklist'

const Project = (props) => {
  const {
    img,
    title,
    description,
    stack,
    links,
    className,
    ...otherProps
  } = props

  const allIcons = stackListData.map(item => item.icons).flat()
  const stackListItemIcons = allIcons.filter(s => {
    return stack.map(x => x.toLowerCase()).includes(s.name.toLowerCase())
  }).map((s,i) => (
    <StackItemWithTooltip key={i} name={s.name} icon={s.icon}/>
  ))

  const formattedLinks = links.map((l,i) => (
    <a
      key={i}
      href={l[1]}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link btn"
    >
      {l[0]}
    </a>
  ))

  return (
    <div {...otherProps} id={title} className={className ? `project ${className}` : "project" }>
      <img src={img} alt={title} className="project-image"/>
      <div className="project-details">
        <div className="project-details-top">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="project-details-bottom">
          <div className="project-stack-list">
            {stackListItemIcons}
          </div>
          <div className="project-links">
            {formattedLinks}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  // stack: PropTypes.arrayOf(PropTypes.oneOf(stackListData.map(s => s.name.toLowerCase()))),
  links: PropTypes.arrayOf(PropTypes.array),
}
