const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename, chunks){
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index', 'skilltest', 'chart', 'dropdown']),

  createPage('./src/pages/articles/articles.html', './pages/articles/articles.html', ['articles', 'filter', 'dropdown']),
  createPage('./src/pages/articles/articles_pages/article_1.html', './pages/articles/articles_pages/article_1.html', ['articles', 'dropdown']),

  createPage('./src/pages/guides/guides.html', './pages/guides/guides.html', ['guides', 'filter', 'dropdown']),
  createPage('./src/pages/guides/guides_pages/guide_1.html', './pages/guides/guides_pages/guide_1.html', ['guides', 'dropdown']),

  createPage('./src/pages/dictionary/dictionary.html', './pages/dictionary/dictionary.html'),

  createPage('./src/pages/styleguide/styleguide.html', './pages/styleguide/styleguide.html', ['styleguide']),

  createPage('./src/pages/errors/404.html', './404.html', ['errors']),
  createPage('./src/pages/errors/500.html', './500.html', ['errors']),
  createPage('./src/pages/errors/505.html', './505.html', ['errors'])
];

module.exports = htmlPages;