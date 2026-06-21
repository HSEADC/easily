import React from 'react';
import { createRoot } from 'react-dom/client';
import GlossaryPage from '../pages/dictionary/dictionary.jsx';

const root = createRoot(document.getElementById('app'));
root.render(< GlossaryPage />);