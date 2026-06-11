import React from "react";

export function M_searchResult({ item }) {
  return (
    <a className="M_search_result" href={item.url}>
      <p className="text_l_medium">{item.title}</p>
      <p className="text_s">{item.description}</p>
    </a>
  )
}

