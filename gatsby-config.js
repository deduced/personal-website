module.exports = {
  siteMetadata: {
    title: "Deducible.io",
    description:
      "Full Stack Web Development, Entrepreneurship, and Data Science...with a cherry on top",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
  ],
};
