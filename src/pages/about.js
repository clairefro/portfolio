import React from "react"

import StackList from '../components/stackList'

export default () => (
  <div className="container">
    <div className="page">
      <h2>About</h2>
      <div className="text-box">
        <p>I like to build things with people.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nulla at libero totam quos laboriosam quo, quod dicta cupiditate laudantium necessitatibus voluptatum quibusdam magni, alias ex, facere sunt, accusamus iste.</p>
      </div>
      <div className="text-box">
        <h3>Stack</h3>
        <StackList />
      </div>

    </div>
  </div>
)
