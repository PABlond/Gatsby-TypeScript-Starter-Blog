import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
