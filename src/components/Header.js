import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Hero from './Hero'

import logo from './logo.svg'
import githubLogo from './github.svg'
import './index.css'


function Header ({ isHomepage }) {
  return (
    <Fragment>
      <header>
        <Link to="/">
          <img src={logo} className="header-logo" alt="Keziah logo" />
        </Link>
        
        <ul className="header-menu">
          <li>
            <a href="https://keziahmoselle.fr/">
              Portfolio
            </a>
          </li>
          <li>
            <a href="https://github.com/KeziahMoselle">
              <img src={githubLogo} alt="GitHub logo" />
            </a>
          </li>
        </ul>
      </header>

      { isHomepage && <Hero /> }
    </Fragment>
  )
}

export default Header