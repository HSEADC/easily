const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename){
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html'),
  createPage('./src/promo.html', './promo.html'),
  createPage('./src/pages/about.html', './pages/about.html'),
  createPage('./src/pages/articles/articles.html', './pages/articles/articles.html'),
  createPage('./src/pages/guides/guides.html', './pages/guides/guides.html'),
  createPage('./src/pages/dictionary/dictionary.html', './pages/dictionary/dictionary.html'),
  createPage('./src/pages/errors/404.html', './pages/errors/404.html'),
  createPage('./src/pages/articles/finance/onlinepayments.html', './pages/articles/finance/onlinepayments.html')
];

module.exports = htmlPages;