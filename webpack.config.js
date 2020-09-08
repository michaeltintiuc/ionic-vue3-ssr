const path = require("path");
const fs = require("fs");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs2 " + mod;
  });

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  externals: Object.keys(require("./package.json").dependencies),
  optimization: {
    minimize: false,
  },
  // plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [
          { loader: "vue-style-loader", options: { manualInject: true } },
          { loader: "css-loader", options: { esModule: false } },
        ],
      },
    ],
  },
};
