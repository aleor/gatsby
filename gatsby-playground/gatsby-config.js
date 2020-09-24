module.exports = {
  siteMetadata: {
    title: `Gatsby Playground`,
    description: `Experimenting with Gatsby`,
    author: `Rustem Akhmetov`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
      },
    },
  ],
};
