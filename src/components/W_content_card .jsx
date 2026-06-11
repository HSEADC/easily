import React from "react";

export function W_content_card({ item }) {
  return (
    <a className="W_content_card {}" href={item.url}>
      <p className="text_l_medium">{item.title}</p>
      <p className="text_s">{item.description}</p>
    </a>
  )
}