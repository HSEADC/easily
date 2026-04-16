console.log('test');

initSearch();

function initSearch() {
  const articles = [
    {
      title: 'что делать с батарейками',
      description: 'гайд про быт',
      url: 'https://hseadc.github.io/easily/pages/guides/guides_pages/guide_1.html'
    },
    {
      title: 'как получить права',
      description: 'гайд про документы',
      url: 'https://hseadc.github.io/easily/pages/guides/guides_pages/guide_2.html'
    }
  ];

  const input = document.querySelector('.A_input_search');

  input.addEventListener('input', () => {
    handleSearchInput(articles, input);
  });
}

function handleSearchInput (articles, input) {
  const value = input.value.toLowerCase();
  const searchResults = document.querySelector('.C_search_results');
  if (value.lenght < 2) {
    searchResults.style.display = 'none';
  }
  const results = articles.filter(article => article.title.includes(value) || article.description.includes(value));

  if (results > 0) {
    renderSearchResults (results, searchResults, value);
  } else {
    searchResults.style.display = 'none';
  }
}

function renderSearchResults (results, searchResults, value) {
  searchResults.innerHTML = '';
  searchResults.style.display = 'flex';

  results.forEach(res => {
    const item = document.createElement('a');
    item.classList.add('.M_search_result');
    item.href = res.url;

    const header = document.createElement('h5');
    header.classList.add('title_h5');
    header.innerText = res.title;

    const descr = document.createElement('h5');
    descr.classList.add('title_h5');
    descr.innerText = res.desciption;

    item.appendChild(header);
    item.appendChild(descr);
    searchResults.appendChild(item);
  });

}