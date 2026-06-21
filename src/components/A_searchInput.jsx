import React from "react";

export function A_searchInput({value, onChange}) {
  return (
    <input placeholder="поиск..."
    value={value}
    onChange={e => onChange(e.target.value)}
    className="A_input A_input_search"
  />
  )
}