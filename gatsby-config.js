module.exports = {
  siteMetadata: {
    title: 'Fiorucci Franco',
    author: "Tommaso Marchionni",
    description: "Fiorucci Franco website."
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                // {
                //     resolve: `gatsby-remark-images`,
                //     options: {
                //         maxWidth: 800,
                //     },
                // },
                "gatsby-remark-copy-linked-files",
            ],
        },
    },
    {
        resolve: `gatsby-plugin-favicon`,
        options: {
            logo: "./src/favicon.png",
            injectHTML: true,
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                twitter: true,
                yandex: true,
                windows: true
            }
        }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
