import React from "react"
import Img from "gatsby-image"

export default ({ siteMetadata, authorPicture }) => {
  return (
    <section id="header-about">
      <Img className="author-picture" {...authorPicture} />
      <p>
        {siteMetadata.author} {siteMetadata.authorDescription}
      </p>
    </section>
  )
}
