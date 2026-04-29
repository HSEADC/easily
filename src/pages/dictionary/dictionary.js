import '../../stylesheets/style.css';
import './dictionary.css';
import './covers.css';

'use strict';

const cards = document.querySelectorAll('.W_content_card');

cards.forEach(card => {
  card.addEventListener('click', function(e) {
    e.preventDefault();
    card.classList.toggle('flipped');
  })
});

// glossary search

const terms = [
  {
    title: 'ОМС',
    id: 'oms'
  },
  {
    title: 'Выгорание',
    id: 'burnout'
  },
  {
    title: 'СНИЛС',
    id: 'snils'
  },
  {
    title: 'Залог',
    id: 'zalog'
  },
  {
    title: 'МРОТ',
    id: 'mrot'
  },
  {
    title: 'Бюджет',
    id: 'budget'
  },
];

search();

function search() {
  const input = document.querySelector('.glossary_search');

  input.addEventListener('input', () => {
    handleSearchInput(terms, input);
  });
}

function handleSearchInput (terms, input) {
  const value = input.value.toLowerCase();
  const glossaryCards = document.querySelector('.C_glossary_list');
  const results = terms.filter(term => term.title.toLowerCase().includes(value));

  if (results > 0) {
    glossaryCards.children.style.display = 'none';
  }
  if (value.length >= 2) {
    renderSearchResults(results, value);
  }
}

function renderSearchResults(results, value) {
  results.forEach(res => {
    const card = document.getElementById(`${res.id}`);
    card.style.display = 'flex';
  });
}
