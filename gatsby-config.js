const config = {
  siteMetadata: {
    title: `proto site`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wellhairy design - Allan King`,
        short_name: `wellhairy-design`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`],
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface\:400`,
          `Varela Round\:400`
        ],
        display: 'swap'
      }
    }
  ],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsConfig = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-27643243-1",
      anonymize: true,
      respectDNT: true,
    }
  };
  config.plugins.push(googleAnalyticsConfig);
}

module.exports = config;
