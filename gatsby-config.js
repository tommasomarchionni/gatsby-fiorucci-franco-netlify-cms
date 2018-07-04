module.exports = {
  siteMetadata: {
    title: 'Fiorucci Franco',
    author: 'Tommaso Marchionni',
    description: 'Fiorucci Franco nasce nell\'officina della sua stessa città, con memorabili maestri del disegno e dell\'incisione quali Carnevali, Castellani, Ceci, Buscaglia, Battistoni, solo per dire di alcuni di diversa generazione, che hanno trasmesso l’arte ad uno stuolo di allievi che oggi rappresentano in prima fila italiana e che hanno dato un contenuto storico a quella che comunemente, ormai, viene definita "la scuola d’Urbino',
    siteUrl: 'https://www.fioruccifranco.it'
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/thanks', '/not-found']
      }
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ]
};
