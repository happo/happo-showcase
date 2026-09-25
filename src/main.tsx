import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { projects, stats } from './fixtures';
import { Dashboard } from './pages/Dashboard/Dashboard';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard userName="Maya Chen" stats={stats} projects={projects} />
  </StrictMode>,
);
