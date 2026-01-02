import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdminPage } from './components/AdminPage';
import { SEOHead } from './components/common/SEOHead';

// Lazy load components for code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'));
const SubPageWrapper = React.lazy(() => import('./pages/SubPageWrapper'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-obsidian flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-lime border-t-transparent rounded-full animate-spin"></div>
      <span className="text-lime text-xs uppercase tracking-widest">Loading...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Keyboard shortcut to access admin (Alt+Shift+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && e.key === 'A') {
        navigate('/admin');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Admin page has its own layout
  if (location.pathname === '/admin') {
    return <AdminPage onExit={() => navigate('/')} />;
  }

  return (
    <div className="min-h-screen bg-obsidian text-offwhite font-sans selection:bg-lime/30 selection:text-lime">
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <SEOHead />
      <Header />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:slug" element={<SubPageWrapper />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
