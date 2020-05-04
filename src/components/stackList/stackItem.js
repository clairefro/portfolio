import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'


const borderColors = {
  frontend: "#DEF5F7",
  backend: "#FAE6D2",
  hosting: "#F8EBC5",
  tools: "#F5F5F5",
  api: "#E0F3E9",
}

const StackItem = ({ name, category, icon }) => {

  const style = { backgroundColor: borderColors[category]}

  return (
    <div className="stack-item" style={style}>
      <SVG src={icon} className="stack-item-icon" />
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
