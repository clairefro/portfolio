import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'


const borderColors = {
  frontend: "#59C3C3",
  backend: "#FE7F17",
  hosting: "#92B4A7",
  tools: "#BCB8B1",
  api: "#A8763E",
}

const StackItem = ({ name, category, icon }) => {

  const style = { color: borderColors[category], borderColor: borderColors[category]}

  return (
    <div className="stack-item">
      <div className="stack-item-icon" style={style}>
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
