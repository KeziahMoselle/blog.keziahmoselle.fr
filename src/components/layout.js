import React, { Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'

import './index.css'
import './markdown.css'

function Layout ({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header isHomepage />
  } else {
    header = <Header />
  }

  return (
    <Fragment>
      {header}

      <main className="container small">
        {children}
      </main>

      <Footer />
    </Fragment>
  )
}

export default Layout
