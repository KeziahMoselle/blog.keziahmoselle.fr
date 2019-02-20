import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function BlogPostTemplate (props) {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <div className="markdown-body" style={{ marginTop: '64px' }}>
        <h1>{post.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        
        <hr />

        <div className="space-between">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}

          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
