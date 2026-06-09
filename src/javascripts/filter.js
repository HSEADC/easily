'use strict';

const tags = document.querySelectorAll(".A_tab_categorie");
const contentCards = document.querySelectorAll(".W_content_card");
const articlesHeaders = document.querySelectorAll('.article_selection_header');

filter();

function filter() {
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("A_tab_active");
      updateVisibleCards();
    });
  });
}

function updateVisibleCards() {
  const activeTags = document.querySelectorAll(".A_tab_active");
  const taglist = [];

  activeTags.forEach(tag => {
    taglist.push(tag.id);
  });

  if (taglist.length === 6) {
    articlesHeaders.forEach(header => {
      header.style.display = 'block';
    });
    contentCards.forEach(card => {
      card.style.display = "flex";
    });
    tags.forEach(tag => {
      tag.classList.remove('A_tab_active');
    });
  }

  if (taglist.length > 0) {
    articlesHeaders.forEach(header => {
      header.style.display = 'none';
    });

    contentCards.forEach(card => {
      card.style.display = "none";
    });

    taglist.forEach(tag => {
      contentCards.forEach(card => {
        if (card.classList.contains(tag)) {
          card.style.display = "flex";
        }
      });
    });
  } else {
    showAllCards();
  }
}

function showAllCards() {
  contentCards.forEach(card => {
    card.style.display = "flex";
  });
}

let currentCardCount = 0;

function getAllCards() {
  return document.querySelectorAll(".W_content_card");
}

function updateCounters() {
  const allCards = getAllCards();

  const counters = {
    health: 0,
    career: 0,
    docs: 0,
    home: 0,
    finance: 0,
    life: 0
  };

  allCards.forEach(card => {
    if (card.classList.contains('health')) counters.health++;
    if (card.classList.contains('career')) counters.career++;
    if (card.classList.contains('docs')) counters.docs++;
    if (card.classList.contains('home')) counters.home++;
    if (card.classList.contains('finance')) counters.finance++;
    if (card.classList.contains('life')) counters.life++;
  });

  document.querySelector('.A_tab_health').innerText = `Здоровье ${counters.health}`;
  document.querySelector('.A_tab_career').innerText = `Карьера ${counters.career}`;
  document.querySelector('.A_tab_docs').innerText = `Документы ${counters.docs}`;
  document.querySelector('.A_tab_home').innerText = `Быт ${counters.home}`;
  document.querySelector('.A_tab_finance').innerText = `Финансы ${counters.finance}`;
  document.querySelector('.A_tab_lifestyle').innerText = `Лайфстайл ${counters.life}`;
}

updateCounters();