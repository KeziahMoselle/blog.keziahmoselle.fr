import React from 'react'
import { Link } from 'gatsby'

function ArticleLink ({ title, slug, subtitle, thumbnail, topics, date, timeToRead}) {
  if (topics) {
    var listTopics = topics.map(tag => (
      <h5 className="chip">{ tag }</h5>
    ))
  }
  
  return (
    <div className="article">
      <div className="article-header">
        <div>
          <Link to={slug}><h3>{ title }</h3></Link>
          <h4 className="grey">{ subtitle }</h4>
          <p>~ { timeToRead } min | { date }</p>
          <div>{ listTopics }</div>
        </div>
        
        { thumbnail &&
          <Link to={slug}>
            <img
              src={`./assets/thumbnails/${thumbnail}.jpg`}
              alt={`${title} thumbnail`}
            />
          </Link>
        }
      </div>
      
      <div className="article-footer">
        <Link to={slug} className="pill"><span>Lire l'article</span></Link>
      </div>
    </div>
  )
}

export default ArticleLink