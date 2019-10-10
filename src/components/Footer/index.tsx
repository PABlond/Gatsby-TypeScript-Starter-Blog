import React from "react"
import { Container } from "react-bootstrap"

export default ({ siteMetadata }) => {
  return (
    <Container fluid id="footer">
      <p className="d-flex align-items-center">
      &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
    </Container>
  )
}
