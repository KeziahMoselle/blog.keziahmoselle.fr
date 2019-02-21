import React from 'react'

import Header from './Header'
import Footer from './Footer'

function Layout ({ location, children, classToApply }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header isHomepage />
  } else {
    header = <Header />
  }

  return (
    <div id="root">
      {header}

      <main className={`container medium ${classToApply}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout