import React from 'react'

function Footer () {
  return (
    <footer>
      <div className="container">
        <div>
          <a href="https://github.com/KeziahMoselle">
            <img src="/assets/github-white.svg" alt="GitHub logo" />
          </a>

          <a href="https://twitter.com/KeziahMoselle">
            <img src="/assets/twitter.svg" alt="Twitter logo" />
          </a>

          <a href="https://keziahmoselle.fr/">
            <img src="/assets/world.svg" alt="Web icon" />
          </a>
        </div>
      
        <p>
          Built with
          <a href="https://gatsbyjs.org/"><img src="/assets/gatsby.svg" alt="Gatsby.js" style={{ height: '26px', margin: '0 8px' }} /></a>
          and hosted on
          <a href="https://netlify.com"><img src="/assets/netlify.svg" alt="Netlify" style={{ height: '26px', margin: '0 8px' }} /></a>
        </p>
      </div>
    </footer>
  )
}

export default Footer