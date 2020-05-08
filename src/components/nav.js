import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import Slide from 'react-reveal/Slide'
import { useLocation } from "@reach/router"



const Nav = () => {
  const [isSticky, setSticky] = useState(false)
  const [selected, setSelected] = useState(null)
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

  useEffect(()=> {
    if (currPath.match(/(^\/$)|(^\w+\/$)/)) {
      setSelected('home')
    } else if (currPath.match(/\/projects\//)) {
      setSelected('projects')
    } else if (currPath.match(/\/contributions\//)) {
      setSelected('contributions')
    } else if (currPath.match(/\/contact\//)) {
      setSelected('contact')
    }
  },[])

  const updateSelected = (e) => {
    setSelected(e.target.innerText.toLowerCase())
  }

  return (
    <Slide left>
      <div className={`nav${isSticky ? ' sticky' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={updateSelected}
              className={selected === 'home' ? "selected" : null}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={updateSelected}
              className={selected === 'projects' ? "selected" : null}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contributions"
              onClick={updateSelected}
              className={selected === 'contributions' ? "selected" : null}
              >
              Contributions
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={updateSelected}
              className={selected === 'contact' ? "selected" : null}
            >
              Contact
            </Link>
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

export default Nav
