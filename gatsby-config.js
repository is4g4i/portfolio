module.exports = {
  siteMetadata: {
    title: `Saga's Portfolio`,
    siteUrl: `https://portfolio55026.gtsb.io/`
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-plugin-mdx",
  ]
};