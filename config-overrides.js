module.exports = function override(config, env) {
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
  };
  return config;
};
