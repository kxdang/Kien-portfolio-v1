const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Kien Dang`,
    description: `Kien's personal portfolio`,
    siteUrl: `https://www.kien.dev`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 150
      }
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
        precision: 8
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128969767-2"
      }
    }
  ]
}