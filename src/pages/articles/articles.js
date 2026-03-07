'use strict';
import './articles.css';
import '../../stylesheets/style.css';

const tags = document.querySelectorAll('.a_tag');
const articleCards = document.querySelectorAll('.o_article_card');

initFilters();

function initFilters() {
  articlesFilter();
}

function articlesFilter() {
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('a_tag_active');
      updateVisibleCards();
    });
  });
}

function updateVisibleCards() {
  const activeTags = document.querySelectorAll('.a_tag_active');
  const taglist = [];

  activeTags.forEach(tag => {
    taglist.push(tag.id);
  });

  if(taglist.length > 0) {
      articleCards.forEach(card => {
      card.style.display = 'none';
    });

    taglist.forEach(tag => {
      articleCards.forEach(card => {
        if(card.classList.contains(tag)) {
          card.style.display = 'flex';
        }
      })
    });
  } else {
    showAllCards();
  }
}

function showAllCards() {
  articleCards.forEach(card => {
    card.style.display = 'flex';
  });
}
