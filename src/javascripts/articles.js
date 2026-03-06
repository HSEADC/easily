'use strict';
// import { createElement } from 'react';
import '../stylesheets/articles.css';
import '../stylesheets/style.css';
import Airtable from "airtable";
import { articlesFilter } from './articlefilter';

const dataBaseToken = 'patZz9uJed4z2DRAw.ba85865766a68a75c0637826f86227a55a503cac8fa61551b14684976e22af54'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: dataBaseToken
});
var base = Airtable.base('apppkoPTUn5uEsuIu');

let content
getArticleData().then(data => {
  content = data;
  createArticlesCards(data);
  articlesFilter();
});

function getArticleData() {
  return new Promise((resolve, reject) => {
    const content = [];

    base('articles cards').select({
      maxRecords: 50
    }).firstPage()
    .then((result) => {
      result.forEach(record => {
        content.push({
          id: record.id,
          title: record.fields['title'],
          tag: record.fields['tag'],
          URL: record.fields['URL'],
          img: record.fields['img'],
          tagname: record.fields['tagname']
        })
      })
      resolve(content);
    })
  })
}

function createArticlesCards(content) {
  content.forEach(line => {
    let { title, tag, URL, img, tagname } = line;

    const articleCardHeader = document.createElement('p');
    articleCardHeader.classList.add('a_text_m');
    articleCardHeader.innerText = title;

    const articleCardTag = document.createElement('div');
    articleCardTag.classList.add('text_s', 'a_tag');
    articleCardTag.innerText = tag;

    const articleCard = document.createElement('a');
    articleCard.classList.add('o_article_card', `${tagname}`);
    articleCard.href = URL;
    articleCard.style.background = '#DADAFB';

    articleCard.append(articleCardHeader);
    articleCard.append(articleCardTag);
    document.querySelector('.o_articles_wrapper').append(articleCard)
  });
}