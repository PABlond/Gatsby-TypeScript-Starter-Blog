import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data)
  const imgProps = data.markdownRemark.frontmatter.featuredImage.childImageSharp
  return (
    <>
      <button className="mt-5" onClick={() => navigate("/")}>
        Back
      </button>
      <Img  {...imgProps} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
