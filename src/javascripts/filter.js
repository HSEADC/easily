'use strict';

const tags = document.querySelectorAll(".A_tab_categorie");
const contentCards = document.querySelectorAll(".W_content_card");

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
      tag.classList.remove('A_tab_active')
    });
  }

  if (taglist.length > 0) {
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