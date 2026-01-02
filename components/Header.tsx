import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation(['navigation', 'header']);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLinkClick = (slug?: string, href?: string) => {
    setMobileMenuOpen(false);
    setHoveredNav(null);

    if (slug) {
      navigate(`/${slug}`);
    } else if (href && href.startsWith('#')) {
      // Scroll to section on home page
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(href.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || hoveredNav
          ? 'bg-obsidian/80 backdrop-blur-xl border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
          }`}
        onMouseLeave={() => setHoveredNav(null)}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group z-50">
            <span className="font-sans font-bold text-xl md:text-2xl tracking-widest text-gold drop-shadow-lg">
              ONECATION
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full" role="navigation" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative h-full flex items-center group py-2"
                onMouseEnter={() => setHoveredNav(item.id)}
              >
                <button
                  onClick={() => handleLinkClick(item.children[0]?.slug)}
                  className={`text-xs font-bold tracking-[0.15em] transition-colors duration-300 uppercase font-sans flex flex-col items-center gap-1 cursor-pointer ${hoveredNav === item.id ? 'text-gold' : 'text-offwhite/60 hover:text-offwhite'
                    }`}
                  aria-haspopup="true"
                  aria-expanded={hoveredNav === item.id}
                >
                  {t(`${item.id}.label`)}
                  <span className={`h-[1px] bg-gold w-0 transition-all duration-300 ${hoveredNav === item.id ? 'w-full' : ''}`} />
                </button>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-2 text-xs font-bold tracking-wider text-offwhite/60 hover:text-gold transition-colors z-50"
            >
              <Globe size={14} />
              <span>{i18n.language === 'ko' ? 'EN' : 'KR'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-offwhite z-50 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {hoveredNav && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-obsidian/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl overflow-hidden hidden lg:block"
              role="menu"
            >
              <div className="max-w-7xl mx-auto px-8 py-12">
                {NAV_ITEMS.map((item) => {
                  if (item.id !== hoveredNav) return null;

                  const isVisualMenu = item.id === 'olab' || item.id === 'work';

                  return (
                    <div key={item.id} className="grid grid-cols-12 gap-12">
                      {/* Left Column */}
                      <div className="col-span-3 border-r border-white/5 pr-8">
                        <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">{t(`${item.id}.label`)}</h2>
                        <span className="text-gold text-lg font-kor font-medium mb-4 block">{t(`${item.id}.subLabel`)}</span>
                        <p className="text-offwhite/40 text-sm leading-relaxed font-kor">
                          {t(`${item.id}.description`)}
                        </p>
                      </div>

                      {/* Right Column */}
                      <div className="col-span-9">
                        {isVisualMenu ? (
                          <div className="grid grid-cols-3 gap-6">
                            {item.children.map((child, idx) => (
                              <Link
                                key={idx}
                                to={`/${child.slug}`}
                                onClick={() => setHoveredNav(null)}
                                className="group relative h-[240px] rounded-xl overflow-hidden border border-gold/30 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-lime hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] flex flex-col"
                                role="menuitem"
                              >
                                <div className="relative h-[65%] w-full overflow-hidden">
                                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                                  <img
                                    src={child.image}
                                    alt={t(`${item.id}.${child.slug}.label`)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                  />
                                  <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white/50 group-hover:text-lime group-hover:border-lime transition-colors">
                                    <ArrowUpRight size={14} />
                                  </div>
                                </div>

                                <div className="h-[35%] p-5 flex flex-col justify-center bg-obsidian/40 backdrop-blur-sm border-t border-white/5">
                                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">{t(`${item.id}.${child.slug}.label`)}</h4>
                                  <p className="text-offwhite/50 text-xs font-kor truncate">{t(`${item.id}.${child.slug}.desc`)}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                            {item.children.map((child, idx) => (
                              <Link
                                key={idx}
                                to={`/${child.slug}`}
                                onClick={() => setHoveredNav(null)}
                                className="group block p-5 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                                role="menuitem"
                              >
                                <h4 className="text-white font-bold text-base mb-1 group-hover:text-lime transition-colors flex items-center gap-2">
                                  {t(`${item.id}.${child.slug}.label`)}
                                  <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                </h4>
                                <p className="text-offwhite/40 text-sm font-kor group-hover:text-offwhite/70 transition-colors">
                                  {t(`${item.id}.${child.slug}.desc`)}
                                </p>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col pt-24 px-6 transition-all duration-500 lg:hidden overflow-y-auto ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-bold tracking-wider text-offwhite/60 hover:text-gold transition-colors p-2"
            >
              <Globe size={16} />
              <span>{i18n.language === 'ko' ? 'English' : '한국어'}</span>
            </button>
          </div>
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="border-b border-white/5 last:border-0">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={mobileExpanded === item.id}
              >
                <div>
                  <span className={`block text-2xl font-bold tracking-tight font-sans transition-colors ${mobileExpanded === item.id ? 'text-gold' : 'text-white'}`}>
                    {t(`${item.id}.label`)}
                  </span>
                  <span className="text-xs text-gold/70 font-kor mt-1 block group-hover:text-gold transition-colors">
                    {t(`${item.id}.subLabel`)}
                  </span>
                </div>
                <ChevronDown
                  className={`text-white/30 transition-transform duration-300 ${mobileExpanded === item.id ? 'rotate-180 text-gold' : ''}`}
                />
              </button>

              <AnimatePresence>
                {mobileExpanded === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white/[0.02] rounded-lg mb-4"
                  >
                    <div className="p-4 flex flex-col gap-4">
                      {item.children.map((child, idx) => (
                        <Link
                          key={idx}
                          to={`/${child.slug}`}
                          className="block p-4 bg-white/5 rounded-lg border border-transparent hover:border-lime/30 transition-all"
                        >
                          <span className="text-white font-medium text-sm block mb-1">{t(`${item.id}.${child.slug}.label`)}</span>
                          <span className="text-offwhite/40 text-xs font-kor block">{t(`${item.id}.${child.slug}.desc`)}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
