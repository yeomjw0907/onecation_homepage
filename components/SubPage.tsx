
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SubPageContent, LayoutType } from '../types';
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
  Clock,
  BookOpen
} from 'lucide-react';
import { GenAIImage } from './GenAIImage';

interface SubPageProps {
  content: SubPageContent;
  onBack: () => void;
}

const BackButton: React.FC<{ onClick: () => void; className?: string }> = ({ onClick, className = '' }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-2 text-white/50 hover:text-lime uppercase tracking-widest text-xs transition-colors z-20 ${className}`}
  >
    <ArrowLeft size={16} /> Back
  </button>
);

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

// --- Standard Layout (Restored Generic) ---
const StandardLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-obsidian">
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 px-6 md:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-40">
           <GenAIImage prompt={content.heroImage} alt={content.title} className="w-full h-full grayscale" aspectRatio="16:9" />
           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <BackButton onClick={onBack} />
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-gold text-xs uppercase tracking-widest">{content.subtitle}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tighter">
            {content.title}
          </h1>
          <p className="text-offwhite/70 max-w-2xl text-lg md:text-xl font-kor font-light leading-relaxed">
            {content.description}
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <h3 className="text-lime font-bold tracking-widest uppercase text-sm mb-8">Key Features</h3>
            <div className="space-y-8">
              {content.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l border-white/10 pl-6 hover:border-lime transition-colors group"
                >
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{feature.title}</h4>
                  <p className="text-offwhite/40 text-sm font-kor leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl text-offwhite/90 font-kor leading-normal mb-16 font-light">
              "{content.details}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {content.imageGrid.map((img, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.2 + (idx * 0.1) }}
                   className="aspect-[4/3] rounded-2xl overflow-hidden relative group"
                 >
                    <div className="absolute inset-0 bg-lime/10 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <GenAIImage prompt={img} alt="Detail" className="w-full h-full transition-transform duration-700 group-hover:scale-110" aspectRatio="4:3" />
                 </motion.div>
               ))}
            </div>
            <div className="mt-16 flex justify-end border-t border-white/10 pt-10">
               <Button variant="primary" withArrow onClick={() => window.location.href='mailto:hello@onecation.com'}>
                  Contact Us
               </Button>
            </div>
          </div>
        </div>
      </section>
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
         
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-bold text-white mb-4">Approach</h3>
              <p className="text-offwhite/60 font-kor">{content.details}</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 gap-4">
              {content.imageGrid.slice(0,2).map((img, idx) => (
                <div key={idx} className="w-full aspect-video rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                   <GenAIImage prompt={img} className="w-full h-full" alt="Detail" aspectRatio="16:9" />
                </div>
              ))}
            </div>
         </div>
       </div>
    </section>
  </div>
);

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

// --- Sub-Component: Insight Detail View (Reading Oriented) ---
interface InsightDetailProps {
  post: any;
  onClose: () => void;
}

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
const GalleryLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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
            <p className="text-offwhite/50 max-w-md font-kor text-sm text-right leading-relaxed mb-2">
              {content.description}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-12 flex flex-wrap gap-2">
             {categories.map((cat) => (
               <button
                  key={cat as string}
                  onClick={() => setFilter(cat as string)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-lime text-obsidian border-lime shadow-[0_0_15px_rgba(204,255,0,0.3)]' 
                      : 'bg-white/5 text-white/40 border-transparent hover:border-white/20 hover:text-white'
                  }`}
               >
                  {cat as string}
               </button>
             ))}
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto px-6 md:px-8">
           <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                   <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedProject(project)}
                      className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-white/[0.02] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime/10"
                   >
                      <div className="relative w-full overflow-hidden">
                         <GenAIImage 
                           prompt={project.image} 
                           className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" 
                           alt={project.title}
                           aspectRatio="4:3"
                         />
                         <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-lime scale-50 group-hover:scale-100 transition-transform duration-500 delay-100 bg-black/40 backdrop-blur-sm">
                               <ArrowUpRight size={32} />
                            </div>
                         </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                         <div className="flex justify-between items-start">
                           <div>
                             <span className="text-lime text-[10px] tracking-widest uppercase block mb-1">
                               {project.category}
                             </span>
                             <h3 className="text-lg font-bold text-white">{project.title}</h3>
                           </div>
                         </div>
                      </div>
                   </motion.div>
                ))}
              </AnimatePresence>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <WorkDetailView project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

// --- Layout 5: Editorial (Trend Insights / Archive Space) ---
const EditorialLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  
  const categories = useMemo(() => {
    const cats = new Set(content.features.map(f => f.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [content.features]);

  const archiveItems = useMemo(() => {
    return content.features.map((f, i) => ({
      ...f,
      id: i,
      image: content.imageGrid[i % content.imageGrid.length],
      date: `2024.0${(i % 9) + 1}.15`,
    }));
  }, [content.features, content.imageGrid]);

  const filteredItems = activeCategory === 'All' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === activeCategory);

  return (
    <>
      <div className="bg-obsidian min-h-screen pt-24 pb-20 selection:bg-lime/30 selection:text-lime">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <BackButton onClick={onBack} className="mb-12" />

            <header className="mb-20">
              <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                  <div className="max-w-2xl">
                    <span className="inline-block text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4">{content.subtitle}</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">{content.title}</h1>
                    <p className="text-lg text-offwhite/50 font-kor font-light leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                  {/* Search Bar (Visual Only) */}
                  <div className="relative group w-full md:w-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-lime transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search insights..." 
                      className="bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-sm text-white w-full md:w-64 focus:outline-none focus:border-lime transition-all"
                    />
                  </div>
              </div>

              {/* Categories */}
              <div className="mt-12 flex flex-wrap gap-2 border-b border-white/5 pb-8">
                  {categories.map((cat) => (
                    <button 
                      key={cat as string}
                      onClick={() => setActiveCategory(cat as string)}
                      className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all ${
                        activeCategory === cat 
                        ? 'bg-lime text-obsidian border-lime' 
                        : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {cat as string}
                    </button>
                  ))}
              </div>
            </header>

            {/* Featured Post (Visual) */}
            {activeCategory === 'All' && archiveItems.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 group cursor-pointer"
                onClick={() => setSelectedPost(archiveItems[0])}
              >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/5 relative">
                        <GenAIImage 
                          prompt={archiveItems[0].image} 
                          alt="Featured" 
                          className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          aspectRatio="16:9" 
                        />
                        <div className="absolute top-6 left-6 z-10 px-4 py-1.5 bg-lime text-obsidian text-[10px] font-bold tracking-widest uppercase rounded-full">
                          Featured Insight
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <span className="text-gold text-xs font-mono mb-4 block">{archiveItems[0].date}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-gold transition-colors">{archiveItems[0].title}</h2>
                        <p className="text-offwhite/50 font-kor leading-relaxed mb-8">{archiveItems[0].desc}</p>
                        <button className="flex items-center gap-2 text-lime text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                          Read Story <ArrowUpRight size={16} />
                        </button>
                    </div>
                  </div>
              </motion.div>
            )}

            {/* Archive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredItems.slice(activeCategory === 'All' ? 1 : 0).map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedPost(item)}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white/5 border border-white/5">
                        <GenAIImage 
                          prompt={item.image} 
                          alt={item.title} 
                          className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                          aspectRatio="4:3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                        <span className="absolute bottom-4 left-4 text-[10px] text-white/70 font-mono tracking-widest uppercase">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors font-kor leading-snug">{item.title}</h3>
                    <div className="flex items-center justify-between text-[10px] text-white/30 uppercase tracking-[0.2em] font-sans border-t border-white/5 pt-4">
                        <span>{item.date}</span>
                        <ArrowUpRight size={14} className="group-hover:text-lime transition-colors" />
                    </div>
                  </motion.div>
              ))}
            </div>

            <div className="mt-32 text-center">
              <p className="text-offwhite/30 text-sm mb-8 font-kor italic">The archives are updated weekly with new digital foresight.</p>
              <Button variant="secondary" className="px-10">Load More Insights</Button>
            </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <InsightDetailView post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

// --- Layout 6: FAQ (Accordion Style) ---
const FAQLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  // Derive unique categories from content
  const categories = useMemo(() => {
    const cats = new Set(content.features.map(f => f.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [content.features]);

  // Filter features based on selection
  const filteredFeatures = useMemo(() => {
    if (filter === 'All') return content.features;
    return content.features.filter(f => f.category === filter);
  }, [filter, content.features]);

  return (
    <div className="bg-obsidian min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <BackButton onClick={onBack} className="mb-12" />
        
        <div className="text-center mb-12">
          <span className="inline-block border border-white/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6 bg-white/5">
            {content.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-offwhite/50 max-w-lg mx-auto font-kor">
            {content.description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat as string}
              onClick={() => {
                setFilter(cat as string);
                setOpenIndex(null); // Reset open accordion on filter change
              }}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                filter === cat 
                  ? 'bg-lime text-obsidian border-lime shadow-[0_0_15px_rgba(204,255,0,0.3)]' 
                  : 'bg-white/5 text-white/40 border-transparent hover:border-white/20 hover:text-white'
              }`}
            >
              {cat as string}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode='wait'>
            <motion.div
              key={filter} // Re-render list when filter changes for smooth transition
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFeatures.map((item, index) => {
                 const isOpen = openIndex === index;
                 return (
                   <motion.div 
                     key={index} // Simple index key is okay here since we reset on filter change
                     className={`border rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-lime bg-white/[0.03]' : 'border-white/10 bg-transparent hover:border-white/30'}`}
                   >
                     <button 
                       onClick={() => setOpenIndex(isOpen ? null : index)}
                       className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                     >
                       <div className="flex flex-col gap-1">
                          {item.category && (
                            <span className="text-[10px] text-lime font-bold tracking-widest uppercase mb-1 opacity-70">
                              {item.category}
                            </span>
                          )}
                          <span className={`text-lg md:text-xl font-bold font-kor transition-colors ${isOpen ? 'text-white' : 'text-offwhite/70 group-hover:text-white'}`}>
                            {item.title}
                          </span>
                       </div>
                       <span className={`p-2 rounded-full transition-colors flex-shrink-0 ml-4 ${isOpen ? 'bg-lime text-obsidian' : 'bg-white/10 text-white'}`}>
                         {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                       </span>
                     </button>
                     <AnimatePresence>
                       {isOpen && (
                         <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                           <div className="px-6 md:px-8 pb-8">
                             <div className="h-[1px] w-full bg-white/5 mb-6" />
                             <p className="text-offwhite/70 leading-relaxed font-kor">
                               {item.desc}
                             </p>
                           </div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </motion.div>
                 );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center">
           <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
           <p className="text-offwhite/50 mb-8 font-kor">찾으시는 질문이 없다면 직접 문의해주세요.</p>
           <Button onClick={() => window.location.href='mailto:hello@onecation.com'}>Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

// --- Layout 7: Contact (Form Style) ---
const ContactLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  const isRecruit = content.title === 'Recruit';

  return (
    <div className="bg-obsidian min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
         <BackButton onClick={onBack} className="mb-8" />
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Info */}
            <div>
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                 <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-6 block">{content.subtitle}</span>
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                   {content.title}
                 </h1>
                 <p className="text-offwhite/60 text-lg font-kor leading-relaxed mb-12">
                   {content.description}
                 </p>
               </motion.div>

               <div className="space-y-8 border-t border-white/10 pt-10">
                 {content.features.map((feature, idx) => (
                   <div key={idx}>
                      <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-offwhite/40 text-sm font-kor">{feature.desc}</p>
                   </div>
                 ))}
               </div>
               
               <div className="mt-12 pt-10 border-t border-white/10">
                  <p className="text-offwhite/80 font-bold mb-4">Direct Contact</p>
                  <a href="mailto:hello@onecation.com" className="block text-2xl text-white hover:text-lime transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-lime">hello@onecation.com</a>
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
               <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                 <Send size={24} className="text-lime" /> 
                 {isRecruit ? 'Apply Now' : 'Send Inquiry'}
               </h3>
               
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Name</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-lime focus:bg-white/10 transition-all placeholder:text-white/20" placeholder="홍길동" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Contact</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-lime focus:bg-white/10 transition-all placeholder:text-white/20" placeholder="010-0000-0000 / Email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-wider text-white/50 font-bold">{isRecruit ? 'Portfolio / Resume URL' : 'Company / Organization'}</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-lime focus:bg-white/10 transition-all placeholder:text-white/20" placeholder={isRecruit ? "Notion, LinkedIn, PDF Link..." : "주식회사 원케이션"} />
                  </div>

                  {!isRecruit && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Budget</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-lime focus:bg-white/10 transition-all appearance-none cursor-pointer">
                             <option className="bg-obsidian">예산 미정</option>
                             <option className="bg-obsidian">~ 3,000만원</option>
                             <option className="bg-obsidian">3,000 ~ 5,000만원</option>
                             <option className="bg-obsidian">5,000만원 ~ 1억원</option>
                             <option className="bg-obsidian">1억원 이상</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Service Type</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-lime focus:bg-white/10 transition-all appearance-none cursor-pointer">
                             <option className="bg-obsidian">Web / App 구축</option>
                             <option className="bg-obsidian">브랜딩 / 디자인</option>
                             <option className="bg-obsidian">마케팅</option>
                             <option className="bg-obsidian">기획 / 컨설팅</option>
                             <option className="bg-obsidian">기타</option>
                          </select>
                       </div>
                    </div>
                  )}

                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Message</label>
                     <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-lime focus:bg-white/10 transition-all placeholder:text-white/20 resize-none" placeholder={isRecruit ? "간단한 자기소개를 부탁드립니다." : "프로젝트에 대한 간단한 설명을 부탁드립니다."}></textarea>
                  </div>

                  <div className="pt-4">
                     <button className="w-full bg-lime text-obsidian font-bold text-lg py-5 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                        {isRecruit ? 'Submit Application' : 'Request Consultation'}
                        <ArrowUpRight size={20} />
                     </button>
                     <p className="text-center text-xs text-white/30 mt-4">
                        제출해주시면 담당자가 검토 후 24시간 이내에 연락드립니다.
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>
  );
};

// --- Main Component Switcher ---
export const SubPage: React.FC<SubPageProps> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.content]);

  switch (props.content.layout) {
    case 'contact':
      return <ContactLayout {...props} />;
    case 'faq':
      return <FAQLayout {...props} />;
    case 'split':
      return <SplitLayout {...props} />;
    case 'immersive':
      return <ImmersiveLayout {...props} />;
    case 'gallery':
      return <GalleryLayout {...props} />;
    case 'editorial':
      return <EditorialLayout {...props} />;
    case 'manifesto':
      return <ManifestoLayout {...props} />;
    case 'alliance':
      return <AllianceLayout {...props} />;
    case 'process':
      return <ProcessLayout {...props} />;
    case 'standard':
    default:
      return <StandardLayout {...props} />;
  }
};
