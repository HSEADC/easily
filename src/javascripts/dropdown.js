'use strict';

const menuTrigger = document.querySelector('.A_menu_button');
const dropDown = document.querySelector('.M_nav_items');

menuTrigger.addEventListener('click', () => {
  dropDown.classList.toggle('active');
});