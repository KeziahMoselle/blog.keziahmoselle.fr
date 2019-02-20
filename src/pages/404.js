import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import image from './notFound.svg'

function NotFoundPage ({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  console.log(location)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      
      <div>
        <h2>Not Found</h2>
        <img src={image} alt="Undraw.co 404 illustration" style={{
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
