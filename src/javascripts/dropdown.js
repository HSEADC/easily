'use strict';

const menuTrigger = document.querySelectorAll('.A_menu_button');
const dropDown = document.querySelectorAll('.M_nav_items');

menuTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    dropDown.forEach(item => {
      item.classList.toggle('active');
    });
  });
});