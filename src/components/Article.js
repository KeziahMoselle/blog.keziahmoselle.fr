import React from 'react'
import { Link } from 'gatsby'

function ArticleLink ({ title, slug, excerpt, thumbnail, topics, date, timeToRead}) {
  if (topics) {
    var listTopics = topics.map(tag => (
      <h5 className="chip">{ tag }</h5>
    ))
  }
  
  return (
    <Link to={slug}>
      <div className="article card">
        <div className="article-header">
          <div>
            <h3>{ title }</h3>
            <p className="grey">{ excerpt }</p>
            <div>{ listTopics }</div>
          </div>
          
          { thumbnail &&
            <img
              src={`./assets/thumbnails/${thumbnail}.jpg`}
              alt={`${title} thumbnail`}
            />
          }
        </div>
        
        <div className="article-footer">
          <p className="pill"><span>Lire l'article</span></p>
          <span className="chip white bordered">~{ timeToRead } min de lecture</span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleLink