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
  '/pages/articles/articles_pages/kvartira-v-novom-gorode.html',
  '/pages/articles/articles_pages/pervyj-mesyac-v-novom-gorode.html',
  '/pages/articles/articles_pages/propiska-voenkomat-polis.html',
  '/pages/articles/articles_pages/pochemu-rabotodateli-ne-lyubyat-novichkov.html',
  '/pages/articles/articles_pages/kak-ustroena-adaptaciya-na-pervoj-rabote.html',
  '/pages/articles/articles_pages/ispytatelnyj-srok-ne-daj-sebya-obmanut.html',
  '/pages/articles/articles_pages/pervaya-mashina-kak-ne-popast-na-dengi.html',
  '/pages/articles/articles_pages/pochemu-novichki-za-rulem-chashche-popadayut-v-dtp.html',
  '/pages/articles/articles_pages/strahovka-nalog-to-obyazatelnye-platezhi-avtovladelca.html',
  '/pages/articles/articles_pages/pochemu-byt-zhret-vremya-i-kak-ustroena-mentalnaya-nagruzka.html',
  '/pages/articles/articles_pages/kommunalka-kak-nakruchivayut-pochemu-my-platim-za-soseda-i-chto-takoe-odn.html',
  '/pages/articles/articles_pages/minimalnyj-nabor-dlya-zhizni.html',
  '/pages/articles/articles_pages/pochemu-prokrastinaciya-pobezhdaet-v-sessiyu.html',
  '/pages/articles/articles_pages/kak-podgotovitsya-k-zashchite-diploma-i-ne-posedet-za-mesyac-do.html',
  '/pages/articles/articles_pages/rabota-i-uchyoba-odnovremenno.html',
  '/pages/articles/articles_pages/kak-splanirovat-pervuyu-poezdku-za-granicu.html',
  '/pages/articles/articles_pages/kak-ne-poteryat-dengi-na-kartah-i-obmennikah-v-drugoj-strane.html',
  '/pages/articles/articles_pages/prosrochennaya-viza-i-poteryannyj-zagranpasport.html',
  '/pages/articles/articles_pages/kak-ustroen-chernyj-rynok-dokumentov.html',
  '/pages/articles/articles_pages/chto-proiskhodit-s-vashimi-dannymi-esli-telefon-ukrali.html',
  '/pages/articles/articles_pages/kvest-po-vosstanovleniyu-pasporta.html',
  '/pages/articles/articles_pages/pochemu-nas-uvolnyayut-yuridicheskie-i-psihologicheskie-prichiny.html',
  '/pages/articles/articles_pages/chto-takoe-vyhodnoe-posobie-i-kto-ego-poluchaet.html',
  '/pages/articles/articles_pages/sokrashchenie-likvidaciya-po-sobstvennomu.html',
  '/pages/articles/articles_pages/kto-dolzhen-platit-za-remont-esli-slomalas-tekhnika.html',
  '/pages/articles/articles_pages/pochemu-sobstvenniki-ne-vozvrashchayut-depozit-5-samyh-chastyh-skhem.html',
  '/pages/articles/articles_pages/chto-takoe-dogovor-najma.html',
  '/pages/articles/articles_pages/nestabilnost-na-frilanse.html',
  '/pages/articles/articles_pages/nalogi-dlya-samozanyatyh.html',
  '/pages/articles/articles_pages/frilans-vs-ofis.html',
  '/pages/articles/articles_pages/kak-ustroeno-starenie.html',
  '/pages/articles/articles_pages/posobiya-po-uhodu.html',
  '/pages/articles/articles_pages/besplatnaya-pomoshch-pensioneram.html',
  '/pages/articles/articles_pages/ipoteka.html',
  '/pages/articles/articles_pages/skrytye-raskhody-pri-pokupke-kvartiry.html',
  '/pages/articles/articles_pages/novostrojka-vs-vtorichka.html',
  '/pages/articles/articles_pages/razdelnyj-ili-obshchij-byudzhet.html',
  '/pages/articles/articles_pages/prichina-razvodov.html',
  '/pages/articles/articles_pages/oplata-dolgov-posle-rasstavaniya.html',
  '/pages/articles/articles_pages/samozanyatost-ip-fizlico.html',
  '/pages/articles/articles_pages/oshibki-nalogovoj.html',
  '/pages/articles/articles_pages/kak-rabotaet-ndfl.html',
  '/pages/articles/articles_pages/kak-ustroena-sistema-oms.html',
  '/pages/articles/articles_pages/informirovannoe-soglasie.html',
  '/pages/articles/articles_pages/platnaya-vs-besplatnaya-medicina.html',
  '/pages/articles/articles_pages/rassrochka-vs-kredit.html',
  '/pages/articles/articles_pages/kreditnaya-istoriya.html',
  '/pages/articles/articles_pages/komu-banki-odobryayut-kredity.html',

  '/pages/guides/guides.html',
  '/pages/guides/guides_pages/batteries.html',
  '/pages/guides/guides_pages/driver-license.html',
  '/pages/guides/guides_pages/kak-projti-stazhirovku-i-poluchit-offer.html',
  '/pages/guides/guides_pages/kak-probitsya-v-kreativ.html',
  '/pages/guides/guides_pages/kak-prevratit-frilans-v-postoyannyj-dohod.html',
  '/pages/guides/guides_pages/kak-prosit-obratnuyu-svyaz.html',
  '/pages/guides/guides_pages/kak-vesti-sebya-v-pervyj-mesyac-na-novoj-rabote.html',
  '/pages/guides/guides_pages/kak-projti-assessment-i-ne-vyletet-na-pervom-zhe-teste.html',
  '/pages/guides/guides_pages/kak-vesti-peregovory-s-klientom-ili-partnerom.html',
  '/pages/guides/guides_pages/kak-iskat-rabotu-kogda-u-tebya-net-opyta.html',
  '/pages/guides/guides_pages/kak-dogovoritsya-o-zarplate.html',
  '/pages/guides/guides_pages/kak-otvechat-na-vopros-rasskazhite-o-sebe.html',
  '/pages/guides/guides_pages/kak-projti-sobesedovanie-esli-tryasutsya-kolenki.html',
  '/pages/guides/guides_pages/kak-napisat-rezyume-chtoby-tebya-zametili.html',
  '/pages/guides/guides_pages/uvolnenie-po-sobstvennomu-zhelaniyu.html',
  '/pages/guides/guides_pages/chto-sprosit-na-sobesedovanii.html',
  '/pages/guides/guides_pages/pervaya-pomoshch-pri-rasprostranennyh-situaciyah.html',
  '/pages/guides/guides_pages/kak-projti-dispanserizaciyu-ot-zapisi-do-rezultatov.html',
  '/pages/guides/guides_pages/kak-ponyat-chto-u-tebya-depressiya.html',
  '/pages/guides/guides_pages/kak-perezhit-bolnichnyj-bez-poteri-deneg-i-nervov.html',
  '/pages/guides/guides_pages/kak-podgotovitsya-k-priemu-vracha-chtoby-ne-zabyt-sprosit-vazhnoe.html',
  '/pages/guides/guides_pages/kak-vyzhit-v-poliklinike.html',
  '/pages/guides/guides_pages/kak-razobratsya-v-receptah-i-ne-kupit-lishnego-v-apteke.html',
  '/pages/guides/guides_pages/kak-ne-sdohnut-ot-allergii-v-sezon.html',
  '/pages/guides/guides_pages/tajm-menedzhment-dlya-tekh-kto-nenavidit-planirovat.html',
  '/pages/guides/guides_pages/kak-najti-hobbi.html',
  '/pages/guides/guides_pages/rezhim-kogda-rabotaesh-iz-doma.html',
  '/pages/guides/guides_pages/kak-polzovatsya-lyubym-planerom-bez-fanatizma.html',
  '/pages/guides/guides_pages/kak-perezhit-rasstavanie.html',
  '/pages/guides/guides_pages/druzya-vo-vzroslom-vozraste.html',
  '/pages/guides/guides_pages/perestat-zavisat-v-telefone-pered-snom.html',
  '/pages/guides/guides_pages/recepty-vyzhivaniya.html',
  '/pages/guides/guides_pages/perestat-stesnyatsya-sebya.html',
  '/pages/guides/guides_pages/kak-vesti-byudzhet.html',
  '/pages/guides/guides_pages/kreditka-bez-procentov.html',
  '/pages/guides/guides_pages/moshenniki-v-internete.html',
  '/pages/guides/guides_pages/chitaem-vypisku-po-karte.html',
  '/pages/guides/guides_pages/kak-nachat-otkladyvat.html',
  '/pages/guides/guides_pages/pervaya-debetovaya-karta.html',
  '/pages/guides/guides_pages/oplachivaem-kommunalku-onlajn.html',
  '/pages/guides/guides_pages/bytovaya-himiya.html',
  '/pages/guides/guides_pages/zima-v-kvartire.html',
  '/pages/guides/guides_pages/sdacha-kvartiry-v-arendu.html',
  '/pages/guides/guides_pages/poluchenie-zagranpasporta.html',
  '/pages/guides/guides_pages/zamena-pasporta.html',
  '/pages/guides/guides_pages/oformlenie-inn.html',
  '/pages/guides/guides_pages/poluchenie-spravki-2-ndfl.html',
  '/pages/guides/guides_pages/oformlenie-vremennoj-registracii.html',
  '/pages/guides/guides_pages/vosstanovlenie-snils.html',
  '/pages/guides/guides_pages/dokumenty-na-nalogovyj-vychet.html',
  '/pages/guides/guides_pages/proverka-dogovora.html',
  '/pages/guides/guides_pages/byudzhet-na-pereezd-puteshestvie-ili-krupnuyu-pokupku.html',
  '/pages/guides/guides_pages/kak-poschitat-svoj-realnyj-dohod-v-chas.html',
  '/pages/guides/guides_pages/kak-vybrat-kvartiru-i-ne-pozhalet-cherez-mesyac.html',

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
    searchReact: './src/javascripts/searchReact.jsx',
    guidesReact: './src/javascripts/guidesReact.jsx',
    articlesReact: './src/javascripts/articlesReact.jsx'
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
