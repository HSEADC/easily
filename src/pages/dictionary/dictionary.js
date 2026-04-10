import '../../stylesheets/style.css';
import './dictionary.css';
import './covers.css';

'use strict';

const cards = document.querySelectorAll('.M_glossary_card');

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    card.classList.toggle('active')
  })
});