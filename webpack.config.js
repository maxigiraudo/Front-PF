const Dotenv = require("dotenv-webpack");
module.exports = {
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
