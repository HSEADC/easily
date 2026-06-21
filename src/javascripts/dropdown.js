'use strict';

const menuTrigger = document.querySelectorAll('.A_menu_button');
const dropDown = document.querySelectorAll('.M_nav_items');
const icon = document.querySelectorAll('.dropdown_icon');

function closeMenu() {
  dropDown.forEach(item => {
    item.classList.remove('active');
  });
  icon.forEach(i => {
    i.classList.remove('active');
  });
}

function openMenu() {
  dropDown.forEach(item => {
    item.classList.add('active');
  });
  icon.forEach(i => {
    i.classList.add('active');
  });
}

function toggleMenu() {
  const isOpen = dropDown[0]?.classList.contains('active');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuTrigger.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
});

document.addEventListener('click', (e) => {
  const isClickOnTrigger = Array.from(menuTrigger).some(btn => btn.contains(e.target));
  const isClickOnDropdown = Array.from(dropDown).some(menu => menu.contains(e.target));

  if (!isClickOnTrigger && !isClickOnDropdown) {
    closeMenu();
  }
});