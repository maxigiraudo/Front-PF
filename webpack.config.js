const Dotenv = require("dotenv-webpack");
module.exports = {
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      "crypto-browserify": require.resolve("crypto-browserify"), //if you want to use this module also don't forget npm i crypto-browserify
    },
  },

  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
