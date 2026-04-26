const articles = [
  {
    title: 'Что делать с батарейками',
    description: 'гайд про быт',
    url: 'https://hseadc.github.io/easily/pages/guides/guides_pages/guide_1.html'
  },
  {
    title: 'Как получить права',
    description: 'гайд про документы',
    url: 'https://hseadc.github.io/easily/pages/guides/guides_pages/guide_2.html'
  }
];

initSearch(articles);

function initSearch(articles) {
  const input = document.querySelector('.A_input_search');

  input.addEventListener('input', () => {
    handleSearchInput(articles, input);
  });
}

function handleSearchInput (articles, input) {
  const value = input.value.toLowerCase();
  const searchResults = document.querySelector('.C_search_results');
  const results = articles.filter(article => article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value));

  if (results > 0) {
    searchResults.style.display = 'none';
  }

  if (value.length < 2) {
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
    item.classList.add('.M_search_result');
    item.href = res.url;

    const header = document.createElement('p');
    header.classList.add('text_l_medium');
    header.innerText = res.title;

    const descr = document.createElement('p');
    descr.classList.add('text_s');
    descr.innerText = res.description;

    item.appendChild(header);
    item.appendChild(descr);
    searchResults.appendChild(item);
  });
}