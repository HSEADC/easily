// pages/DictionaryPage.jsx
import React, { useState, useMemo } from 'react';
import { glossaryData } from './glossaryData.js';

function GlossaryCard({ term }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const categoryNames = {
    health: 'здоровье',
    finance: 'финансы',
    home: 'быт',
    docs: 'документы',
    life: 'лайфстайл',
    career: 'карьера'
  };

  return (
    <div
      className={`W_content_card M_glossary_card ${term.category}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`card_front ${isFlipped ? 'hidden' : ''}`}>
        <div className={`glossary_card_img glossary_${term.category} ${term.image}`}></div>
        <div className="M_glossary_preview">
          <div className={`A_tag A_tag_${term.category} text_m`}>
            #{categoryNames[term.category]}
          </div>
          <p className="text_l_medium">{term.term}</p>
          <div className="A_flip_icon"></div>
        </div>
      </div>

      <div className={`card_back ${term.category} ${isFlipped ? 'visible' : ''}`}>
        <p className="text_l_medium">{term.definition}</p>
      </div>
    </div>
  );
}

export default function DictionaryPage() {
  const [activeTags, setActiveTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = {
    health: 'Здоровье',
    finance: 'Финансы',
    home: 'Быт',
    docs: 'Документы',
    life: 'Лайфстайл',
    career: 'Карьера'
  };

  const counts = {
    health: glossaryData.filter(t => t.category === 'health').length,
    finance: glossaryData.filter(t => t.category === 'finance').length,
    home: glossaryData.filter(t => t.category === 'home').length,
    docs: glossaryData.filter(t => t.category === 'docs').length,
    life: glossaryData.filter(t => t.category === 'life').length,
    career: glossaryData.filter(t => t.category === 'career').length
  };

  const filteredTerms = useMemo(() => {
    let result = glossaryData;

    if (activeTags.length > 0 && activeTags.length !== 6) {
      result = result.filter(term => activeTags.includes(term.category));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(term =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeTags, searchQuery]);

  const visibleTerms = filteredTerms.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTerms.length;

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
    setVisibleCount(9);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <main className="O_main">
      <h1 className="title_h1 dictionary_main">
        Термины взрослой жизни, которые никто не объяснил
      </h1>

      <section className="O_glossary_block">
        <div className="M_tab_group">
          {['health', 'finance', 'home', 'docs', 'life', 'career'].map(cat => (
            <div
              key={cat}
              className={`A_tab_categorie A_tab_${cat} text_l_medium ${activeTags.includes(cat) ? 'A_tab_active' : ''}`}
              id={cat}
              onClick={() => toggleTag(cat)}
            >
              {categories[cat]} ({counts[cat]})
            </div>
          ))}
        </div>

        <div className="O_glossary_collection">
          <input
            type="text"
            className="A_input A_input_search glossary_search"
            placeholder="Поиск по словам"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(9);
            }}
          />

          <div className="C_glossary_list">
            {visibleTerms.length > 0 ? (
              visibleTerms.map(term => (
                <GlossaryCard key={term.id} term={term} />
              ))
            ) : (
              <p className="no-results">Ничего не найдено</p>
            )}
          </div>
        </div>

        {hasMore && (
          <button className="A_button accent" onClick={loadMore}>
            Показать еще
          </button>
        )}
      </section>
    </main>
  );
}