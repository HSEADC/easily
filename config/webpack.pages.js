const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename, chunks){
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['main', 'index', 'skilltest', 'chart', 'dropdown', 'search']),

  createPage('./src/pages/articles/articles.html', './pages/articles/articles.html', ['main', 'articles', 'filter', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/probation.html', './pages/articles/articles_pages/probation.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kvartira-v-novom-gorode.html', './pages/articles/articles_pages/kvartira-v-novom-gorode.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/pochemu-rabotodateli-ne-lyubyat-novichkov.html', './pages/articles/articles_pages/pochemu-rabotodateli-ne-lyubyat-novichkov.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kak-ustroena-adaptaciya-na-pervoj-rabote.html', './pages/articles/articles_pages/kak-ustroena-adaptaciya-na-pervoj-rabote.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/ispytatelnyj-srok-ne-daj-sebya-obmanut.html', './pages/articles/articles_pages/ispytatelnyj-srok-ne-daj-sebya-obmanut.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/pervaya-mashina-kak-ne-popast-na-dengi.html', './pages/articles/articles_pages/pervaya-mashina-kak-ne-popast-na-dengi.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/pochemu-novichki-za-rulem-chashche-popadayut-v-dtp.html', './pages/articles/articles_pages/pochemu-novichki-za-rulem-chashche-popadayut-v-dtp.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/strahovka-nalog-to-obyazatelnye-platezhi-avtovladelca.html', './pages/articles/articles_pages/strahovka-nalog-to-obyazatelnye-platezhi-avtovladelca.html', ['main', 'articles', 'dropdown', 'search']),

  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/page.html', './pages/articles/articles_pages/page.html', ['main', 'articles', 'dropdown', 'search']),










  createPage('./src/pages/guides/guides.html', './pages/guides/guides.html', ['main', 'guides', 'filter', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/batteries.html', './pages/guides/guides_pages/batteries.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/driver-license.html', './pages/guides/guides_pages/driver-license.html', ['main', 'guides', 'dropdown', 'search']),

  createPage('./src/pages/dictionary/dictionary.html', './pages/dictionary/dictionary.html', ['main', 'dictionary', 'dropdown', 'filter', 'search']),

  createPage('./src/pages/styleguide/styleguide.html', './pages/styleguide/styleguide.html', ['styleguide']),

  createPage('./src/pages/errors/404.html', './404.html', ['main', 'errors']),
  createPage('./src/pages/errors/500.html', './500.html', ['main', 'errors']),
  createPage('./src/pages/errors/505.html', './505.html', ['main', 'errors'])
];

module.exports = htmlPages;