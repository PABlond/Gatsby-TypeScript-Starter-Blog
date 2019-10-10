import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ content, isUICol }) => {
  return content.map((post, i: number) => {
    return isUICol ? (
      <Link to={post.slug} className="col-md-6" key={i}>
        <h3>{post.title}</h3>
        <Img className="post-image" {...post.childImageSharp} />
        <p>{post.excerpt}</p>

        <p className="post-date">{post.date}</p>
      </Link>
    ) : (
      <Link to={post.slug} className="post-row" key={i}>
        <Img className="post-image" {...post.childImageSharp} />
        <div className="post-content">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>

          <p className="post-date">{post.date}</p>
        </div>
      </Link>
    )
  })
}
