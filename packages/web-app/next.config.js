// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require("next-transpile-modules")(["bar"]);

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
  webpack: function (config) {
    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin(),
    ];

    return config;
  },
};

module.exports = withTM(nextConfig);
