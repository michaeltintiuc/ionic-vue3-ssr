const path = require("path");
const fs = require("fs");

module.exports = {
  entry: "./src/client.js",
  // target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
    publicPath: "/dist/",
    // libraryTarget: "commonjs2",
  },
  // externals: Object.keys(require("./package.json").dependencies),
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
