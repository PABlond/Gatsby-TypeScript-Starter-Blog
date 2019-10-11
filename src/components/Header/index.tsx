import React from "react"
import { navigate } from "gatsby"
import { IPostRequest } from "./../../interfaces/requests.interface"

export default ({ siteMetadata }: IPostRequest["site"]) => {
  return (
    <header id="header">
      <h1 onClick={() => navigate("/")}>{siteMetadata.title}</h1>
    </header>
  )
}
