module.exports = {
  publicPath: "",
  transpileDependencies: ["@polkadot"],
  configureWebpack: {
    resolve: {
      extensions: ["*", ".mjs", ".js", ".vue", ".json", ".gql", ".graphql"]
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        },
        {
          test: /\.(md|markdown)$/,
          use: "markdown-image-loader"
        },
        {
          test: /\.js$/,
          loader: require.resolve("@open-wc/webpack-import-meta-loader")
        }
      ]
    }
  }
};
