import React from "react"

export default function M_guide_card({title, category, link}) {
  const categories = {
    health: 'здоровье',
    finance: 'финансы',
    home: 'быт',
    docs: 'документы',
    life: 'лайфстайл',
    career: 'карьера'
  }

  return (
    <a href={link} className={`W_content_card ${category}`}>
      <article className="M_guide_card">
        <div className={`guide_card_img guide_${category}`}></div>
        <div className={`A_tag A_tag_${category} text_m`}>
          #{categories[category]}
        </div>
        <p className="text_l_medium guide_card_title">{title}</p>
      </article>
    </a>
  )
}