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
