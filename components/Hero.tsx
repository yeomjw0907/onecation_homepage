import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface HeroProps {
  onNavigate?: (slug: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-TtSaAYJd2xtxethjAYfSQe3m/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="Onecation 3D Hero"
        />
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

        {/* Vignette Overlay for better text integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-transparent pointer-events-none"></div>

        {/* Mask to hide Spline Logo (Bottom Right) */}
        <div className="absolute bottom-0 right-0 w-36 h-14 bg-obsidian z-10"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center pointer-events-auto mt-20"
        >
          <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full bg-black/40 backdrop-blur-md text-xs text-gold tracking-[0.2em] mb-8 font-sans uppercase shadow-lg">
            Luxury Tech Agency
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 leading-tight drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            Design for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-offwhite via-white to-white/50 filter drop-shadow-lg">
              Visionaries
            </span>
          </h1>
          
          <p className="max-w-xl mx-auto text-offwhite/90 text-base md:text-lg mb-10 font-kor leading-relaxed font-light drop-shadow-md bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
            원케이션은 럭셔리 브랜드의 디지털 경험을 재정의합니다.<br className="hidden md:block"/>
            기술과 미학의 완벽한 조화를 통해 독보적인 가치를 창조하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              withArrow 
              className="shadow-2xl"
              onClick={() => onNavigate?.('start-project')}
            >
              Start Project
            </Button>
            <Button variant="secondary" className="backdrop-blur-xl bg-white/5 hover:bg-white/10">
              View Showreel
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/50 drop-shadow-md">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold to-gold/0 shadow-[0_0_10px_#D4AF37]"></div>
      </motion.div>
    </section>
  );
};