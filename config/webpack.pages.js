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
  createPage('./src/pages/guides.html', './pages/guides.html'),
  createPage('./src/pages/articles.html', './pages/articles.html'),
  createPage('./src/pages/game.html', './pages/game.html'),
  createPage('./src/pages/tests.html', './pages/tests.html'),
  createPage('./src/pages/dictionary.html', './pages/dictionary.html'),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html'),
  createPage('./src/pages/404.html', './pages/404.html'),
  createPage('./src/pages/articles/article1.html', './pages/articles/article1.html'),
  createPage('./src/pages/guides/guide1.html', './pages/guides/guide1.html')
];

module.exports = htmlPages;
