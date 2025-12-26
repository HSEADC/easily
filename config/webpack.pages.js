const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename, chunks){
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index']),
  createPage('./src/pages/about.html', './pages/about.html', ['index']),
  createPage('./src/pages/articles/articles.html', './pages/articles/articles.html', ['index']),
  createPage('./src/pages/guides/guides.html', './pages/guides/guides.html', ['index']),
  createPage('./src/pages/dictionary/dictionary.html', './pages/dictionary/dictionary.html', ['index']),
  createPage('./src/pages/errors/404.html', './pages/errors/404.html', ['index']),
  createPage('./src/pages/articles/finance/onlinepayments.html', './pages/articles/finance/onlinepayments.html', ['index']),
  createPage('./src/pages/articles/lifestyle/lifestyle.html', './pages/articles/lifestyle/lifestyle.html', ['index']),
  createPage('./src/pages/articles/home/home.html', './pages/articles/home/home.html', ['index']),
  createPage('./src/pages/articles/health/health.html', './pages/articles/health/health.html', ['index']),
  createPage('./src/pages/articles/finance/finance.html', './pages/articles/finance/finance.html', ['index']),
  createPage('./src/pages/articles/documents/documents.html', './pages/articles/documents/documents.html', ['index']),
  createPage('./src/pages/articles/career/career.html', './pages/articles/career/career.html', ['index']),
  createPage('./src/pages/styleguide.html', './pages/styleguide.html', ['styleguide'])
];

module.exports = htmlPages;