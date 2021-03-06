import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

function BlogPostTemplate (props) {
  const post = props.data.markdownRemark
  const { previous, next, slug } = props.pageContext
  
  const editFileUrl = `https://github.com/keziahmoselle/blog.keziahmoselle.fr/edit/master/content/blog/${slug.replace(/\//g,'')}/index.md`

  useEffect(() => {
    scrollToAnchor()
  }, [props.pageContext])

  function scrollToAnchor() {
    const hash = decodeURIComponent(document.location.hash)

    if (hash) {
      return document.querySelector(hash).scrollIntoView()
    }

    document.querySelector('header').scrollIntoView()
  }

  return (
    <Layout location={props.location}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        cover={`/cover/${props['*']}.jpg`}
      />

      <div style={{ marginTop: '64px' }}>
        <div className="article-metadata space-between">
          <Link to="/"><button>Go back</button></Link>
          <p>
            <span style={{ marginBottom: '6px' }}>Temps de lecture : ~{ post.timeToRead } min</span>
            <span>Publié le { post.frontmatter.date }</span>
          </p>
        </div>

        <div className="markdown-body">
          <h1>{post.frontmatter.title}</h1>

          <div className="table-of-contents" dangerouslySetInnerHTML={{ __html: post.tableOfContents }}></div>

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
            <a href={editFileUrl} style={{ margin: '24px 0' }}>Edit on GitHub</a>
          </div>
        </div>      
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "FR")
      }
    }
  }
`
