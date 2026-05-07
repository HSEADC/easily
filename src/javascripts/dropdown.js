const menuTrigger = document.querySelector('.A_menu_button'); // если кнопка одна
const dropDown = document.querySelector('.M_nav_items');
const icon = document.querySelector('.dropdown_icon');

function closeMenu() {
  dropDown?.classList.remove('active');
  icon?.classList.remove('active');
}

menuTrigger?.addEventListener('click', (e) => {
  e.stopPropagation();
  dropDown?.classList.toggle('active');
  icon?.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!menuTrigger?.contains(e.target) && !dropDown?.contains(e.target)) {
    closeMenu();
  }
});