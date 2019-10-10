import React from "react"
import { Container } from "react-bootstrap"
import { navigate } from "gatsby"
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa"

export default ({ siteMetadata }) => {
  return (
    <footer id="footer">
      <p>
        &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
      <span id="footer-socials">
        <a target="_blank" href={siteMetadata.socials.linkedin}>
          <FaLinkedin />
        </a>
        <a target="_blank" href={siteMetadata.socials.twitter}>
          <FaTwitterSquare />
        </a>
        <a target="_blank" href={siteMetadata.socials.github}>
          <FaGithub />
        </a>
      </span>
    </footer>
  )
}
