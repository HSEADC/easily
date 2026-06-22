import { articles } from './searchData.js';

const searchIcon = document.querySelector('.A_search_icon');
const searchModal = document.querySelector('.M_mobile_search');
const closeIcon = searchModal.querySelector('.A_close_button');
const input = searchModal.querySelector('.A_input');

searchIcon.addEventListener('click', () => {
  searchModal.classList.toggle('active');
});

closeIcon.addEventListener('click', closeSearchModal);

function closeSearchModal() {
  searchModal.classList.remove('active');
}

initSearch(articles, input);

function initSearch(articles, input) {
  input.addEventListener('input', () => {
    handleSearchInput(articles, input);
  });
}

function handleSearchInput (articles, input) {
  const value = input.value.toLowerCase();
  const searchResults = searchModal.querySelector('.C_search_results');
   const results = articles.filter(article => article.title.includes(value) || article.description.includes(value));

  if (results.length > 0) {
      searchResults.style.display = 'none';
  }
   if (value.length < 3) {
    searchResults.style.display = 'none';
  } else {
    renderSearchResults(results, searchResults, value);
  }
}
function renderSearchResults(results, searchResults, value) {
  searchResults.innerHTML = '';
  searchResults.style.display = 'flex';

  results.forEach(res => {
    const item = document.createElement('a');
    item.classList.add('M_search_result');
    item.href = res.url;

    const header = document.createElement('h5');
    header.classList.add('title_h5');
    header.innerText = res.title;
    const descr = document.createElement('p');
    descr.classList.add('text_s');
    descr.innerText = res.description;

    item.appendChild(header);
    item.appendChild(descr);
    searchResults.appendChild(item);
  });
}