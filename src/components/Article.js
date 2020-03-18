import React from 'react'
import { Link } from 'gatsby'

function ArticleLink ({ title, slug, excerpt, date, timeToRead, wordCount}) {
  return (
    <Link to={slug}>
      <div className="article card">
        <div className="article-header">
          <div className="article-title">
            <h3>{ title }</h3>
            <small className="grey show-on-desktop">publié { date }</small>
          </div>
          <p className="grey">{ excerpt }</p>
        </div>
        
        <div className="article-footer">
          <p className="pill">
            <span>Lire l'article</span>
          </p>

          <div>
            <div className="show-on-tablet-and-down">
              <small className="chip grey white show-on-tablet-and-down">
                publié { date }
              </small>

              <span className="chip grey white bordered">
                { wordCount } mots
              </span>
            </div>

            <span className="chip grey white bordered show-on-desktop">
              ~{ timeToRead } min de lecture
            </span>
          </div>
        </div>


      </div>
    </Link>
  )
}

export default ArticleLink