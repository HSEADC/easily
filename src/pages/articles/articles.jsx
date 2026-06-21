import React, { useState } from 'react';
import { articlesData } from './articlesData.js';

function ArticleCard({ article }) {
  const categoryNames = {
    health: 'здоровье',
    finance: 'финансы',
    home: 'быт',
    docs: 'документы',
    life: 'лайфстайл',
    career: 'карьера'
  };

  return (
    <a href={article.link} className={`W_content_card ${article.category}`}>
      <article className="M_article_card">
        <div className={`article_card_img article_${article.category} ${article.image}`}></div>
        <div className={`A_tag A_tag_${article.category} text_m`}>#{categoryNames[article.category]}</div>
        <p className="text_l_medium article_card_title">{article.title}</p>
      </article>
    </a>
  );
}

export default function ArticlesPage() {
  const [activeTags, setActiveTags] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleCollections, setVisibleCollections] = useState(3);

  const categories = {
    health: 'Здоровье',
    finance: 'Финансы',
    home: 'Быт',
    docs: 'Документы',
    life: 'Лайфстайл',
    career: 'Карьера'
  };

  const allArticles = articlesData.flatMap(collection => collection.articles);

  const counts = {
    health: allArticles.filter(a => a.category === 'health').length,
    finance: allArticles.filter(a => a.category === 'finance').length,
    home: allArticles.filter(a => a.category === 'home').length,
    docs: allArticles.filter(a => a.category === 'docs').length,
    life: allArticles.filter(a => a.category === 'life').length,
    career: allArticles.filter(a => a.category === 'career').length
  };

  const filteredArticles = (activeTags.length === 0 || activeTags.length === 6) ? allArticles : allArticles.filter(article => activeTags.includes(article.category));

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < filteredArticles.length;

  const visibleCollectionsData = articlesData.slice(0, visibleCollections);
  const hasMoreCollections = visibleCollections < articlesData.length;

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
    setVisibleCollections(3);
  };

  const loadMoreArticles = () => {
    setVisibleCount(prev => prev + 9);
  };

  const loadMoreCollections = () => {
    setVisibleCollections(prev => prev + 3);
  };

  const isFilterActive = activeTags.length > 0 && activeTags.length !== 6;

  return (
    <main className="O_main">
      <h1 className="title_h1">Полезные статьи о&nbsp;взрослой жизни</h1>

      <section className="O_articles_block">
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
      </section>

      {isFilterActive ? (
        <>
          <div className="C_filtered_articles">
            <div className="M_articles_list">
              {visibleArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
          {hasMoreArticles && (
            <button className="A_button accent" onClick={loadMoreArticles}>Показать еще</button>
          )}
        </>
      ) : (
        <>
          {visibleCollectionsData.map(collection => (
            <div key={collection.id} className="O_ArticlesCollection">
              <h4 className="title_h4 article_selection_header">{collection.title}</h4>
              <div className="M_articles_list">
                {collection.articles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          ))}
          {hasMoreCollections && (
            <button className="A_button accent" onClick={loadMoreCollections}>
              Показать еще
            </button>
          )}
        </>
      )}
    </main>
  );
}