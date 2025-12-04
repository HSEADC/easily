import '../stylesheets/style.css';
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownSearch = document.getElementById('dropdownSearch');
const searchBtnMobile = document.getElementById('searchBtnMobile');
const navigation = document.getElementById('navigation');


if (hamburger) {
  hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  // dropdownMenu.classList.toggle('active');
  // navigation.classList.toggle('opened');
});
}


