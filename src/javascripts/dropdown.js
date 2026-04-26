'use strict';

const menuTrigger = document.querySelectorAll('.A_menu_button');
const dropDown = document.querySelectorAll('.M_nav_items');
const icon = document.querySelectorAll('.dropdown_icon');

menuTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    dropDown.forEach(item => {
      item.classList.toggle('active');
    });
    icon.forEach(i => {
      i.classList.toggle('active');
    })
  });
});