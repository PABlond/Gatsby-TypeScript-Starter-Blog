const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Pierre-Alexis's Blog`,
    description: `Not everyone can be Gandhi, but each of us has the power to make sure our own lives count – and it’s those millions of lives that will ultimately build a better world. – Jeffrey Skoll`,
    author: `Pierre-Alexis Blond`,
    authorDescription: "tries to make the world better",
    socials: {
      linkedin: "https://www.linkedin.com/in/pierre-alexis-blond-00924b158/",
      twitter: "https://twitter.com/_pablond",
      github: "https://github.com/PABlond",
    },
    themeColor: "#fff",
    siteUrl: "https://friendly-cray-96d631.netlify.com/"
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Mansalva', 'Playfair Display', 'Source Sans Pro']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/markdown`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets/images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
  ],
}
