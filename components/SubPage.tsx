import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SubPageContent, LayoutType } from '../types';
import { Button } from './ui/Button';
import { ArrowLeft, Quote, ArrowDown, ArrowUpRight, X, Calendar, User, Layers, Globe, Plus, Minus, Send, CheckCircle, Zap, Code, Box, GitGraph } from 'lucide-react';

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

// Helper to inject HTML comments into the DOM for the design team
const DevComment: React.FC<{ message: string }> = ({ message }) => (
  <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- ${message} -->` }} />
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
                       {/* Nanobanana Asset Request Comment */}
                       <DevComment message={`NANOBANANA: Generate high-fidelity 3D render for ${feature.title}. Concept: Black & Gold Circuit Board with Electric Lime pulses.`} />
                       
                       {/* Pulse Effect */}
                       <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-lime/50 z-20 shadow-[0_0_10px_#ccff00] animate-pulse"></div>
                       
                       <img 
                         src={content.imageGrid[idx % content.imageGrid.length] || content.heroImage} 
                         alt={feature.title} 
                         className="w-full h-full object-cover grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-700"
                       />
                       
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
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
         {/* Nanobanana Asset Request */}
         <DevComment message="NANOBANANA: Generate 'Golden Neural Network' (Plexus Effect). Thousands of Gold dots and lines connected in 3D space." />
         
         <div className="absolute inset-0 z-0 opacity-60">
            <img src={content.heroImage} className="w-full h-full object-cover" alt="Neural Network" />
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
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Core Brain */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="col-span-1 md:col-span-2 bg-white/5 border border-gold/30 rounded-3xl p-10 relative overflow-hidden group hover:border-lime/50 transition-colors duration-500"
            >
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-lime mb-6 border border-white/10 group-hover:bg-lime group-hover:text-black transition-colors">
                     <Layers size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{content.features[0].title}</h3>
                  <p className="text-offwhite/60 font-kor">{content.features[0].desc}</p>
               </div>
               {/* Decorative Background */}
               <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20 group-hover:opacity-40 transition-opacity">
                  <DevComment message="NANOBANANA: Insert 3D 'Core' Icon placeholder" />
                  <img src={content.imageGrid[0]} className="w-full h-full object-contain" alt="3D Icon" />
               </div>
            </motion.div>

            {/* Card 2: Specialist Node */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="col-span-1 bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-gold mb-6 border border-white/10">
                     <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{content.features[1].title}</h3>
                  <p className="text-offwhite/60 font-kor">{content.features[1].desc}</p>
               </div>
               <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-20">
                  <DevComment message="NANOBANANA: Insert 3D 'Dev' Icon placeholder" />
                  <img src={content.imageGrid[1]} className="w-full h-full object-contain" alt="3D Icon" />
               </div>
            </motion.div>

            {/* Card 3: Hyper Connection */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="col-span-1 bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-gold mb-6 border border-white/10">
                     <GitGraph size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{content.features[2].title}</h3>
                  <p className="text-offwhite/60 font-kor">{content.features[2].desc}</p>
               </div>
                <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-20">
                  <DevComment message="NANOBANANA: Insert 3D 'Graph' Icon placeholder" />
                  <img src={content.imageGrid[2]} className="w-full h-full object-contain" alt="3D Icon" />
               </div>
            </motion.div>

             {/* Card 4: Stats */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="col-span-1 md:col-span-2 bg-gradient-to-r from-white/5 to-transparent border border-white/5 rounded-3xl p-10 flex items-center justify-between"
            >
               <div>
                  <h4 className="text-5xl font-bold text-white mb-1">120+</h4>
                  <p className="text-lime uppercase tracking-widest text-xs">Active Experts</p>
               </div>
               <div className="h-16 w-[1px] bg-white/10"></div>
               <div>
                  <h4 className="text-5xl font-bold text-white mb-1">Top 1%</h4>
                  <p className="text-lime uppercase tracking-widest text-xs">Talent Pool</p>
               </div>
               <div className="h-16 w-[1px] bg-white/10"></div>
               <div>
                  <h4 className="text-5xl font-bold text-white mb-1">0%</h4>
                  <p className="text-lime uppercase tracking-widest text-xs">Overhead</p>
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
         {/* Nanobanana Asset Request */}
         <DevComment message="NANOBANANA: Generate 'Interlocking Champagne Gold Rings' 3D abstract art." />
         
         <div className="absolute inset-0 z-0">
           <img src={content.heroImage} className="w-full h-full object-cover opacity-60" alt="Process Hero" />
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
                    {/* Nanobanana Asset Request */}
                    <DevComment message={`NANOBANANA: Generate 3D Tech Visual for ${feature.category} (Radar/Blueprint/Diamond). Style: Neon HUD, Wireframe, Glowing.`} />
                    
                    <img 
                      src={content.imageGrid[idx % content.imageGrid.length]} 
                      alt={feature.title} 
                      className="w-full h-full object-cover opacity-80 mix-blend-screen" 
                    />
                    
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
           <img src={content.heroImage} alt={content.title} className="w-full h-full object-cover grayscale" />
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
                    <img src={img} alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
        <img src={content.heroImage} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" alt="Hero" />
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
                <img key={idx} src={img} className="w-full aspect-video object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Detail" />
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
       <img src={content.heroImage} className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" alt="Hero" />
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
                 <img 
                  src={content.imageGrid[idx % content.imageGrid.length] || content.heroImage} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  alt="Feature" 
                 />
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="fixed inset-0 z-[60] bg-obsidian overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
         <div className="pointer-events-auto">
            <span className="text-gold font-bold text-xl tracking-tighter mix-blend-difference">ONECATION</span>
         </div>
         <button 
           onClick={onClose} 
           className="pointer-events-auto bg-black/50 backdrop-blur-md w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-black hover:border-lime transition-all duration-300 group"
         >
           <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
         </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[500px]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-3 py-1 border border-lime/50 text-lime text-xs font-bold uppercase tracking-widest rounded-full mb-6 bg-lime/10">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-offwhite/70 max-w-2xl font-kor">
              {project.client}와 함께한 디지털 혁신 프로젝트
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Container (Board Style) */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        
        {/* Meta Data Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-10 mb-20">
           <div>
             <span className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-2"><User size={14}/> Client</span>
             <p className="text-white font-medium">{project.client}</p>
           </div>
           <div>
             <span className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-2"><Calendar size={14}/> Timeline</span>
             <p className="text-white font-medium">3 Months (2023)</p>
           </div>
           <div>
             <span className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-2"><Layers size={14}/> Service</span>
             <p className="text-white font-medium">UX/UI, Development</p>
           </div>
           <div>
             <span className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-2"><Globe size={14}/> Website</span>
             <a href="#" className="text-lime hover:underline underline-offset-4">Visit Live Site</a>
           </div>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-24 font-kor text-offwhite/80 leading-loose text-lg">
           
           {/* Section 1: Challenge */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                 <h3 className="text-2xl font-bold text-white font-sans">The Challenge</h3>
              </div>
              <div className="md:col-span-8">
                 <p className="mb-6">
                   {project.title} 프로젝트의 핵심 과제는 기존의 보수적인 브랜드 이미지를 탈피하고, 디지털 네이티브 세대(Gen Z)에게 어필할 수 있는 새로운 시각적 언어를 정립하는 것이었습니다.
                 </p>
                 <p>
                   특히 모바일 환경에서의 사용자 경험(UX)이 파편화되어 있어, 이를 통합하고 일관된 브랜드 메시지를 전달하는 것이 시급했습니다. 우리는 데이터 분석을 통해 이탈률이 높은 지점을 파악하고 근본적인 구조 개선에 착수했습니다.
                 </p>
              </div>
           </div>

           {/* Large Image Break */}
           <div className="w-full rounded-2xl overflow-hidden border border-white/5 bg-white/5">
              <img src={project.image} className="w-full h-auto object-cover opacity-80" alt="Process" />
              <div className="p-4 text-center text-xs text-white/30 border-t border-white/5">
                Design System & UI Components
              </div>
           </div>

           {/* Section 2: Solution */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                 <h3 className="text-2xl font-bold text-white font-sans">The Solution</h3>
              </div>
              <div className="md:col-span-8">
                 <p className="mb-6">
                   우리는 'Dynamic Elegance'라는 디자인 컨셉을 도출했습니다. 흑요석(Obsidian)과 같은 깊이감 있는 다크 모드를 베이스로, 라임(Lime) 컬러를 포인트로 사용하여 트렌디함을 더했습니다.
                 </p>
                 <ul className="list-disc pl-5 space-y-2 marker:text-lime">
                   <li>WebGL 기반의 인터랙티브 히어로 섹션 구현</li>
                   <li>Micro-interaction을 통한 사용성 개선</li>
                   <li>Next.js 도입으로 페이지 로딩 속도 40% 단축</li>
                 </ul>
              </div>
           </div>

           {/* Gallery Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 aspect-square rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Detail 1" />
              </div>
              <div className="bg-white/5 aspect-square rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Detail 2" />
              </div>
           </div>

           {/* Section 3: Result */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-10 rounded-2xl border border-white/5">
              <div className="md:col-span-4">
                 <h3 className="text-2xl font-bold text-white font-sans">Key Results</h3>
              </div>
              <div className="md:col-span-8 flex justify-between text-center">
                 <div>
                    <span className="block text-4xl md:text-5xl font-bold text-gold font-sans mb-2">150%</span>
                    <span className="text-sm text-white/50 uppercase tracking-widest">Traffic</span>
                 </div>
                 <div>
                    <span className="block text-4xl md:text-5xl font-bold text-gold font-sans mb-2">3.5x</span>
                    <span className="text-sm text-white/50 uppercase tracking-widest">Conversion</span>
                 </div>
                 <div>
                    <span className="block text-4xl md:text-5xl font-bold text-gold font-sans mb-2">Award</span>
                    <span className="text-sm text-white/50 uppercase tracking-widest">Winner</span>
                 </div>
              </div>
           </div>

        </div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-12 border-t border-white/10 flex justify-between items-center">
           <button onClick={onClose} className="text-offwhite/50 hover:text-white transition-colors flex items-center gap-2">
             <ArrowLeft size={20} /> Back to List
           </button>
           <button className="text-xl font-bold text-white hover:text-lime transition-colors flex items-center gap-4 group">
             Next Project <ArrowDown className="-rotate-90 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>

      </div>
    </motion.div>
  );
};

// --- Layout 4: Gallery (Portfolio / Work) ---
const GalleryLayout: React.FC<SubPageProps> = ({ content, onBack }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = ['All', 'Web/App', 'Brand', 'Marketing', 'Strategy'];

  // Enhanced Mock Data for Masonry Layout
  const projects = useMemo(() => {
    // Generate more items with varied aspect ratios for masonry effect
    const baseItems = [...content.imageGrid, ...content.imageGrid, ...content.imageGrid, ...content.imageGrid]; 
    return baseItems.map((img, i) => ({
      id: i,
      image: img,
      title: `Project Name ${i + 1}`,
      client: `Client ${String.fromCharCode(65 + (i % 5))}`,
      category: categories[(i % 4) + 1],
      // Random aspect ratio simulation by adding class names (in real world, handled by image dimensions)
      aspect: i % 3 === 0 ? 'aspect-[4/5]' : i % 2 === 0 ? 'aspect-video' : 'aspect-square' 
    }));
  }, [content.imageGrid]);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || p.category.includes(filter.split(' ')[0]));

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
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-lime text-obsidian border-lime shadow-[0_0_15px_rgba(204,255,0,0.3)]' 
                      : 'bg-white/5 text-white/40 border-transparent hover:border-white/20 hover:text-white'
                  }`}
               >
                  {cat}
                  <span className="ml-2 opacity-50 text-[10px]">
                    {cat === 'All' ? projects.length : projects.filter(p => p.category === cat || p.category.includes(cat.split(' ')[0])).length}
                  </span>
               </button>
             ))}
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto px-6 md:px-8">
           {/* Masonry Grid Layout using columns */}
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
                      {/* Image Container */}
                      <div className="relative w-full overflow-hidden">
                         <img 
                           src={project.image} 
                           className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                           alt={project.title} 
                           loading="lazy"
                         />
                         
                         {/* Hover Overlay */}
                         <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-lime scale-50 group-hover:scale-100 transition-transform duration-500 delay-100 bg-black/40 backdrop-blur-sm">
                               <ArrowUpRight size={32} />
                            </div>
                         </div>
                      </div>

                      {/* Content Card (Floating Glass on Bottom) */}
                      <div className="absolute bottom-4 left-4 right-4 p-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                         <div className="flex justify-between items-start">
                           <div>
                             <span className="text-lime text-[10px] tracking-widest uppercase block mb-1">
                               {project.category}
                             </span>
                             <h3 className="text-lg font-bold text-white">{project.client}</h3>
                             <p className="text-offwhite/50 text-xs font-kor truncate">{project.title}</p>
                           </div>
                         </div>
                      </div>
                   </motion.div>
                ))}
              </AnimatePresence>
           </div>
           
           <div className="mt-20 flex justify-center pb-20">
               <Button variant="secondary" className="px-12 py-4 text-sm tracking-widest">
                  Load More Projects
               </Button>
           </div>
        </div>
      </div>

      {/* Detail Modal / Page */}
      <AnimatePresence>
        {selectedProject && (
          <WorkDetailView project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

// --- Layout 5: Editorial (Insights / Blog) ---
const EditorialLayout: React.FC<SubPageProps> = ({ content, onBack }) => (
  <div className="bg-obsidian min-h-screen pt-24 pb-20 selection:bg-lime/30 selection:text-lime">
     <div className="max-w-3xl mx-auto px-6 relative">
        {/* Background ambient glow for O-LAB */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <BackButton onClick={onBack} className="mb-12" />

        <header className="mb-16 text-center">
           <span className="inline-block border border-gold/30 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-gold mb-8 bg-gold/5 backdrop-blur-sm">
             {content.subtitle}
           </span>
           <h1 className="text-4xl md:text-6xl font-bold font-sans text-white mb-8 leading-tight tracking-tight">
             {content.title}
           </h1>
           <p className="text-lg md:text-xl text-offwhite/60 font-kor leading-relaxed font-light">
             {content.description}
           </p>
        </header>

        <figure className="mb-16 relative group">
           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-20 z-10" />
           <img src={content.heroImage} className="w-full aspect-video object-cover rounded-2xl border border-white/5 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Hero" />
           <figcaption className="text-center text-xs text-white/20 mt-4 font-mono uppercase tracking-widest">Image from Onecation Archives</figcaption>
        </figure>

        <div className="space-y-8 font-kor text-offwhite/80 text-lg leading-loose">
           <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-lime first-letter:float-left first-letter:mr-4 first-letter:mt-[-6px]">
             {content.details}
           </p>

           <div className="my-16 p-8 md:p-12 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
             <Quote className="absolute top-6 left-6 text-gold/40 w-12 h-12" />
             <ul className="relative z-10 space-y-6 pt-8">
               {content.features.map((feature, idx) => (
                 <li key={idx} className="flex gap-6 items-start">
                   <span className="text-lime font-bold font-mono text-xl mt-1">0{idx + 1}.</span>
                   <div>
                     <strong className="block text-white text-xl mb-2">{feature.title}</strong>
                     <span className="text-white/50 text-base leading-relaxed">{feature.desc}</span>
                   </div>
                 </li>
               ))}
             </ul>
           </div>

           <div className="grid grid-cols-2 gap-4 my-12">
              {content.imageGrid.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-xl border border-white/5 group aspect-[3/4]">
                   <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" alt="Editorial" />
                </div>
              ))}
           </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
           <h3 className="font-sans font-bold text-2xl text-white mb-8">Explore More Insights</h3>
           <div className="flex justify-center gap-4">
              <Button variant="outline" withArrow onClick={() => window.location.href='mailto:hello@onecation.com'}>Subscribe to O-LAB</Button>
           </div>
        </div>
     </div>
  </div>
);

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
              key={cat}
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