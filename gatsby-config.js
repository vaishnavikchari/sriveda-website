module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Sriveda Technology Solutions',
    author: 'vasrush',
    description: 'Sriveda Technology Solutions',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Why us',
        link: '/whyus',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Contact us',
        link: '/contact',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true,
      },
    },
  ],
};
