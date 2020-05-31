import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'


const borderColors = {
  frontend: "#A59E94",
  backend: "#A59E94",
  hosting: "#A59E94",
  tools: "#A59E94",
  api: "#A59E94",
}

const StackItem = ({ name, category, icon }) => {

  const style = { color: borderColors[category]}

  return (
    <div className="stack-item">
      <div className="stack-item-icon" title={name} style={style}>
        <SVG src={icon} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default StackItem

StackItem.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
