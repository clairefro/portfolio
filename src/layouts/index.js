import React from 'react'

import MainBanner from '../components/mainBanner'
import Nav from '../components/nav'

import '../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <MainBanner />
      <Nav />
      {children}
    </div>
  )
}


export default Layout;
