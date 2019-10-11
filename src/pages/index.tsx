import React from "react"
import "./../assets/styles/style.scss"
import { graphql } from "gatsby"
import { IHomeRequest } from "./../interfaces/requests.interface"

import Head from "./../components/Head"
import Header from "./../components/Header"
import About from "./../components/About"
import Footer from "./../components/Footer"
import Posts from "./../components/Posts"

const IndexPage = ({ data }: { data: IHomeRequest }) => {
  // Helper to organize useful data in request
  const content = data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: {
        title,
        date,
        featuredImage: { childImageSharp },
      },
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, date, excerpt, slug, childImageSharp }
  })
  const { siteMetadata } = data.site
  const authorPicture = data.authorPicture.childImageSharp

  return (
    <>
      <Head siteMetadata={siteMetadata} pageName={"Homepage"} />
      <Header siteMetadata={siteMetadata} />
      <About authorPicture={authorPicture} siteMetadata={siteMetadata} />
      <Posts content={content} />
      <Footer siteMetadata={siteMetadata} />
    </>
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

export default IndexPage
