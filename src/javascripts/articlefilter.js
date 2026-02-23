'use strict';

function articlesFilter() {
  const docTag = document.getElementById('docs');
  const finTag = document.getElementById('finance');
  const healTag = document.getElementById('health');
  const lifeTag = document.getElementById('life');
  const carTag = document.getElementById('career');
  const homeTag = document.getElementById('home');

  const articles = document.querySelector('.o_articles_wrapper');
  const categories = ['docs', 'finance', 'health', 'life', 'career', 'home'];
  const elements = {};

  categories.forEach(cat => {
    elements[cat] = articles.querySelectorAll('.' + cat);
  });

  const activecats = [];

  function toggleCat(category, btn) {
    if (activecats.includes(category)) {
      btn.classList.remove('a_tag_active');
      const index = activecats.indexOf(category);
      activecats.splice(index, 1);
    } else {
      activecats.push(category);
      btn.classList.add('a_tag_active');
    }
    updateFilter(categories, activecats);
  }

  function updateFilter(cats, activecats) {
    cats.forEach(cat => {
      elements[cat].forEach(elem => {
        elem.style.display = activecats.includes(cat) ? 'flex' : 'none';
      })
    })
  }

  docTag.addEventListener('click', () => toggleCat('docs', docTag));
  finTag.addEventListener('click', () => toggleCat('finance', finTag));
  healTag.addEventListener('click', () => toggleCat('health', healTag));
  lifeTag.addEventListener('click', () => toggleCat('life', lifeTag));
  carTag.addEventListener('click', () => toggleCat('career', carTag));
  homeTag.addEventListener('click', () => toggleCat('home', homeTag));
}

export {articlesFilter};