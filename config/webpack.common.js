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

  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',
  '/pages/articles/articles_pages/page.html',



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
