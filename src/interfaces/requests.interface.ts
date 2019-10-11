import { GatsbyImageProps } from "gatsby-image/index"

export interface IImgFluid {
  fluid: {
    aspectRatio?: number
    src: string
    srcSet?: string
    sizes?: string
    base64?: string
    tracedSVG?: string
    srcWebp?: string
    srcSetWebp?: string
  }
}

export interface IHomeRequest {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          title: string
          date: string
          featuredImage: {
            childImageSharp: GatsbyImageProps
          }
        }
      }
    }[]
  }
  site: {
    siteMetadata: {
      author: string
      authorDescription: string
      description: string
      title: string
      socials: {
        linkedin: string
        twitter: string
        github: string
      }
      themeColor: string
      siteUrl: string
    }
  }
  authorPicture: {
    childImageSharp: {
      fixed: any
    }
  }
}

export interface IPostRequest {
  markdownRemark: {
    fields: {
      slug: string
    }
    excerpt: string
    html: string
    frontmatter: {
      title: string
      date: string
      featuredImage: {
        childImageSharp: GatsbyImageProps
      }
    }
  }
  site: {
    siteMetadata: {
      author: string
      authorDescription: string
      description: string
      title: string
      socials: {
        linkedin: string
        twitter: string
        github: string
      }
      themeColor: string
      siteUrl: string
    }
  }
  authorPicture: {
    childImageSharp: GatsbyImageProps
  }
}
