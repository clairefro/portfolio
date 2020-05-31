/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    image: "/images/og/default.png", // Path to image in the 'static' folder,
    website: "https://sumthin.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`
  ],
}
