import React from "react"
import Img from "gatsby-image"

export default ({ authorPicture, siteMetadata }) => {
  return (
    <>
      <h1 className="mb-5 font-weight-bold">{siteMetadata.title}</h1>
      <p className="mb-5 d-flex text-secondary align-items-center">
        <Img className="rounded-circle mr-2" {...authorPicture} />
        {siteMetadata.author} {siteMetadata.authorDescription}
      </p>
    </>
  )
}
