import React from "react"
import { graphql, navigate } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <>
      <button onClick={() => navigate("/")}>Back</button>
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
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
