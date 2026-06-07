import './guides.css';
import './guides_covers.css';

import { guidesData } from './guidesData.js';

class GuideCard {
  constructor ({ title, category, link, parent }) {
    this.title = title;
    this.category = category;
    // this.imageSrc = imageSrc;
    this.link = link;
    this.parent = parent;
  }

  getCategoryName(cat) {
    const names = {
      finance: 'финансы',
      home: 'быт',
      health: 'здоровье',
      career: 'карьера',
      docs: 'документы',
      lifestyle: 'лайфстайл'
    };
    return names[this.category];
  }

  createCard() {
    const cardWrapper = document.createElement('a');

    cardWrapper.href = this.link;
    cardWrapper.className = `W_content_card ${this.category}`;
    cardWrapper.innerHTML = `
      <article class='M_guide_card'>
        <div class="guide_card_img guide_${this.category}"></div>
        <div class='A_tag A_tag_${this.category} text_m'>#${this.getCategoryName(this.category)}</div>
        <p class='text_l_medium guide_card_title'>${this.title}</p>
      </article>
    `;
    this.parent.append(cardWrapper);
  }
}

const guidesContainer = document.querySelector('.C_guides_list');

if (guidesContainer) {
  guidesData.forEach(guide => {
    const card = new GuideCard({
      title: guide.title,
      category: guide.category,
      imageSrc: guide.imageSrc,
      link: guide.link,
      parent: guidesContainer
    });
    card.createCard();
  });
} else {
  console.error('Контейнер для карточек гайдов не найден');
}