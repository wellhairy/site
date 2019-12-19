const config = {
  siteMetadata: {
    title: `proto site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`
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
