import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="process" ref={containerRef} className="relative py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-20">
        <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase block mb-4">ONE.SYSTEM</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Process of <br/>
          <span className="text-white/30">Synchronization</span>
        </h2>
        <p className="text-offwhite/50 max-w-2xl font-kor text-lg">
           원케이션은 파편화된 디지털 에이전시 시장의 문제를 해결하기 위해 '동기화(Sync)' 프로세스를 도입했습니다. 
           기획, 디자인, 개발, 마케팅이 하나의 유기체처럼 움직입니다.
        </p>
      </div>

      <div className="flex flex-col gap-32 max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Connecting Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-lime via-gold to-transparent opacity-30 hidden md:block" />

        {PROCESS_STEPS.map((step, index) => (
          <div key={step.id} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative">
             {/* Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="md:pl-20"
             >
               <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent font-sans mb-4 block">
                 {step.id}
               </span>
               <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
               <p className="text-offwhite/60 font-kor leading-relaxed mb-6">
                 {step.description}
               </p>
               <div className="flex flex-wrap gap-2">
                 {step.tags.map((tag) => (
                   <span key={tag} className="text-xs text-gold border border-gold/30 px-3 py-1 rounded-full uppercase tracking-wider">
                     {tag}
                   </span>
                 ))}
               </div>
             </motion.div>

             {/* Image Visualization */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
               whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden group"
             >
                <div className="absolute inset-0 bg-lime/10 z-10 mix-blend-color"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10"></div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* HUD Elements */}
                <div className="absolute top-4 right-4 z-20">
                  <ArrowDown className="text-lime animate-bounce" />
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-[10px] text-white/50 font-mono tracking-widest border border-white/20 px-2 py-1 bg-black/50 backdrop-blur">
                  SYNC STATUS: ACTIVE
                </div>
             </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};