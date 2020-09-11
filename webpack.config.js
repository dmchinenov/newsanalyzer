const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].[chunkhash].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=./vendor/fonts/[name].[ext]",
      },
      {
        test: /\.(svg|jpg|gif|png|webp)$/,
        use: [
          "file-loader?name=./images/[name].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              name: "./images/[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/about.html",
      chunks: ["about"],
      filename: "about.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
