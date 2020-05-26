// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require("next-transpile-modules")(["bar"]);

const nextConfig = {
  webpack: function (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      baz: "../baz/src",
    };

    return config;
  },
};

module.exports = withTM(nextConfig);
