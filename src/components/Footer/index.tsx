import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"

import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa"

export default ({ siteMetadata }: IHomeRequest["site"]) => {
  return (
    <footer id="footer">
      <p>
        &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
      <span id="footer-socials">
        <a
          target="_blank"
          href={siteMetadata.socials.linkedin}
          aria-label="Linkedin"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href={siteMetadata.socials.twitter}
          aria-label="Twitter"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          target="_blank"
          href={siteMetadata.socials.github}
          aria-label="Github"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </span>
    </footer>
  )
}
