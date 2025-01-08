/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Avant Garde Healthcare`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://localhost:8000/`,
    menuLinks: [
      { name: "Why Avant Garde", path: "/about" },
      {
        name: "Solution and Services",
        subMenu: [
          {
            name: "Surgical Cost Management",
            path: "/services/web-development",
          },
          { name: "Surgical Coding Optimization", path: "/services/seo" },
          {
            name: "Surgical Quality and Outcomes Optimization",
            path: "/services/seo",
          },
          { name: "PACU and OR Throughput", path: "/services/seo" },
          { name: "BPCI Management", path: "/services/seo" },
        ],
      },
      {
        name: "Research",
        subMenu: [
          {
            name: "2024 Healthcare Research All-Stars",
            path: "/services/web-development",
          },
          { name: "Research and Publications", path: "/services/seo" },
          { name: "VBHC Research Group", path: "/services/seo" },
          { name: "View Benchmark Data", path: "/services/seo" },
          {
            name: "Evaluate physicians and departments against Avant-garde           benchmark data",
            path: "/services/seo",
          },
        ],
      },
      {
        name: "Our Company",
        subMenu: [
          { name: "About Us", path: "/about" },
          { name: "News", path: "/news" },
          { name: "Blog", path: "/blog" },
          { name: "Our Team", path: "/our-team" },
          { name: "Careers", path: "/careers" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ],
      },
      { name: "Contact", path: "/contact" },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: "Lora",
    //         variants: ["400", "500", "600", "700"],
    //       },
    //       {
    //         family: "Merriweather Sans",
    //         variants: ["300", "400", "500", "600", "700"],
    //       },a
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}