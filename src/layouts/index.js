import React from 'react'

import Nav from '../components/nav'

import '../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}


export default Layout;
