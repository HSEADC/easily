import './index.css';

'use strict';

const swiper = new Swiper('.swiper', {
  loop: false,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// modal window //

const openModalBtn = document.querySelectorAll('.open_modal');
const closeModal = document.querySelectorAll('.A_close_button');
const modalWindow = document.querySelector('.O_modal');
const background = document.querySelector('.O_index_body');

openModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    background.classList.add('modal_open');
    document.body.style.overflow = 'hidden';
  });
})

document.addEventListener('keydown', (e) => {
  if(e.code === 'Escape') {
    closeModalWindow();
  }
});

closeModal.forEach(btn => {
  btn.addEventListener('click', () => {
  closeModalWindow();
});
});

function closeModalWindow() {
  modalWindow.style.display = 'none';
  background.classList.remove('modal_open');
  const resetTestBtn = document.querySelector('.reset_test');
  if (resetTestBtn) {
    resetTestBtn.click();
  }
  document.body.style.overflow = '';
}

// tabs //

const tabs = document.querySelectorAll('.A_button.tab');
const tabsContent = document.querySelectorAll('.tab_content');

if (tabs.length && tabsContent.length) {
  tabsContent.forEach((content, index) => {
    if (index !== 0) {
      content.style.display = 'none';
    }
  });

  tabs[0].classList.add('active');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabsContent.forEach(content => {
        content.style.display = 'none';
      });
      tabs.forEach(t => t.classList.remove('active'));
      tabsContent[index].style.display = 'flex';
      tab.classList.add('active');
    });
  });
}