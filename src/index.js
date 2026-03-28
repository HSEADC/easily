import './stylesheets/style.css';
import './index.css';

'use strict';

// modal window //

const openModalBtn = document.querySelector('.open_modal');
const closeModal = document.querySelectorAll('.A_close_button');
const modalWindow = document.querySelector('.O_modal');
const background = document.querySelector('.O_index_body');
// const testBlock = document.querySelector('.O_question_block');
// const resultBlock = document.querySelector('.O_test_result');

openModalBtn.addEventListener('click', () => {
  modalWindow.style.display = 'flex';
  background.classList.add('modal_open');
});

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
}

// tabs //

const tabs = document.querySelectorAll('.A_button_tab');
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