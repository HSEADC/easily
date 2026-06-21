import React from "react";
import { C_searchResults } from "./C_searchResults.jsx";
import { A_searchInput } from "./A_searchInput.jsx";
import { articles } from '../javascripts/searchData.js';

import { useMemo, useState } from "react";

export function W_searchContainer() {
  const [query, setQuery] = useState('');
  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return articles
    }
    return articles.filter(article =>
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.description.toLowerCase().includes(normalizedQuery)
    )
  }, [query])

  const isVisible = query.trim().length > 0;

  return (
    <div className="W_search_container">
      <A_searchInput value={query} onChange={setQuery}/>

      <C_searchResults items={filteredArticles} isVisible={isVisible}/>
    </div>
  )
}