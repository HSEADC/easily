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