import React from "react";
import { M_searchResult } from "./M_searchResult.jsx";

export function C_searchResults({ items, isVisible }) {
  if (!items.length) {
    return <p className="text_l_medium">Ничего не нашлось</p>
  }
  return (
  <div className="C_search_results" style={{display: isVisible ? 'flex' : 'none'}}>
    {items.map((item, i) => (
      <M_searchResult item={item} key={i}/>
    ))}
  </div>
  )
}