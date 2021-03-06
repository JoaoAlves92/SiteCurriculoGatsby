module.exports = {
  siteMetadata: {
    siteUrl: "https://joaoalves92.vercel.app/",
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        //icon: "src/images/icon.png",
        icon: "src/images/icons8-monitor-64.png"
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
