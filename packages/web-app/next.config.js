// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require("next-transpile-modules")(["bar"]);

const path = require("path");

const nextConfig = {
  webpack: function (config) {
    /*
     Optionnaly, adding the following to modules
     will resolve modules using relative paths instead of
     going through `<rootDir>/node_modules`
    */
    /*
    config.resolve.modules = [
      path.join(__dirname, ".."),
      ...config.resolve.modules,
    ];
    */
    config.resolve.alias = {
      ...config.resolve.alias,
      baz: "baz/src",
    };

    return config;
  },
};

module.exports = withTM(nextConfig);
