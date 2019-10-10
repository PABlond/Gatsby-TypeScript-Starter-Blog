import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/style.scss'
import { graphql } from "gatsby"
import { Link } from "gatsby"
import {Container, Row} from 'react-bootstrap'
import Header from './../components/Header'
import Footer from './../components/Footer'

const IndexPage = ({ data, pageContext }) => {
  const { siteMetadata } = data.site
  const content = data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: { title, date },
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, date, excerpt, slug }
  })
  const authorPicture = data.authorPicture.childImageSharp

  console.log(data, pageContext)
  return (
    <Container fluid className="mt-1">
      <Header authorPicture={authorPicture} siteMetadata={siteMetadata} />
      {content.map((post, i) => {
        return (
          <div key={i}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <Link to={post.slug}>
              <p>{post.excerpt}</p>
            </Link>
          </div>
        )
      })}

      <Footer siteMetadata={siteMetadata} />
    </Container>
  )
}

export const pageQuery = graphql`
  query HomePageQuery{
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
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        title
        authorDescription
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
