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
  articlesHeaders.forEach(header => {
    header.style.display = 'block';
  });
}

let healthCounter = document.querySelectorAll('.W_content_card.health').length;
let careerCounter = document.querySelectorAll('.W_content_card.career').length;
let documentsCounter = document.querySelectorAll('.W_content_card.docs').length;
let choresCounter = document.querySelectorAll('.W_content_card.home').length;
let financeCounter = document.querySelectorAll('.W_content_card.finance').length;
let lifestyleCounter = document.querySelectorAll('.W_content_card.life').length;

document.querySelector('.A_tab_health').innerText = `Здоровье ${healthCounter}`;
document.querySelector('.A_tab_career').innerText = `Карьера ${careerCounter}`;
document.querySelector('.A_tab_documents').innerText = `Документы ${documentsCounter}`;
document.querySelector('.A_tab_chores').innerText = `Быт ${choresCounter}`;
document.querySelector('.A_tab_finance').innerText = `Финансы ${financeCounter}`;
document.querySelector('.A_tab_lifestyle').innerText = `Лайфстайл ${lifestyleCounter}`;