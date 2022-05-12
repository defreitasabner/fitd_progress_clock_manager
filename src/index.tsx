import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './index.css';

import ProgressClocks from './pages/ProgressClocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProgressClocks />
  </React.StrictMode>
);