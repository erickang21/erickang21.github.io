const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new DefinePlugin({
      "process.env.REACT_APP_NODE_ENV": JSON.stringify(process.env.REACT_APP_NODE_ENV),
    }),
    // Copied to the bundle root so the relative URLs in public/index.html
    // resolve both at the domain root and under a GitHub Pages sub-path.
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./manifest.json" },
        { from: "./public/favicon.ico", to: "./favicon.ico" },
        { from: "./public/logo192.png", to: "./logo192.png" },
        { from: "./public/logo512.png", to: "./logo512.png" },
        { from: "./public/robots.txt", to: "./robots.txt" },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: ".ericworksfor.me",
  },
  // Defines file extensions that will be used here.
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [`...`, new JsonMinimizerPlugin(), new MiniCssExtractPlugin(), new TerserPlugin()],
  },
};
