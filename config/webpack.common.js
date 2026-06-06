const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPages = require('./webpack.pages.js');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = [
  '/index.html',
  '/404.html',
  '/500.html',
  '/505.html',
  '/pages/articles/articles.html',
  '/pages/articles/articles_pages/probation.html',
  '/pages/guides/guides.html',
  '/pages/guides/guides_pages/batteries.html',
  '/pages/guides/guides_pages/driver-license.html',
  '/pages/dictionary/dictionary.html',
  '/pages/styleguide/styleguide.html'
]

module.exports = {
  entry: {
    main: './src/javascripts/main.js',
    index: './src/index.js',
    articles: './src/pages/articles/articles.js',
    styleguide: './src/pages/styleguide/styleguide.js',
    skilltest: './src/skilltest.js',
    errors: './src/pages/errors/errors.js',
    guides: './src/pages/guides/guides.js',
    dictionary: './src/pages/dictionary/dictionary.js',
    filter: './src/javascripts/filter.js',
    dropdown: './src/javascripts/dropdown.js',
    search: './src/javascripts/search.js'
  },
  output: {
    path: path.resolve('.', "docs"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    ...htmlPages,
    new MiniCssExtractPlugin(),
    new SitemapPlugin({ base: 'http://easily.adc.ac/', paths }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/partials/footer.html'),
      location: 'footerPartial',
      template_filename: '*',
      priority: 'replace'
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/partials/header.html'),
      location: 'headerPartial',
      template_filename: '*',
      priority: 'replace'
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/partials/analitics.html'),
      location: 'analitics',
      template_filename: '*',
      priority: 'replace'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/share/CNAME'),
          to: path.resolve(__dirname, '../docs')
        }
      ]
    })
  ]
};
