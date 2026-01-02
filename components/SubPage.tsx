
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SubPageContent, LayoutType, ProcessStep } from '../types';
import { NAV_ITEMS, SHOWCASE_ITEMS, INSIGHTS } from '../constants';
import { Button } from './ui/Button';
import { 
  ArrowLeft, 
  Quote, 
  ArrowDown, 
  ArrowUpRight, 
  X, 
  Calendar, 
  User, 
  Layers, 
  Globe, 
  Plus, 
  Minus, 
  Send, 
  CheckCircle, 
  Zap, 
  Code, 
  Box, 
  GitGraph, 
  Search, 
  Network,
  Share2,
  Bookmark,
  ChevronRight,
  ChevronDown,
  Clock,
  BookOpen,
  TrendingUp,
  BarChart,
  Target,
  Mail,
  MapPin,
  Phone,
  MessageSquare
} from 'lucide-react';
import { GenAIImage } from './GenAIImage';

interface SubPageProps {
  slug: string;
  content: SubPageContent;
  onBack: () => void;
  onNavigate?: (slug: string) => void;
}

export interface InsightDetailProps {
  post: any;
  onClose: () => void;
}

const BackButton: React.FC<{ onClick: () => void; className?: string }> = ({ onClick, className = '' }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-2 text-white/50 hover:text-lime uppercase tracking-widest text-xs transition-colors z-20 ${className}`}
  >
    <ArrowLeft size={16} /> Back
  </button>
);

// --- Component: Context Navigation (Sidebar/TopBar) ---
const ContextNavigation: React.FC<{ currentSlug: string; onNavigate?: (slug: string) => void }> = ({ currentSlug, onNavigate }) => {
  // Find the parent category and siblings
  const context = useMemo(() => {
    for (const item of NAV_ITEMS) {
      const found = item.children.find(child => child.slug === currentSlug);
      if (found) {
        return {
          category: item.label,
          siblings: item.children
        };
      }
    }
    return null;
  }, [currentSlug]);

  if (!context || !onNavigate) return null;

  return (
    <>
      {/* Universal Top Bar Navigation (Mobile & Desktop) */}
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-obsidian/80 backdrop-blur-md border-b border-white/5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
         <div className="flex items-center px-6 h-12 gap-6 min-w-max">
            <span className="text-gold text-[10px] font-bold tracking-widest uppercase border-r border-white/10 pr-6 mr-2 sticky left-0 bg-[#080808]/95 backdrop-blur-md h-full flex items-center z-10 shadow-[5px_0_15px_-5px_rgba(0,0,0,0.8)]">
               {context.category}
            </span>
            {context.siblings.map((child, idx) => {
               const isActive = child.slug === currentSlug;
               return (
                 <button
                   key={idx}
                   onClick={() => onNavigate(child.slug!)}
                   className={`text-[11px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${isActive ? 'text-lime font-bold' : 'text-white/40 hover:text-white'}`}
                 >
                   {isActive && <div className="w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_5px_#ccff00]" />}
                   {child.label}
                 </button>
               )
            })}
         </div>
      </div>
    </>
  );
};

// --- Custom Select Dropdown Component ---
interface CustomSelectProps {
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  accentColor?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder = "선택해주세요", value, onChange, accentColor = 'lime' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const borderColor = isOpen 
    ? (accentColor === 'gold' ? 'border-gold' : 'border-lime') 
    : 'border-white/10';
    
  const activeOptionClass = accentColor === 'gold' ? 'bg-gold/10 text-gold' : 'bg-lime/10 text-lime';

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-black/20 border ${borderColor} rounded-xl p-4 text-left flex justify-between items-center transition-colors duration-300 text-white focus:outline-none`}
      >
        <span className={value ? "text-white font-medium" : "text-white/30"}>{value || placeholder}</span>
        <ChevronDown size={18} className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 py-2 max-h-60 overflow-y-auto custom-scrollbar"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-white/5 ${value === option ? activeOptionClass : 'text-white/70'}`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Component: Reusable Contact Form Section ---
const ContactFormSection: React.FC<{ accentColor?: string }> = ({ accentColor = 'lime' }) => {
  const [service, setService] = useState('');
  
  const serviceOptions = [
    'Business Planning', 'Gov. Strategy', 'Tech Consulting',
    'Brand Experience', 'Web Engineering', 'App & Platform',
    'SEO & Data', 'Performance Marketing', 'Viral & Content',
    'Other'
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-${accentColor}`}>Begin Your Journey</span>
            <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Start Project</h3>
            <p className="text-offwhite/50 mb-12 font-kor leading-relaxed">
              위대한 여정은 작은 문의에서 시작됩니다.<br/> 
              프로젝트에 대해 알려주시면 가장 적합한 전문가가 답변드립니다.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Email Us</p>
                  <a href="mailto:yeomjw0907@onecation.co.kr" className="block text-offwhite/60 hover:text-white transition-colors">yeomjw0907@onecation.co.kr</a>
                  <a href="mailto:hello@onecation.com" className="block text-offwhite/60 hover:text-white transition-colors">hello@onecation.com</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Call Us</p>
                  <a href="tel:01063334649" className="block text-offwhite/60 hover:text-white transition-colors">010-6333-4649</a>
                  <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Mon-Fri, 10am - 7pm</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Visit Us</p>
                  <p className="text-offwhite/60 font-kor leading-relaxed">
                    인천광역시 연수구 송도2동 인천타워대로 99<br/>애니오션빌딩 11-12층
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 relative">
            <h4 className="text-xl font-bold text-white mb-8">Send a Message</h4>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Name</label>
                  <input type="text" className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors`} placeholder="홍길동 / 기업명" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Contact</label>
                  <input type="text" className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors`} placeholder="이메일 또는 전화번호" />
                </div>
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Service Interest</label>
                <CustomSelect 
                  options={serviceOptions} 
                  value={service} 
                  onChange={setService} 
                  placeholder="관심 서비스를 선택하세요"
                  accentColor={accentColor}
                />
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Project Details</label>
                <textarea rows={4} className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors resize-none leading-relaxed`} placeholder="프로젝트 예산, 일정, 주요 기능 등 상세 내용을 입력해주세요." />
              </div>
              
              <Button variant="primary" className={`w-full bg-${accentColor} text-black border-none py-4 text-lg`} withArrow>문의하기</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component: Related Works (New Footer Section) ---
interface RelatedWorksProps {
  currentSlug: string;
  onSelectProject: (project: any) => void;
}

const RelatedWorks: React.FC<RelatedWorksProps> = ({ currentSlug, onSelectProject }) => {
  const relatedProjects = useMemo(() => {
    // 1. Filter projects that have the current slug in their relatedSlugs list
    let filtered = SHOWCASE_ITEMS.filter(item => 
      item.relatedSlugs?.includes(currentSlug)
    );

    // 2. If fewer than 2 results, fill with random items to maintain layout balance
    if (filtered.length < 2) {
      const remaining = SHOWCASE_ITEMS.filter(item => !filtered.includes(item));
      // Shuffle simply by slicing for demo (or use random sort)
      const fill = remaining.slice(0, 3 - filtered.length);
      filtered = [...filtered, ...fill];
    }

    return filtered.slice(0, 3); // Limit to 3 items
  }, [currentSlug]);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="relative z-10 py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12 flex items-end justify-between">
           <div>
             <span className="text-lime text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Related Works</span>
             <h3 className="text-3xl font-bold text-white">Proven Results</h3>
           </div>
           <p className="text-offwhite/40 text-xs font-kor hidden md:block">
             해당 서비스와 관련된 성공 사례를 확인해보세요.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelectProject({
                ...project,
                // Map showcase item fields to DetailView format if needed
                client: project.title,
                category: project.subtitle
              })}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-white/5 bg-white/5">
                <GenAIImage 
                  prompt={project.image} 
                  alt={project.title} 
                  className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  aspectRatio="4:3"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 text-white/50 group-hover:text-lime group-hover:border-lime transition-all">
                   <ArrowUpRight size={16} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">{project.title}</h4>
                <p className="text-offwhite/40 text-xs uppercase tracking-wider">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: 120 Alliance Visualization ---
const AllianceVisual = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Central Core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a701f] shadow-[0_0_60px_rgba(212,175,55,0.4)] flex items-center justify-center"
      >
        <span className="text-obsidian font-bold text-xs tracking-widest uppercase">Core</span>
      </motion.div>

      {/* Orbiting Particles */}
      {[...Array(6)].map((_, orbitIndex) => (
        <motion.div
          key={orbitIndex}
          initial={{ rotate: 0 }}
          animate={{ rotate: orbitIndex % 2 === 0 ? 360 : -360 }}
          transition={{ 
            duration: 20 + orbitIndex * 10, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute rounded-full border border-white/5"
          style={{
            width: `${300 + orbitIndex * 100}px`,
            height: `${300 + orbitIndex * 100}px`,
          }}
        >
          {/* Particles on this orbit */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 120}deg) translate(${150 + orbitIndex * 50}px) rotate(-${i * 120}deg)`
              }}
            />
          ))}
        </motion.div>
      ))}
      
      {/* 120 Small Dots background */}
      <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
             <div 
               key={i}
               className="absolute bg-gold/20 w-1 h-1 rounded-full"
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 opacity: Math.random() * 0.5 + 0.1,
                 animation: `pulse ${Math.random() * 2 + 1}s infinite`
               }}
             />
          ))}
      </div>
      
      <div className="absolute bottom-10 text-center z-20">
         <p className="text-gold text-sm font-sans tracking-[0.3em] uppercase">One Core, 120 Satellites</p>
         <p className="text-white/40 text-xs mt-2">Perfectly Synchronized</p>
      </div>
    </div>
  );
};


// --- Layout: Manifesto (Cinematic / Art) ---
const ManifestoLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* Cinematic Hero */}
      <div className="bg-grain fixed inset-0 z-0 pointer-events-none"></div>
      
      <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center z-10 overflow-hidden">
         <BackButton onClick={onBack} className="absolute top-24 left-8 md:left-12 mix-blend-difference" />
         
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
         >
           <h1 className="text-[15vw] md:text-[12rem] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/50 opacity-80 mb-8">
             Manifesto
           </h1>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="max-w-2xl mx-auto"
         >
           <p className="font-serif text-white text-lg md:text-2xl leading-relaxed italic">
             "{content.description}"
           </p>
           <div className="w-20 h-[1px] bg-gold mx-auto mt-8"></div>
         </motion.div>
      </section>

      {/* 120 Alliance Visualization */}
      <section className="relative z-10 py-24 border-t border-white/5">
         <AllianceVisual />
      </section>

      {/* Features - Zigzag Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="flex flex-col gap-32">
           {content.features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Text */}
                 <motion.div 
                   initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="flex-1"
                 >
                   <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                     0{idx + 1}
                   </span>
                   <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                     {feature.title}
                   </h3>
                   <p className="text-offwhite/60 font-serif text-lg leading-relaxed">
                     {feature.desc}
                   </p>
                 </motion.div>

                 {/* Image (Circuit Board / Liquid Gold) */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="flex-1 w-full"
                 >
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-gold/20">
                       
                       {/* Pulse Effect */}
                       <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-lime/50 z-20 shadow-[0_0_10px_#ccff00] animate-pulse"></div>
                       
                       <div className="w-full h-full grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-700">
                          <GenAIImage 
                            prompt={content.imageGrid[idx % content.imageGrid.length] || content.heroImage} 
                            alt={feature.title} 
                            className="w-full h-full"
                            aspectRatio="4:3"
                          />
                       </div>
                       
                       {/* Tech Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>
                       <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <Zap size={14} className="text-lime" />
                          <span className="text-[10px] text-lime font-mono tracking-widest uppercase">System Active</span>
                       </div>
                    </div>
                 </motion.div>
              </div>
           ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 text-center border-t border-white/5 bg-gradient-to-b from-obsidian to-black">
         <h2 className="text-4xl font-bold text-white mb-12">Ready to Synchronize?</h2>
         <button 
           onClick={() => window.location.href='mailto:hello@onecation.com'}
           className="px-12 py-5 bg-lime text-black font-bold text-xl tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)]"
         >
           Contact Us
         </button>
      </section>
    </div>
  );
};

// --- Layout: The 120 Alliance (Network / Bento) ---
const AllianceLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero: Golden Neural Network */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
         
         <div className="absolute inset-0 z-0 opacity-40 md:opacity-60">
            <GenAIImage prompt={content.heroImage} alt="Neural Network" className="w-full h-full" aspectRatio="16:9" />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
         </div>
         
         <div className="relative z-10 text-center max-w-4xl px-6">
            <BackButton onClick={onBack} className="absolute top-[-100px] left-0" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-6 block glow-lime">{content.subtitle}</span>
               <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold via-white to-gold">
                 {content.title}
               </h1>
               <p className="text-lg md:text-xl text-offwhite/70 font-kor font-light leading-relaxed">
                 {content.description}
               </p>
            </motion.div>
         </div>
      </section>

      {/* Expertise Grid (Bento) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Core Brain */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="col-span-1 md:col-span-2 bg-white/5 border border-gold/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-lime/50 transition-colors duration-500"
            >
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-lime mb-6 border border-white/10 group-hover:bg-lime group-hover:text-black transition-colors">
                     <Layers size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.features[0].title}</h3>
                  <p className="text-offwhite/60 font-kor text-sm md:text-base">{content.features[0].desc}</p>
               </div>
               {/* Decorative Background */}
               <div className="absolute right-0 bottom-0 w-48 md:w-64 h-48 md:h-64 opacity-10 md:opacity-20 group-hover:opacity-40 transition-opacity">
                  <GenAIImage prompt={content.imageGrid[0]} alt="3D Icon" className="w-full h-full" aspectRatio="1:1" />
               </div>
            </motion.div>

            {/* Card 2: Specialist Node */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-gold mb-6 border border-white/10">
                     <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{content.features[1].title}</h3>
                  <p className="text-offwhite/60 font-kor text-sm">{content.features[1].desc}</p>
               </div>
               <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 md:w-40 md:h-40 opacity-10 md:opacity-20">
                  <GenAIImage prompt={content.imageGrid[1]} alt="3D Icon" className="w-full h-full" aspectRatio="1:1" />
               </div>
            </motion.div>

            {/* Card 3: Hyper Connection */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-black/50 rounded-2xl flex items-center justify-center text-gold mb-6 border border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                     <Network size={26} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{content.features[2].title}</h3>
                  <p className="text-offwhite/60 font-kor text-sm md:text-base leading-relaxed">{content.features[2].desc}</p>
               </div>
                <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 md:w-40 md:h-40 opacity-10 md:opacity-20">
                  <GenAIImage prompt={content.imageGrid[2]} alt="3D Icon" className="w-full h-full" aspectRatio="1:1" />
               </div>
            </motion.div>

             {/* Card 4: Stats (Optimized for Mobile) */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="col-span-1 md:col-span-2 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-6"
            >
               <div className="text-center sm:text-left">
                  <h4 className="text-5xl md:text-6xl font-bold text-white mb-1.5 tracking-tighter">120+</h4>
                  <p className="text-lime uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold whitespace-nowrap">Active Experts</p>
               </div>
               <div className="hidden sm:block h-16 w-[1px] bg-white/10"></div>
               <div className="text-center sm:text-left">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-2xl md:text-3xl font-bold text-white/50 leading-none">Top</span>
                    <h4 className="text-5xl md:text-6xl font-bold text-white mb-1.5 tracking-tighter">1%</h4>
                  </div>
                  <p className="text-lime uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold whitespace-nowrap">Talent Pool</p>
               </div>
               <div className="hidden sm:block h-16 w-[1px] bg-white/10"></div>
               <div className="text-center sm:text-left">
                  <h4 className="text-5xl md:text-6xl font-bold text-white mb-1.5 tracking-tighter">0%</h4>
                  <p className="text-lime uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold whitespace-nowrap">Overhead</p>
               </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

// --- Layout: Process (Sync System / Tech) ---
const ProcessLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero: Interlocking Gold Rings */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
         
         <div className="absolute inset-0 z-0">
           <div className="w-full h-full opacity-60">
             <GenAIImage prompt={content.heroImage} alt="Process Hero" className="w-full h-full" aspectRatio="16:9" />
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>
         </div>

         <div className="relative z-10 max-w-5xl px-6">
            <BackButton onClick={onBack} className="absolute top-[-100px] left-8" />
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-white"
            >
              The <span className="text-gold">Sync</span> System
            </motion.h1>
            <p className="text-xl text-offwhite/60 font-kor max-w-2xl mx-auto">
              {content.description}
            </p>
         </div>
      </section>

      {/* Tech Visual Steps */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 space-y-32">
         {content.features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
               <motion.div 
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex-1"
               >
                 <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-lime text-lime font-mono font-bold text-xl">
                      0{idx + 1}
                    </span>
                    <span className="h-[1px] flex-grow bg-white/10"></span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{feature.title}</h2>
                 <p className="text-offwhite/60 text-lg font-kor leading-relaxed mb-8">{feature.desc}</p>
                 
                 <div className="inline-flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-widest border border-gold/30 px-4 py-2 rounded bg-gold/5">
                    <Zap size={12} /> System Status: Online
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="flex-1 relative aspect-square md:aspect-[4/3] w-full"
               >
                 {/* Visual Container */}
                 <div className="absolute inset-0 border border-white/10 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                    
                    <div className="w-full h-full opacity-80 mix-blend-screen">
                      <GenAIImage 
                        prompt={content.imageGrid[idx % content.imageGrid.length]} 
                        alt={feature.title} 
                        className="w-full h-full"
                        aspectRatio="4:3"
                      />
                    </div>
                    
                    {/* HUD Overlay */}
                    <div className="absolute inset-0 border border-white/5 m-4 rounded-xl pointer-events-none">
                       <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-lime"></div>
                       <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-lime"></div>
                       <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-lime"></div>
                       <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-lime"></div>
                    </div>
                 </div>
               </motion.div>
            </div>
         ))}
      </section>
    </div>
  );
};

// --- Layout: Creation (Brand, Web, App) ---
const CreationLayout: React.FC<SubPageProps> = ({ content, onBack, slug }) => {
  // Determine style based on slug
  const isBrand = slug === 'brand-experience';
  const accentColor = isBrand ? 'gold' : 'lime';
  const textAccent = isBrand ? 'text-gold' : 'text-lime';

  return (
    <div className="bg-obsidian min-h-screen text-white selection:bg-white/20">
       {/* Hero Section */}
       <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
             <GenAIImage prompt={content.heroImage} className="w-full h-full opacity-40 scale-105" alt="Hero" />
             <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent"></div>
             {/* Grid overlay for tech pages */}
             {!isBrand && <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>}
          </div>

          <div className="relative z-10 text-center max-w-5xl">
             <BackButton onClick={onBack} className="mx-auto mb-8 opacity-50 hover:opacity-100" />
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className={`inline-block text-xs font-bold tracking-[0.3em] uppercase mb-6 ${textAccent}`}
             >
                {content.subtitle}
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
             >
               {content.title.split(' ').map((word, i) => (
                 <span key={i} className="block">{word}</span>
               ))}
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-white/60 font-kor max-w-2xl mx-auto leading-relaxed"
             >
               {content.description}
             </motion.p>
          </div>
          
          {/* Scroll Down */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
             <div className={`w-[1px] h-24 bg-gradient-to-b from-transparent via-${isBrand ? 'gold' : 'lime'} to-transparent animate-pulse`}></div>
          </motion.div>
       </section>

       {/* Detailed Workflow Process (Visual Grid Style) */}
       {content.detailedProcess && (
         <section className="py-24 bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-16 text-center">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${textAccent} block mb-4`}>Workflow</span>
                  <h2 className="text-4xl font-bold text-white">Creative Process</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.detailedProcess.map((step, idx) => (
                     <div key={idx} className="relative aspect-[3/4] group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        {/* Image Background */}
                        <div className="absolute inset-0">
                           <GenAIImage 
                             prompt={step.image || content.imageGrid[idx % content.imageGrid.length]} 
                             alt={step.title}
                             className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                             aspectRatio="3:4"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                        </div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-10">
                           <div className="mb-auto">
                              <span className={`text-5xl font-black ${isBrand ? 'text-gold/20' : 'text-lime/20'} group-hover:opacity-100 transition-opacity`}>{step.step}</span>
                           </div>
                           <h3 className={`text-2xl font-bold text-white mb-3 ${isBrand ? 'group-hover:text-gold' : 'group-hover:text-lime'} transition-colors`}>{step.title}</h3>
                           <p className="text-sm text-offwhite/60 font-kor leading-relaxed group-hover:text-white transition-colors">{step.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
       )}

       {/* Feature Highlight Section */}
       <section className="max-w-[1920px] mx-auto border-t border-white/5">
          {content.features.map((feature, idx) => (
             <div key={idx} className="min-h-[50vh] flex flex-col md:flex-row border-b border-white/5 relative group">
                <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-10 bg-obsidian/90 backdrop-blur-sm md:bg-transparent">
                   <div className="mb-8">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">{feature.title}</h2>
                      <div className={`w-12 h-1 ${isBrand ? 'bg-gold' : 'bg-lime'} mb-6`}></div>
                      <p className="text-lg text-white/60 font-kor leading-loose max-w-md">
                         {feature.desc}
                      </p>
                   </div>
                </div>
                <div className="w-full md:w-1/2 h-[40vh] md:h-auto overflow-hidden border-l border-white/5 relative">
                   <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                   <GenAIImage 
                     prompt={content.imageGrid[idx % content.imageGrid.length]} 
                     alt={feature.title} 
                     className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                     aspectRatio="4:3"
                   />
                </div>
             </div>
          ))}
       </section>

       {/* Contact Section */}
       <ContactFormSection accentColor={isBrand ? 'gold' : 'lime'} />
    </div>
  );
};

// --- Layout 2: Split (Consulting / Analysis) ---
const SplitLayout: React.FC<SubPageProps> = ({ content, onBack }) => (
  <div className="min-h-screen bg-obsidian flex flex-col pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
      <div className="p-8 md:p-16 flex flex-col justify-center bg-white/[0.02] border-r border-white/5 relative">
        <BackButton onClick={onBack} className="absolute top-8 left-8" />
        <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4">{content.subtitle}</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {content.title}
        </h1>
        <p className="text-offwhite/60 text-lg font-kor leading-relaxed max-w-lg">
          {content.description}
        </p>
      </div>
      <div className="relative h-full min-h-[400px]">
        <GenAIImage prompt={content.heroImage} className="absolute inset-0 w-full h-full grayscale opacity-60" alt="Hero" aspectRatio="4:3" />
        <div className="absolute inset-0 bg-gradient-to-l from-obsidian/50 to-transparent"></div>
      </div>
    </div>

    {/* Key Features */}
    <section className="bg-obsidian border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {content.features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-lime/30 transition-colors">
                <span className="text-gold text-2xl font-bold mb-4 block">0{idx + 1}</span>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-offwhite/50 text-sm font-kor">{feature.desc}</p>
              </div>
            ))}
         </div>
       </div>
    </section>

    {/* Detailed Process Section (Vertical Timeline) */}
    {content.detailedProcess && (
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-lime text-xs font-bold uppercase tracking-[0.2em] block mb-4">Our Approach</span>
               <h2 className="text-4xl font-bold text-white">Consulting Process</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
               {content.detailedProcess.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-gold font-bold text-xs z-10">
                        {step.step}
                     </div>
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-xl border border-white/5 group-hover:border-gold/30 transition-all">
                        <h3 className="font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-offwhite/50 font-kor">{step.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    )}

    {/* Contact Form */}
    <ContactFormSection accentColor="gold" />
  </div>
);

// --- Layout: Acceleration (Dynamic/High-Velocity) ---
const AccelerationLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  return (
    <div className="bg-obsidian min-h-screen text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#111] to-transparent transform -skew-x-12 opacity-50"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,255,0,0.05),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 pt-24 px-6 md:px-12 max-w-8xl mx-auto flex flex-col">
         <div className="mb-8">
            <BackButton onClick={onBack} />
         </div>

         {/* Header Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
                  <span className="text-lime font-bold tracking-[0.2em] uppercase text-sm">{content.subtitle}</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-8 leading-[0.9]">
                 {content.title.toUpperCase()}
               </h1>
               <p className="text-xl text-offwhite/60 font-kor leading-relaxed max-w-lg border-l-2 border-lime/30 pl-6">
                 {content.description}
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden border-2 border-white/5 group"
            >
               <div className="absolute inset-0 bg-lime/10 mix-blend-overlay z-10"></div>
               <GenAIImage 
                 prompt={content.heroImage} 
                 alt="Acceleration Hero" 
                 className="w-full h-full grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                 aspectRatio="16:9" 
               />
            </motion.div>
         </div>

         {/* Features Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {content.features.map((feature, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-lime/50 transition-colors"
               >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-lime transition-all duration-500">
                     {idx === 0 ? <Target size={32} /> : idx === 1 ? <BarChart size={32} /> : <TrendingUp size={32} />}
                  </div>
                  <div className="relative z-10">
                     <div className="text-4xl font-black text-white/10 mb-4 font-mono group-hover:text-lime/20 transition-colors">0{idx + 1}</div>
                     <h3 className="text-2xl font-bold text-white mb-3 italic">{feature.title}</h3>
                     <p className="text-offwhite/50 text-sm font-kor leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-lime w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
               </motion.div>
            ))}
         </div>
      </div>

      {/* Detailed Process (Acceleration Style - Arrows) */}
      {content.detailedProcess && (
         <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-16 text-center">
                  <span className="text-lime text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">Growth Engine</span>
                  <h2 className="text-4xl font-black italic text-white">Execution Process</h2>
               </div>
               <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                  {content.detailedProcess.map((step, idx) => (
                     <div key={idx} className="flex-1 flex flex-col">
                        <div className="bg-white/5 border border-lime/10 p-8 rounded-xl h-full relative group hover:bg-lime/5 transition-colors">
                           <div className="flex justify-between items-center mb-6">
                              <span className="text-2xl font-black text-lime italic">{step.step}</span>
                              {idx < 3 && <ChevronRight className="text-white/20 hidden md:block group-hover:text-lime/50 group-hover:translate-x-2 transition-all" />}
                           </div>
                           <h3 className="text-xl font-bold text-white mb-2 italic">{step.title}</h3>
                           <p className="text-sm text-offwhite/50 font-kor">{step.description}</p>
                        </div>
                        {idx < 3 && <div className="h-8 w-[1px] bg-white/10 mx-auto md:hidden"></div>}
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* Contact Section */}
      <ContactFormSection accentColor="lime" />
    </div>
  );
};

// --- Layout 3: Immersive (Creative / Design) ---
const ImmersiveLayout: React.FC<SubPageProps> = ({ content, onBack }) => (
  <div className="bg-obsidian min-h-screen">
    <div className="h-screen w-full relative overflow-hidden flex items-end p-8 md:p-16">
       <div className="absolute inset-0 w-full h-full opacity-60 scale-105">
          <GenAIImage prompt={content.heroImage} alt="Hero" className="w-full h-full" aspectRatio="16:9" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90"></div>
       <div className="relative z-10 w-full">
         <BackButton onClick={onBack} className="absolute top-[-80vh] left-0 text-white" />
         <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
         >
           <h1 className="text-[12vw] leading-none font-bold text-white tracking-tighter mix-blend-overlay opacity-80">
             {content.title.toUpperCase()}
           </h1>
           <div className="flex flex-col md:flex-row justify-between items-end mt-8 border-t border-white/20 pt-8">
              <span className="text-gold text-xl tracking-widest uppercase">{content.subtitle}</span>
              <p className="max-w-xl text-offwhite/80 text-lg md:text-xl font-kor text-right mt-4 md:mt-0">
                {content.description}
              </p>
           </div>
         </motion.div>
       </div>
    </div>

    <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 relative">
       <div className="absolute left-1/2 -translate-x-1/2 top-10 text-lime animate-bounce">
         <ArrowDown size={32} />
       </div>

       <div className="space-y-32">
         {content.features.map((feature, idx) => (
           <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                 <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6">
                   {feature.title}
                 </h2>
                 <p className="text-xl text-offwhite/60 font-kor leading-relaxed">
                   {feature.desc}
                 </p>
              </div>
              <div className="flex-1 w-full aspect-square relative rounded-full overflow-hidden border border-white/10">
                 <div className="absolute inset-0 w-full h-full hover:scale-110 transition-transform duration-700">
                    <GenAIImage 
                      prompt={content.imageGrid[idx % content.imageGrid.length] || content.heroImage} 
                      alt="Feature"
                      className="w-full h-full"
                      aspectRatio="1:1"
                    />
                 </div>
              </div>
           </div>
         ))}
       </div>

       <div className="mt-32 text-center">
         <p className="text-2xl text-white mb-8 font-light">"{content.details}"</p>
         <Button variant="outline" withArrow onClick={() => window.location.href='mailto:hello@onecation.com'}>Start Creating</Button>
       </div>
    </section>
  </div>
);

// --- Sub-Component: Work Detail View (Post / Board Style) ---
interface DetailViewProps {
  project: any;
  onClose: () => void;
}

const WorkDetailView: React.FC<DetailViewProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[60] bg-obsidian overflow-y-auto"
    >
      {/* Immersive Hero Header */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <GenAIImage prompt={project.image} alt={project.title} className="w-full h-full grayscale brightness-50" aspectRatio="16:9" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        
        {/* Floating Controls */}
        <div className="absolute top-0 left-0 right-0 z-50 p-8 flex justify-between items-center">
           <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
              <span className="text-gold font-bold tracking-tighter">ONECATION</span>
              <span className="w-[1px] h-3 bg-white/20"></span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest">{project.category}</span>
           </div>
           <button 
             onClick={onClose} 
             className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-lime hover:text-black transition-all"
           >
             <X size={24} />
           </button>
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-8 md:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6 leading-[0.9]">{project.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
               <span className="px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest">{project.client}</span>
               <div className="h-0.5 w-12 bg-white/10"></div>
               <span className="text-white/40 text-sm font-kor">Project Case Study 2024</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Narrative Board */}
      <div className="max-w-5xl mx-auto px-8 py-32 space-y-40">
        
        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5 pb-20">
           {[
             { label: 'Client', value: project.client, icon: User },
             { label: 'Service', value: 'UX/UI Engineering', icon: Layers },
             { label: 'Industry', value: 'High-Tech Luxury', icon: Box },
             { label: 'Timeline', value: '14 Weeks', icon: Clock },
           ].map((spec, i) => (
              <div key={i} className="space-y-3">
                 <div className="flex items-center gap-2 text-white/30 uppercase tracking-widest text-[10px]">
                    <spec.icon size={12} /> {spec.label}
                 </div>
                 <p className="text-lg font-bold text-white">{spec.value}</p>
              </div>
           ))}
        </div>

        {/* Narrative Section 1: Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
           <div className="md:col-span-4">
              <h3 className="text-3xl font-bold text-white sticky top-32">The <br/><span className="text-gold">Challenge</span></h3>
           </div>
           <div className="md:col-span-8 space-y-8 text-xl font-kor text-white/60 leading-loose">
              <p>
                {project.client} 프로젝트의 핵심 과제는 파편화된 디지털 접점을 하나로 통합하고, 브랜드의 프리미엄 정체성을 기술적으로 증명하는 것이었습니다.
              </p>
              <div className="bg-white/5 p-10 rounded-2xl border border-white/5 italic font-light text-white/80">
                "단순한 홈페이지를 넘어, 우리 브랜드의 영혼을 디지털 공간에서 경험할 수 있게 해주세요."
              </div>
              <p>
                우리는 수만 명의 사용자 행동 데이터를 분석하여 기존 시스템의 병목 현상을 파악했고, 이를 해결하기 위한 혁신적인 사용자 인터페이스 구조를 설계했습니다.
              </p>
           </div>
        </div>

        {/* Visual Showcase 1 */}
        <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 group">
           <GenAIImage prompt={`${project.image}, futuristic user interface detailed`} alt="Interface" className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
        </div>

        {/* Narrative Section 2: Solution */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
           <div className="md:col-span-4">
              <h3 className="text-3xl font-bold text-white sticky top-32">The <br/><span className="text-lime">Solution</span></h3>
           </div>
           <div className="md:col-span-8 space-y-10 text-xl font-kor text-white/60 leading-loose">
              <p>
                원케이션의 'Sync 프로세스'를 적용하여 기획, 디자인, 개발이 동시에 동기화되는 워크플로우를 구축했습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { title: 'Obsidian Design System', desc: '다크 모드에 최적화된 고대비 컴포넌트 라이브러리 구축.' },
                   { title: 'Motion Engine', desc: '60fps의 부드러운 전환 효과로 감성적 만족도 극대화.' },
                   { title: 'Edge Performance', desc: '전 세계 어디서나 1초 미만의 응답 속도를 보장하는 아키텍처.' },
                   { title: 'AI Integration', desc: '사용자 취향에 반응하는 개인화 추천 알고리즘 삽입.' }
                 ].map((sol, i) => (
                   <div key={i} className="bg-white/[0.03] p-6 rounded-xl border border-white/10 hover:border-lime/40 transition-all">
                      <h5 className="text-white font-bold text-sm mb-2">{sol.title}</h5>
                      <p className="text-xs text-white/40 leading-relaxed">{sol.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Key Result Banner */}
        <div className="bg-lime p-16 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="text-obsidian max-w-sm">
              <h4 className="text-3xl font-bold mb-4 tracking-tighter">Business Impact</h4>
              <p className="text-sm font-medium opacity-80">데이터로 증명된 성공적인 디지털 트랜스포메이션 결과입니다.</p>
           </div>
           <div className="flex gap-12">
              <div className="text-center">
                 <span className="block text-5xl font-black text-obsidian tracking-tighter">+240%</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-obsidian/60">Conversion</span>
              </div>
              <div className="text-center">
                 <span className="block text-5xl font-black text-obsidian tracking-tighter">-45%</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-obsidian/60">Load Time</span>
              </div>
           </div>
        </div>

        {/* Detail Gallery */}
        <div className="grid grid-cols-2 gap-6">
           <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/5">
              <GenAIImage prompt="Modern mobile app interface mockup gold details" alt="Mobile" className="w-full h-full" aspectRatio="1:1" />
           </div>
           <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/5">
              <GenAIImage prompt="Premium branding collateral layout obsidian" alt="Branding" className="w-full h-full" aspectRatio="1:1" />
           </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-20 border-t border-white/5 flex flex-col items-center text-center gap-10">
           <h3 className="text-2xl font-bold text-white">Next Project Experience</h3>
           <div className="flex gap-4">
              <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                 <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> Prev Project
              </button>
              <button className="flex items-center gap-2 text-white font-bold hover:text-gold transition-colors group">
                 Next Project <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
           <Button variant="primary" onClick={onClose} className="px-12 py-5 text-xl">Close Case Study</Button>
        </div>
      </div>
    </motion.div>
  );
};

const InsightDetailView: React.FC<InsightDetailProps> = ({ post, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[60] bg-obsidian overflow-y-auto font-kor"
    >
      {/* Top Reading Bar */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
         <div className="flex items-center gap-4">
            <span className="text-gold font-bold text-sm tracking-tighter">O-LAB INSIGHTS</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest hidden md:block">Now Reading: {post.title}</span>
         </div>
         <div className="flex items-center gap-3">
            <button className="p-2 text-white/40 hover:text-white transition-colors"><Share2 size={18} /></button>
            <button className="p-2 text-white/40 hover:text-white transition-colors"><Bookmark size={18} /></button>
            <span className="w-[1px] h-4 bg-white/10 mx-2"></span>
            <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors"><X size={20} /></button>
         </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-20">
         {/* Article Header */}
         <header className="mb-16 space-y-8">
            <div className="flex items-center gap-3">
               <span className="px-3 py-1 rounded-full bg-white/5 text-lime text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {post.category}
               </span>
               <span className="text-white/20 text-xs font-mono">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
               {post.title}
            </h1>
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
               <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/20 text-gold font-bold text-xs">
                  OC
               </div>
               <div>
                  <p className="text-white text-sm font-bold">Onecation Editorial Team</p>
                  <p className="text-white/30 text-xs">Premium Business Architects</p>
               </div>
               <div className="ml-auto flex items-center gap-2 text-white/30 text-xs">
                  <Clock size={14} /> 8 min read
               </div>
            </div>
         </header>

         {/* Lead Image */}
         <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-white/5 bg-white/5">
            <GenAIImage prompt={post.image} alt={post.title} className="w-full h-full" aspectRatio="16:9" />
         </div>

         {/* Article Content */}
         <div className="prose prose-invert max-w-none text-white/70 text-lg leading-loose space-y-8">
            <p className="text-xl text-white font-medium leading-relaxed border-l-4 border-gold pl-8 py-2 italic bg-white/[0.02] rounded-r-lg">
               비즈니스의 미래는 단순히 어떤 기술을 사용하는가에 있지 않습니다. 그 기술을 어떻게 브랜드의 영혼과 결합시켜 사용자에게 잊지 못할 경험을 선사하는가에 달려 있습니다.
            </p>
            
            <h3 className="text-2xl font-bold text-white pt-8">디지털 트랜스포메이션의 본질</h3>
            <p>
               오늘날 많은 기업들이 디지털 전환을 외치고 있지만, 대다수는 기존의 오프라인 프로세스를 온라인으로 옮기는 수준에 머물러 있습니다. 하지만 원케이션이 정의하는 진정한 디지털 트랜스포메이션은 브랜드의 본질(Essence)을 재정의하고, 이를 디지털 환경에 최적화된 새로운 사용자 여정으로 창조하는 것입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
               <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                  <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><BookOpen size={16}/> Key Insight A</h4>
                  <p className="text-sm">데이터는 방향을 제시할 뿐, 결정은 브랜드의 가치관을 따릅니다. 무조건적인 최적화보다 정체성 유지가 우선입니다.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                  <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><Zap size={16}/> Key Insight B</h4>
                  <p className="text-sm">사용자의 찰나의 순간을 포착하는 마이크로 인터랙션이 브랜드에 대한 신뢰도를 70% 이상 상승시킵니다.</p>
               </div>
            </div>

            <h3 className="text-2xl font-bold text-white">결론: 우리가 나아가야 할 방향</h3>
            <p>
               우리는 더 이상 단순히 아름다운 웹사이트나 기능적인 앱을 만드는 것에 만족해서는 안 됩니다. 기술과 예술, 그리고 비즈니스 전략이 완벽하게 동기화된 하나의 에코시스템을 구축해야 합니다. 그것이 원케이션이 지향하는 'Business All-in-One'의 미래입니다.
            </p>
         </div>

         {/* Footer Tags */}
         <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-2">
            {['Strategy', 'UX Design', 'Luxury Tech', 'Future'].map(tag => (
               <span key={tag} className="text-[10px] text-white/30 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full hover:border-gold/30 hover:text-gold transition-colors cursor-pointer">#{tag}</span>
            ))}
         </div>

         {/* Author Bio */}
         <footer className="mt-20 p-10 bg-white/[0.03] rounded-3xl border border-white/5 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold font-bold text-2xl">
               OC
            </div>
            <div className="space-y-2">
               <h4 className="text-xl font-bold text-white">Onecation Insights</h4>
               <p className="text-sm text-white/40 leading-relaxed">원케이션 에디토리얼 팀은 비즈니스 아키텍처의 최신 트렌드와 인사이트를 분석하여 공유합니다. 우리는 지식의 공유가 더 큰 혁신을 만든다고 믿습니다.</p>
            </div>
         </footer>

         <div className="mt-20 flex justify-between items-center">
            <button onClick={onClose} className="text-offwhite/40 hover:text-white transition-colors flex items-center gap-2 group">
               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to List
            </button>
            <div className="flex gap-4">
               <Button variant="secondary" className="text-xs">이전 글</Button>
               <Button variant="primary" className="text-xs">다음 글 보기</Button>
            </div>
         </div>
      </article>
    </motion.div>
  );
};

// --- Layout 4: Gallery (Portfolio / Work / Originals) ---
interface GalleryLayoutProps extends SubPageProps {
  onSelectProject: (project: any) => void;
}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ content, onBack, onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  // Categorization based on content.features
  const categories = useMemo(() => {
    const cats = new Set(content.features.map(f => f.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [content.features]);

  // Project List Generation
  const projects = useMemo(() => {
    const baseItems = content.imageGrid.map((img, i) => ({
      id: i,
      image: img,
      title: content.features[i % content.features.length].title,
      client: "Original Partner",
      category: content.features[i % content.features.length].category || "Tech",
      aspect: i % 3 === 0 ? 'aspect-[4/5]' : i % 2 === 0 ? 'aspect-video' : 'aspect-square' 
    }));
    return baseItems;
  }, [content.imageGrid, content.features]);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <div className="bg-obsidian min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
          <BackButton onClick={onBack} className="mb-8" />
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
            <div>
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
               >
                 <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">{content.title}</h1>
                 <span className="text-lime text-sm tracking-[0.2em] uppercase font-bold">{content.subtitle}</span>
               </motion.div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
               {categories.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setFilter(cat as string)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-white text-black' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                  >
                    {cat}
                  </button>
               ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto px-6">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredProjects.map((project, idx) => (
                 <motion.div
                   key={idx}
                   layout
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.5 }}
                   className="break-inside-avoid relative group cursor-pointer"
                   onClick={() => onSelectProject(project)}
                 >
                    <div className={`w-full rounded-2xl overflow-hidden bg-white/5 relative ${project.aspect}`}>
                       <GenAIImage prompt={project.image} alt={project.title} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" aspectRatio={project.aspect === 'aspect-square' ? '1:1' : project.aspect === 'aspect-video' ? '16:9' : '3:4'} />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                       
                       {/* Overlay Info */}
                       <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                          <div className="relative z-10">
                             <span className="text-[10px] text-lime font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                             <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </div>
    </>
  );
};

// --- Layout 5: Editorial (Insights / Culture) ---
interface EditorialLayoutProps extends SubPageProps {
  onSelectInsight: (post: any) => void;
}

const EditorialLayout: React.FC<EditorialLayoutProps> = ({ content, onBack, onSelectInsight }) => {
  return (
    <div className="min-h-screen bg-obsidian pt-24 pb-20 font-kor">
       <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
          <BackButton onClick={onBack} className="mb-8" />
          <div className="border-b border-white/5 pb-12 mb-12">
             <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">O-LAB Archive</span>
             <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{content.title}</h1>
             <p className="text-offwhite/60 mt-6 max-w-2xl text-lg">{content.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             {/* Featured Post (First Item) */}
             <div className="lg:col-span-8 group cursor-pointer" onClick={() => onSelectInsight(INSIGHTS[0] || {})}>
                <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 relative">
                   <GenAIImage prompt={content.heroImage} alt="Featured" className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" aspectRatio="16:9" />
                   <div className="absolute top-6 left-6 bg-gold text-obsidian px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Featured</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{content.features[0]?.title || "The Future of Digital Luxury"}</h2>
                <p className="text-offwhite/60 text-lg leading-relaxed line-clamp-3">{content.details}</p>
             </div>

             {/* Sidebar List */}
             <div className="lg:col-span-4 flex flex-col gap-8">
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-4">Latest Articles</h3>
                {INSIGHTS.slice(0, 4).map((item, idx) => (
                   <div key={idx} className="group cursor-pointer flex gap-4 items-start" onClick={() => onSelectInsight(item)}>
                      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-white/5">
                         <GenAIImage prompt={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" aspectRatio="1:1" />
                      </div>
                      <div>
                         <span className="text-[10px] text-lime font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
                         <h4 className="text-white font-bold leading-tight group-hover:text-lime transition-colors mb-2">{item.title}</h4>
                         <span className="text-xs text-white/30">{item.date}</span>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

// --- Layout 6: Contact (Form / Info) ---
const ContactLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  const [service, setService] = useState('');
  const serviceOptions = [
    'Business Planning', 'Gov. Strategy', 'Tech Consulting',
    'Brand Experience', 'Web Engineering', 'App & Platform',
    'SEO & Data', 'Performance Marketing', 'Viral & Content',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-24 pb-20">
       <div className="max-w-7xl mx-auto px-6 md:px-8">
          <BackButton onClick={onBack} className="mb-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Left Info */}
             <div>
                <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{content.subtitle}</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">{content.title}</h1>
                <p className="text-offwhite/60 text-lg font-kor leading-relaxed mb-12">{content.description}</p>
                
                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"><Mail size={20}/></div>
                      <div>
                         <h4 className="text-white font-bold mb-1">Email Us</h4>
                         <p className="text-offwhite/50">yeomjw0907@onecation.co.kr</p>
                         <p className="text-offwhite/50">hello@onecation.com</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"><Phone size={20}/></div>
                      <div>
                         <h4 className="text-white font-bold mb-1">Call Us</h4>
                         <p className="text-offwhite/50">010-6333-4649</p>
                         <p className="text-offwhite/50 text-xs mt-1">Mon-Fri, 10am - 7pm</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"><MapPin size={20}/></div>
                      <div>
                         <h4 className="text-white font-bold mb-1">Visit Us</h4>
                         <p className="text-offwhite/50 font-kor">인천광역시 연수구 송도2동 인천타워대로 99<br/>애니오션빌딩 11-12층</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right Form */}
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Name</label>
                         <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-lime focus:outline-none transition-colors" placeholder="홍길동 / 기업명" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Contact</label>
                         <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-lime focus:outline-none transition-colors" placeholder="이메일 또는 전화번호" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Service Interest</label>
                      <CustomSelect options={serviceOptions} value={service} onChange={setService} placeholder="관심 서비스를 선택하세요" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Project Details</label>
                      <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-lime focus:outline-none transition-colors resize-none leading-relaxed" placeholder="프로젝트 예산, 일정, 주요 기능 등 상세 내용을 입력해주세요."></textarea>
                   </div>
                   <Button variant="primary" className="w-full py-4 text-lg" withArrow>문의하기</Button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

const FAQLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  // Simple FAQ accordion or list
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-obsidian pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <BackButton onClick={onBack} className="mb-8" />
        <div className="text-center mb-16">
          <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{content.subtitle}</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.title}</h1>
          <p className="text-offwhite/60 text-lg">{content.description}</p>
        </div>

        <div className="space-y-4">
          {content.features.map((item, idx) => (
            <div key={idx} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-lime font-bold uppercase tracking-widest border border-lime/30 px-2 py-1 rounded bg-lime/10">{item.category}</span>
                  <span className="font-bold text-white text-lg">{item.title}</span>
                </div>
                <ChevronDown className={`text-white/40 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 pt-0 pl-20">
                      <p className="text-offwhite/60 font-kor leading-relaxed border-l-2 border-lime/30 pl-4">{item.desc}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 text-center bg-white/5 border border-white/10 rounded-3xl p-10">
           <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
           <p className="text-offwhite/50 mb-8">We are here to help you.</p>
           <Button variant="primary" onClick={() => window.location.href='mailto:hello@onecation.com'}>Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export const SubPage: React.FC<SubPageProps> = (props) => {
  const { content, slug, onNavigate } = props;
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const renderLayout = () => {
    switch (content.layout) {
      case 'manifesto': return <ManifestoLayout {...props} />;
      case 'alliance': return <AllianceLayout {...props} />;
      case 'process': return <ProcessLayout {...props} />;
      case 'creation': return <CreationLayout {...props} />;
      case 'split': return <SplitLayout {...props} />;
      case 'acceleration': return <AccelerationLayout {...props} />;
      case 'immersive': return <ImmersiveLayout {...props} />;
      case 'gallery': return <GalleryLayout {...props} onSelectProject={setSelectedProject} />;
      case 'success-story': return <GalleryLayout {...props} onSelectProject={setSelectedProject} />;
      case 'editorial': return <EditorialLayout {...props} onSelectInsight={setSelectedInsight} />;
      case 'contact': return <ContactLayout {...props} />;
      case 'faq': return <FAQLayout {...props} />;
      default: return <CreationLayout {...props} />;
    }
  };

  return (
    <>
      <ContextNavigation currentSlug={slug} onNavigate={onNavigate} />
      {renderLayout()}
      
      <AnimatePresence>
        {selectedProject && (
          <WorkDetailView project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
        {selectedInsight && (
          <InsightDetailView post={selectedInsight} onClose={() => setSelectedInsight(null)} />
        )}
      </AnimatePresence>

      {!['contact', 'faq', 'gallery', 'editorial', 'manifesto', 'alliance'].includes(content.layout) && (
         <RelatedWorks currentSlug={slug} onSelectProject={setSelectedProject} />
      )}
    </>
  );
};
