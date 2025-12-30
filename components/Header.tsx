import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate?: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, slug?: string, href?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (slug && onNavigate) {
      onNavigate(slug);
    } else if (href && !href.startsWith('#') && onNavigate) {
      // Fallback if href is used as a slug
       onNavigate(href);
    } else if (href && href.startsWith('#')) {
       // Scroll to section logic if needed for main page
       const el = document.getElementById(href.replace('#', ''));
       if (el) {
          onNavigate?.('home'); // Go home first
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
       } else {
          onNavigate?.('home');
       }
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || hoveredNav
            ? 'bg-obsidian/80 backdrop-blur-xl border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
        onMouseLeave={() => setHoveredNav(null)}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="relative group z-50">
            <span className="font-sans font-bold text-xl md:text-2xl tracking-widest text-gold drop-shadow-lg">
              ONECATION
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="relative h-full flex items-center group py-2"
                onMouseEnter={() => setHoveredNav(item.id)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.children[0]?.slug)}
                  className={`text-xs font-bold tracking-[0.15em] transition-colors duration-300 uppercase font-sans flex flex-col items-center gap-1 cursor-pointer ${
                    hoveredNav === item.id ? 'text-gold' : 'text-offwhite/60 hover:text-offwhite'
                  }`}
                >
                  {item.label}
                  <span className={`h-[1px] bg-gold w-0 transition-all duration-300 ${hoveredNav === item.id ? 'w-full' : ''}`} />
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-offwhite z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
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
            >
              <div className="max-w-7xl mx-auto px-8 py-12">
                {NAV_ITEMS.map((item) => {
                  if (item.id !== hoveredNav) return null;
                  
                  // Strategy: Visual Menu for O-LAB & WORK (Type B), List for others (Type A)
                  const isVisualMenu = item.id === 'olab' || item.id === 'work';

                  return (
                    <div key={item.id} className="grid grid-cols-12 gap-12">
                      {/* Left Column: Main Title & Description */}
                      <div className="col-span-3 border-r border-white/5 pr-8">
                        <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">{item.label}</h2>
                        {/* Modified sub-label color to Champagne Gold as requested */}
                        <span className="text-gold text-lg font-kor font-medium mb-4 block">{item.subLabel}</span>
                        <p className="text-offwhite/40 text-sm leading-relaxed font-kor">
                          원케이션만의 독보적인 {item.subLabel} 프로세스를 통해 <br/>
                          최상의 결과를 경험하세요.
                        </p>
                      </div>

                      {/* Right Column: Dynamic Layout based on Strategy */}
                      <div className="col-span-9">
                         {isVisualMenu ? (
                           // Type B: Visual Bento Cards
                           <div className="grid grid-cols-3 gap-6">
                             {item.children.map((child, idx) => (
                               <a 
                                 key={idx}
                                 href="#"
                                 onClick={(e) => handleLinkClick(e, child.slug)}
                                 className="group relative h-[240px] rounded-xl overflow-hidden border border-gold/30 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-lime hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] flex flex-col"
                               >
                                 {/* Image Thumbnail Area */}
                                 <div className="relative h-[65%] w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                                    <img 
                                      src={child.image} 
                                      alt={child.label} 
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    {/* Top Icon Overlay */}
                                    <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white/50 group-hover:text-lime group-hover:border-lime transition-colors">
                                       <ArrowUpRight size={14} />
                                    </div>
                                 </div>
                                 
                                 {/* Text Content Area */}
                                 <div className="h-[35%] p-5 flex flex-col justify-center bg-obsidian/40 backdrop-blur-sm border-t border-white/5">
                                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">{child.label}</h4>
                                    <p className="text-offwhite/50 text-xs font-kor truncate">{child.desc}</p>
                                 </div>
                               </a>
                             ))}
                           </div>
                         ) : (
                           // Type A: Text List (Existing)
                           <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                             {item.children.map((child, idx) => (
                               <a 
                                 key={idx} 
                                 href="#"
                                 onClick={(e) => handleLinkClick(e, child.slug)}
                                 className="group block p-5 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                               >
                                 <h4 className="text-white font-bold text-base mb-1 group-hover:text-lime transition-colors flex items-center gap-2">
                                   {child.label}
                                   <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                 </h4>
                                 <p className="text-offwhite/40 text-sm font-kor group-hover:text-offwhite/70 transition-colors">
                                   {child.desc}
                                 </p>
                               </a>
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
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col pt-24 px-6 transition-all duration-500 lg:hidden overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2 pb-10">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="border-b border-white/5 last:border-0">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <div>
                  <span className={`block text-2xl font-bold tracking-tight font-sans transition-colors ${mobileExpanded === item.id ? 'text-gold' : 'text-white'}`}>
                    {item.label}
                  </span>
                  <span className="text-xs text-gold/70 font-kor mt-1 block group-hover:text-gold transition-colors">
                    {item.subLabel}
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
                        <a 
                          key={idx} 
                          href="#" 
                          onClick={(e) => handleLinkClick(e, child.slug)}
                          className="block p-4 bg-white/5 rounded-lg border border-transparent hover:border-lime/30 transition-all"
                        >
                          <span className="text-white font-medium text-sm block mb-1">{child.label}</span>
                          <span className="text-offwhite/40 text-xs font-kor block">{child.desc}</span>
                        </a>
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