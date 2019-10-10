import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Header from "./../Header"
import Footer from './../Footer'

export default ({ data }) => {
  console.log(data)
  const imgProps = data.markdownRemark.frontmatter.featuredImage.childImageSharp
  return (
    <>
      <Header siteMetadata={data.site.siteMetadata} />
      <section id="post">
        <div id="cover-image">
          <Img {...imgProps} />
        </div>
        <div id="post-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </section>
      <Footer siteMetadata={data.site.siteMetadata} />
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
