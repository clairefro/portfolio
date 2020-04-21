import React from 'react'

import MainBanner from '../components/mainBanner'
import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <MainBanner />
      <Nav />
      {children}
      <Footer />
    </>
  )
}


export default Layout;
