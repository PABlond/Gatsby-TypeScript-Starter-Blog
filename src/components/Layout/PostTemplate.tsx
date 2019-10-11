import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Head from "./../Head"
import Header from "./../Header"
import Footer from "./../Footer"

export default ({ data }) => {
  console.log(data)
  const {
    site: { siteMetadata },
    markdownRemark: {
      frontmatter: { featuredImage, title },
      html
    },
  } = data
  const imgProps = featuredImage.childImageSharp

  return (
    <>
      <Head siteMetadata={siteMetadata} pageName={title} />
      <Header siteMetadata={siteMetadata} />
      <section id="post">
        <h1 id="post-title">{title}</h1>
        <div id="cover-image">
          <Img {...imgProps} />
        </div>
        <div
          id="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
      <Footer siteMetadata={siteMetadata} />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        authorDescription
        description
        title
        socials {
          linkedin
          twitter
          github
        }
        themeColor
        siteUrl
      }
    }
    authorPicture: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
