import React from "react"
import Img from "gatsby-image"

export default ({ authorPicture, siteMetadata }) => {
  return (
    <header id="header">
      <h1>{siteMetadata.title}</h1>
      <div id="header-about">
        <Img className="author-picture" {...authorPicture} />
        <p>
          {siteMetadata.author} {siteMetadata.authorDescription}
        </p>
      </div>
    </header>
  )
}
