import React from 'react';
import { createRoot } from 'react-dom/client';
import ArticlesPage from '../pages/articles/articles.jsx';

const root = createRoot(document.getElementById('app'));
root.render(< ArticlesPage />);