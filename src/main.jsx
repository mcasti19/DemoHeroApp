import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp.jsx';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <HashRouter>
      <HeroesApp />
    </HashRouter>
  </React.StrictMode>,
)

