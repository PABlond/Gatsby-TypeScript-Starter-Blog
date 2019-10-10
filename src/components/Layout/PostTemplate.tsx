import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"

export default ({ data, pageContext }) => {
  console.log(data, pageContext)
  const imgProps = data.fileName.childImageSharp
  return (
    <>
      <button className="mt-5" onClick={() => navigate("/")}>Back</button>
      <Img  {...imgProps} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!, $cover: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
    fileName: file(relativePath: { eq: $cover }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
