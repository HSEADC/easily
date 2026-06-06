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
  createPage('./src/pages/articles/articles_pages/pochemu-byt-zhret-vremya-i-kak-ustroena-mentalnaya-nagruzka.html', './pages/articles/articles_pages/pochemu-byt-zhret-vremya-i-kak-ustroena-mentalnaya-nagruzka.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kommunalka-kak-nakruchivayut-pochemu-my-platim-za-soseda-i-chto-takoe-odn.html', './pages/articles/articles_pages/kommunalka-kak-nakruchivayut-pochemu-my-platim-za-soseda-i-chto-takoe-odn.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/minimalnyj-nabor-dlya-zhizni.html', './pages/articles/articles_pages/minimalnyj-nabor-dlya-zhizni.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/pochemu-prokrastinaciya-pobezhdaet-v-sessiyu.html', './pages/articles/articles_pages/pochemu-prokrastinaciya-pobezhdaet-v-sessiyu.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kak-podgotovitsya-k-zashchite-diploma-i-ne-posedet-za-mesyac-do.html', './pages/articles/articles_pages/kak-podgotovitsya-k-zashchite-diploma-i-ne-posedet-za-mesyac-do.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/rabota-i-uchyoba-odnovremenno.html', './pages/articles/articles_pages/rabota-i-uchyoba-odnovremenno.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kak-splanirovat-pervuyu-poezdku-za-granicu.html', './pages/articles/articles_pages/kak-splanirovat-pervuyu-poezdku-za-granicu.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kak-ne-poteryat-dengi-na-kartah-i-obmennikah-v-drugoj-strane.html', './pages/articles/articles_pages/kak-ne-poteryat-dengi-na-kartah-i-obmennikah-v-drugoj-strane.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/prosrochennaya-viza-i-poteryannyj-zagranpasport.html', './pages/articles/articles_pages/prosrochennaya-viza-i-poteryannyj-zagranpasport.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kak-ustroen-chernyj-rynok-dokumentov.html', './pages/articles/articles_pages/kak-ustroen-chernyj-rynok-dokumentov.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/chto-proiskhodit-s-vashimi-dannymi-esli-telefon-ukrali.html', './pages/articles/articles_pages/chto-proiskhodit-s-vashimi-dannymi-esli-telefon-ukrali.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kvest-po-vosstanovleniyu-pasporta.html', './pages/articles/articles_pages/kvest-po-vosstanovleniyu-pasporta.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/pochemu-nas-uvolnyayut-yuridicheskie-i-psihologicheskie-prichiny.html', './pages/articles/articles_pages/pochemu-nas-uvolnyayut-yuridicheskie-i-psihologicheskie-prichiny.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/chto-takoe-vyhodnoe-posobie-i-kto-ego-poluchaet.html', './pages/articles/articles_pages/chto-takoe-vyhodnoe-posobie-i-kto-ego-poluchaet.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/sokrashchenie-likvidaciya-po-sobstvennomu.html', './pages/articles/articles_pages/sokrashchenie-likvidaciya-po-sobstvennomu.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/kto-dolzhen-platit-za-remont-esli-slomalas-tekhnika.html', './pages/articles/articles_pages/kto-dolzhen-platit-za-remont-esli-slomalas-tekhnika.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/pochemu-sobstvenniki-ne-vozvrashchayut-depozit-5-samyh-chastyh-skhem.html', './pages/articles/articles_pages/pochemu-sobstvenniki-ne-vozvrashchayut-depozit-5-samyh-chastyh-skhem.html', ['main', 'articles', 'dropdown', 'search']),
  createPage('./src/pages/articles/articles_pages/chto-takoe-dogovor-najma.html', './pages/articles/articles_pages/chto-takoe-dogovor-najma.html', ['main', 'articles', 'dropdown', 'search']),

  createPage('./src/pages/guides/guides.html', './pages/guides/guides.html', ['main', 'guides', 'filter', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/batteries.html', './pages/guides/guides_pages/batteries.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/driver-license.html', './pages/guides/guides_pages/driver-license.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-projti-stazhirovku-i-poluchit-offer.html', './pages/guides/guides_pages/kak-projti-stazhirovku-i-poluchit-offer.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-probitsya-v-kreativ.html', './pages/guides/guides_pages/kak-probitsya-v-kreativ.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-prevratit-frilans-v-postoyannyj-dohod.html', './pages/guides/guides_pages/kak-prevratit-frilans-v-postoyannyj-dohod.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-prosit-obratnuyu-svyaz.html', './pages/guides/guides_pages/kak-prosit-obratnuyu-svyaz.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-vesti-sebya-v-pervyj-mesyac-na-novoj-rabote.html', './pages/guides/guides_pages/kak-vesti-sebya-v-pervyj-mesyac-na-novoj-rabote.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-projti-assessment-i-ne-vyletet-na-pervom-zhe-teste.html', './pages/guides/guides_pages/kak-projti-assessment-i-ne-vyletet-na-pervom-zhe-teste.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-vesti-peregovory-s-klientom-ili-partnerom.html', './pages/guides/guides_pages/kak-vesti-peregovory-s-klientom-ili-partnerom.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-iskat-rabotu-kogda-u-tebya-net-opyta.html', './pages/guides/guides_pages/kak-iskat-rabotu-kogda-u-tebya-net-opyta.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-dogovoritsya-o-zarplate.html', './pages/guides/guides_pages/kak-dogovoritsya-o-zarplate.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-otvechat-na-vopros-rasskazhite-o-sebe.html', './pages/guides/guides_pages/kak-otvechat-na-vopros-rasskazhite-o-sebe.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-projti-sobesedovanie-esli-tryasutsya-kolenki.html', './pages/guides/guides_pages/kak-projti-sobesedovanie-esli-tryasutsya-kolenki.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/kak-napisat-rezyume-chtoby-tebya-zametili.html', './pages/guides/guides_pages/kak-napisat-rezyume-chtoby-tebya-zametili.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/uvolnenie-po-sobstvennomu-zhelaniyu.html', './pages/guides/guides_pages/uvolnenie-po-sobstvennomu-zhelaniyu.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/chto-sprosit-na-sobesedovanii.html', './pages/guides/guides_pages/chto-sprosit-na-sobesedovanii.html', ['main', 'guides', 'dropdown', 'search']),

  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),
  createPage('./src/pages/guides/guides_pages/p.html', './pages/guides/guides_pages/p.html', ['main', 'guides', 'dropdown', 'search']),






  createPage('./src/pages/dictionary/dictionary.html', './pages/dictionary/dictionary.html', ['main', 'dictionary', 'dropdown', 'filter', 'search']),

  createPage('./src/pages/styleguide/styleguide.html', './pages/styleguide/styleguide.html', ['styleguide']),

  createPage('./src/pages/errors/404.html', './404.html', ['main', 'errors']),
  createPage('./src/pages/errors/500.html', './500.html', ['main', 'errors']),
  createPage('./src/pages/errors/505.html', './505.html', ['main', 'errors'])
];

module.exports = htmlPages;