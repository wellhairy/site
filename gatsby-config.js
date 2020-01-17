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
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/gallery/*`],
      }
    },
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
