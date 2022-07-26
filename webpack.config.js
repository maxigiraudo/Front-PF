const Dotenv = require("dotenv-webpack");
module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: false,
    },
  },

  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
