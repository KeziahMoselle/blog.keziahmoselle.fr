import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

function BlogPostTemplate (props) {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <div style={{ marginTop: '64px' }}>
        <div className="space-between" style={{ marginBottom: '48px' }}>
          <Link to="/"><button>Go back</button></Link>
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span>~ { post.timeToRead } min</span>
            <span>{ post.frontmatter.date }</span>
          </p>
        </div>

        <div className="markdown-body">
          <h1>{post.frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          
          <hr />

          <div className="article-end">
            <p>
              { previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>)
              }

              { next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>)
              }
            </p>

            <Link to="/"><button>Go back</button></Link>
          </div>
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
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
