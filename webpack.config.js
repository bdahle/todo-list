const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/mvc.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
