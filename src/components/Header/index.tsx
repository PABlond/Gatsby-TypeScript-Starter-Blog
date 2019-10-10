import React from "react"
import { navigate } from "gatsby"

export default ({ siteMetadata }) => {
  return (
    <header id="header">
      <h1 onClick={() => navigate("/")}>{siteMetadata.title}</h1>
    </header>
  )
}
