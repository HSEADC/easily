const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename, chunks){
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index', 'skilltest', 'chart']),
  createPage('./src/pages/about.html', './pages/about.html'),
  createPage('./src/pages/articles/articles.html', './pages/articles/articles.html', ['articles']),
  createPage('./src/pages/guides/guides.html', './pages/guides/guides.html', ['guides', 'filter']),
  createPage('./src/pages/dictionary/dictionary.html', './pages/dictionary/dictionary.html'),
  createPage('./src/pages/articles/lifestyle/lifestyle.html', './pages/articles/lifestyle/lifestyle.html'),
  createPage('./src/pages/articles/home/home.html', './pages/articles/home/home.html'),
  createPage('./src/pages/articles/health/health.html', './pages/articles/health/health.html'),
  createPage('./src/pages/articles/finance/finance.html', './pages/articles/finance/finance.html'),
  createPage('./src/pages/articles/documents/documents.html', './pages/articles/documents/documents.html'),
  createPage('./src/pages/articles/career/career.html', './pages/articles/career/career.html'),
  createPage('./src/pages/styleguide/styleguide.html', './pages/styleguide/styleguide.html', ['styleguide']),
  createPage('./src/pages/errors/404.html', './404.html', ['errors']),
  createPage('./src/pages/errors/500.html', './500.html', ['errors']),
  createPage('./src/pages/errors/505.html', './505.html', ['errors'])
];

module.exports = htmlPages;