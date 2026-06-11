import './guides.css';
import './guides_covers.css';
import { guidesData } from './guidesData.js';

const loadMoreBtn = document.getElementById('loadMore');

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

let currentCount = 12;
const step = 12;
let allCards = [];

const guidesContainer = document.querySelector('.C_guides_list');

function renderGuides(step) {
  const guidesToShow = guidesData.slice(0, step);

  guidesContainer.innerHTML = '';

  guidesToShow.forEach(guide => {
    const card = new GuideCard({
      title: guide.title,
      category: guide.category,
      // imageSrc: guide.imageSrc,
      link: guide.link,
      parent: guidesContainer
    });
    card.createCard();
  });

  if (step >= guidesData.length && loadMoreBtn) {
    loadMoreBtn.style.display = 'none';
  }
}

function loadMore() {
  currentCount += step;
  if (currentCount > guidesData.length) {
    currentCount = guidesData.length;
  }
  renderGuides(currentCount);
}

if (guidesContainer) {
  renderGuides(currentCount);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMore);
  }
} else {
  console.error('Контейнер .C_guides_list не найден');
}