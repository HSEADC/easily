import React from "react";
import { useState } from "react";
import M_guide_card from "../../components/M_guide_card.jsx";
import { guidesData } from "./guidesData.js";

export default function GuidesPage() {
  const [activeTags, setActiveTags] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = {
    health: 'Здоровье',
    finance: 'Финансы',
    home: 'Быт',
    docs: 'Документы',
    life: 'Лайфстайл',
    career: 'Карьера'
  };

  const counts = {
    health: guidesData.filter(g => g.category === 'health').length,
    finance: guidesData.filter(g => g.category === 'finance').length,
    home: guidesData.filter(g => g.category === 'home').length,
    docs: guidesData.filter(g => g.category === 'docs').length,
    life: guidesData.filter(g => g.category === 'life').length,
    career: guidesData.filter(g => g.category === 'career').length
  };

  const filteredGuides = (activeTags.length === 6 || activeTags.length === 0)
    ? guidesData
    : guidesData.filter(guide => activeTags.includes(guide.category));

  const visibleGuides = filteredGuides.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGuides.length;

  const toggleTag = (tagId) => {
    let newActiveTags;

    if (activeTags.includes(tagId)) {
      newActiveTags = activeTags.filter(t => t !== tagId);
    } else {
      newActiveTags = [...activeTags, tagId];
    }
    if (newActiveTags.length === 6) {
      newActiveTags = [];
    }
    setActiveTags(newActiveTags);
    setVisibleCount(12);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <main className="O_main">
      <h1 className="title_h1 guides_main_page">Мы собрали пошаговые гайды на все случаи жизни</h1>

      <section className="O_guides_block">
        <div className="M_tab_group">
          {['health', 'finance', 'home', 'docs', 'life', 'career'].map(cat => (
            <div
              key={cat}
              className={`A_tab_categorie A_tab_${cat} text_l_medium ${activeTags.includes(cat) ? 'A_tab_active' : ''}`}
              id={cat}
              onClick={() => toggleTag(cat)}
            >
              {categories[cat]} {counts[cat]}
            </div>
          ))}
        </div>

        <div className="C_guides_list">
          {visibleGuides.map(guide => (
            <M_guide_card
              key={guide.id}
              title={guide.title}
              category={guide.category}
              link={guide.link}
            />
          ))}
        </div>

        {hasMore && (
          <button className="A_button accent" id="loadMore" onClick={loadMore}>
            Показать еще
          </button>
        )}
      </section>
    </main>
  );
}