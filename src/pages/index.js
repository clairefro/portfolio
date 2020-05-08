import React from "react"

import StackList from '../components/stackList'
import Timeline from '../components/timeline'

export default () => (
  <div className="container">
    <div className="page">

      Hello world!
      <div className="text-box">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo perspiciatis vel ut libero quia eveniet facere. Ipsa dolor nihil, praesentium repellat veritatis ipsum modi consequatur exercitationem quod libero ab quidem.</p>
      </div>
      <div className="text-box">
        <p>I like to build things with people.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nulla at libero totam quos laboriosam quo, quod dicta cupiditate laudantium necessitatibus voluptatum quibusdam magni, alias ex, facere sunt, accusamus iste.</p>
      </div>
      <div className="section">
        <h3 className="ta-center">My Stack</h3>
        <StackList />
        <p className="ta-right">... and learning more everyday!</p>
      </div>
      <div className="section section-colored-background">
        <Timeline />
      </div>
    </div>
  </div>
)
