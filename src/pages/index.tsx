import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./../assets/styles/style.scss"
import { graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Posts from "./../components/Posts"

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site
  const content = data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: { title, date, featuredImage: {childImageSharp} },
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, date, excerpt, slug, childImageSharp }
  })
  const authorPicture = data.authorPicture.childImageSharp

  console.log(data)
  return (
    <Container fluid className="mt-1">
      <Header authorPicture={authorPicture} siteMetadata={siteMetadata} />
      <Posts content={content} />
      <Footer siteMetadata={siteMetadata} />
    </Container>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  src
                }
              }
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

export default IndexPage
