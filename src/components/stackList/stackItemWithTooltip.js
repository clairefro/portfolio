import React from 'react';
import SVG from 'react-inlinesvg'

const StackItemWithTooltip = ({ icon, name }) => (
  <div className="project-stack-list-item-icon">
    <SVG src={icon} />
    <div className="project-stack-list-item-icon-tooltip">{name}</div>
  </div>
);

export default StackItemWithTooltip;
