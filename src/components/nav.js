import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import Slide from 'react-reveal/Slide'
import { useLocation } from "@reach/router"

const Nav = () => {
  const [isSticky, setSticky] = useState(false)
  const [selected, setSelected] = useState(false)
  const prevScrollY = useRef(0)
  const { pathname: currPath } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      208 < currentScrollY ? setSticky(true) : setSticky(false)
      prevScrollY.current = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // remove listener on dismount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky])

  return (
    <Slide left>
      <div className={`nav${isSticky ? ' sticky' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contributions">Contributions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        { isSticky &&
          <div className="nav-right">
            <Link to="/">{'{ Claire Froelich }'}</Link>
          </div>
        }
      </div>
    </Slide>
  )
}

export default Nav;
