import React from 'react'

import StackItem from './stackItem'

import { stackListData } from '../../../static/data/stacklist'

const StackList = () => (
  <div className="stack-list">
    {stackListData.map((item, i) => (
      <StackItem
        key={i}
        name={item.name}
        category={item.category}
        icon={item.icon}
      />
    ))}
  </div>
)

export default StackList
