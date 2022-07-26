import { Buffer } from "buffer";

window.global = window;
global.Buffer = Buffer;
global.process = {
  env: { DEBUG: undefined },
  version: "",
  nextTick: require("next-tick"),

  override(config, env) {
    console.log("override");
    let loaders = config.resolve;
    loaders.fallback = {
      //   path: require.resolve("path-browserify"),
      //   os: require.resolve("os-browserify/browser"),
      //   crypto: require.resolve("crypto-browserify"),
      //   stream: require.resolve("stream-browserify"),
      //   assert: require.resolve("assert"),
      http: false,
      //   https: require.resolve("https-browserify"),
      //   url: require.resolve("url"),
    };

    return config;
  },
};

// module.exports = function override(config, env) {
//   console.log("override");
//   let loaders = config.resolve;
//   loaders.fallback = {
//     path: require.resolve("path-browserify"),
//     os: require.resolve("os-browserify/browser"),
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     assert: require.resolve("assert"),
//     http: require.resolve("stream-http"),
//     https: require.resolve("https-browserify"),
//     url: require.resolve("url"),
//   };

//   return config;
// };
