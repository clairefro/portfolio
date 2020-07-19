import React from 'react'

import StackItem from './stackItem'

import { stackListData } from '../../../static/data/stacklist'

const StackList = () => {
  const categories = Object.keys(stackListData)
  console.log(categories)
  return (
    <div className="stack-list">
      {stackListData.map((category, i) => (
        <div className="stack-list-category">
          <h2>{category.name}</h2>
          <div className="stack-list-category-items">
            {category.icons.map((item, i)=> (
              <StackItem
                key={i}
                name={item.name}
                icon={item.icon}
              />
            ))}
          </div>
        </div>



      ))}
    </div>
  )
}

export default StackList
