import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

function NotFoundPage ({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  console.log(location)
  return (
    <Layout location={location} title={siteTitle} classToApply="valign">
      <SEO title="Not Found" />
      
      <div>
        <h2>Not Found</h2>
        <img src="/assets/not-found.svg" alt="Undraw.co 404 illustration" style={{
          objectFit: 'contain',
          width: '100%',
          maxHeight: '300px',
          margin: '64px 0'
        }} />

        <div className="center"><Link as="button" to="/"><button>Go home</button></Link></div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
