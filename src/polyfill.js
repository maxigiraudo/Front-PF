import { Buffer } from "buffer";
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

window.global = window;
global.Buffer = Buffer;
global.process = {
  env: { DEBUG: undefined },
  version: "",
  nextTick: require("next-tick"),

  //   resolve: {
  //     fallback: {
  //       fs: false,
  //       tls: false,
  //       net: false,
  //       path: false,
  //       zlib: false,
  //       http: false,
  //       https: false,
  //       stream: false,
  //       crypto: false,
  //     },
  //   },
  plugins: [new NodePolyfillPlugin()],
};

// function override(config) {
//   const fallback = config.resolve.fallback || {};
//   Object.assign(fallback, {
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     assert: require.resolve("assert"),
//     https: require.resolve("https-browserify"),
//     os: require.resolve("os-browserify"),
//     url: require.resolve("url"),
//     // http: require.resolve("stream-http"),
//   });
//   config.resolve.fallback = fallback;
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//       plugins: [new Dotenv()],
//     }),
//   ]);
//   console.log(config);
//   return config;
// }

// config.ignoreWarnings = [/Failed to parse source map/];
