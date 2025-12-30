import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Smooth the scroll progress for the electric lime line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="relative py-32 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase block mb-4">ONE.SYSTEM</span>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          The Process of <br/>
          <span className="text-white/20">Synchronization</span>
        </h2>
        <p className="text-offwhite/50 max-w-2xl font-kor text-lg leading-relaxed">
           원케이션은 파편화된 디지털 에이전시 시장의 문제를 해결하기 위해 '동기화(Sync)' 프로세스를 도입했습니다. 
           기획, 디자인, 개발, 마케팅이 하나의 유기체처럼 움직입니다.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Vertical Connector Line (Background - Dim) */}
        <div className="absolute left-6 md:left-[50%] md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />
        
        {/* Dynamic Active Line (Electric Lime - Progress) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-6 md:left-[50%] md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-lime shadow-[0_0_15px_#CCFF00] z-10 hidden md:block"
        />

        <div className="flex flex-col gap-40 md:gap-64">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                
                {/* Timeline Center Point Indicator */}
                <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20">
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className="w-4 h-4 rounded-full bg-lime shadow-[0_0_15px_#CCFF00] border-4 border-obsidian"
                   />
                </div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative md:w-full md:pr-12 pl-12 md:pl-0 z-10`}
                >
                  {/* Massive Outline Typography Background */}
                  <div className="absolute -top-16 -left-4 md:-top-24 md:-left-20 pointer-events-none opacity-20 z-0">
                    <span 
                      className="text-8xl md:text-[16rem] font-black leading-none font-sans text-transparent" 
                      style={{ WebkitTextStroke: '2px rgba(212,175,55,0.4)' }}
                    >
                      {step.id}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                    <p className="text-offwhite/60 font-kor text-lg leading-relaxed mb-8 max-w-xl">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-gold border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full uppercase tracking-widest font-sans">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Image Visualization (Floating Glass Panel) */}
                <motion.div 
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
                  style={{ perspective: "1000px" }}
                >
                   {/* Glass Frame HUD Elements */}
                   <div className="absolute inset-0 border border-white/5 rounded-3xl z-30 pointer-events-none group-hover:border-lime/30 transition-colors duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent z-20 pointer-events-none" />
                   
                   {/* Visual Content */}
                   <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-lime/5 z-10 mix-blend-color opacity-30 group-hover:opacity-10 transition-opacity"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10"></div>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                   </div>
                   
                   {/* HUD Corner Accents */}
                   <div className="absolute top-6 left-6 z-30 opacity-50 group-hover:opacity-100 transition-opacity">
                     <div className="w-4 h-4 border-t border-l border-lime"></div>
                   </div>
                   <div className="absolute bottom-6 right-6 z-30 opacity-50 group-hover:opacity-100 transition-opacity">
                     <div className="w-4 h-4 border-b border-r border-gold"></div>
                   </div>

                   {/* Step Badge */}
                   <div className="absolute top-6 right-6 z-30 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 rounded-md">
                      <span className="text-[10px] text-gold font-mono tracking-widest uppercase">SYNC_NODE_{step.id}</span>
                   </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />
    </section>
  );
};