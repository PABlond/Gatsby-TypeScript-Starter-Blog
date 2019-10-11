import { GatsbyImageProps } from "gatsby-image/index"

export interface IPostsContent {
  title: string
  date: string
  excerpt: string
  slug: string
  childImageSharp: GatsbyImageProps
}
