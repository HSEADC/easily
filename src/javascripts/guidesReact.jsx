import React from 'react';
import { createRoot } from 'react-dom/client';
import GuidesPage from '../pages/guides/guides.jsx';

const root = createRoot(document.getElementById('app'));
root.render(< GuidesPage />);