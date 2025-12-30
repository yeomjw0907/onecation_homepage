import React from 'react';
import { motion } from 'framer-motion';
import { SHOWCASE_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { GenAIImage } from './GenAIImage';

// Duplicate items to create a seamless loop buffer
const MARQUEE_ITEMS = [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];

interface PortfolioCardProps {
  item: typeof SHOWCASE_ITEMS[0];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group relative w-[400px] h-[150px] md:w-[500px] md:h-[188px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/5 bg-white/5 cursor-pointer">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0">
        <GenAIImage 
          prompt={item.image} 
          alt={item.title} 
          className="w-full h-full"
          aspectRatio="16:9"
        />
      </div>
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/40 to-transparent group-hover:via-obsidian/60 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
        <div className="flex flex-col gap-1 transform translate-x-0 transition-transform duration-500">
          <span className="text-[10px] text-lime font-bold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            {item.subtitle}
          </span>
          <h3 className="text-3xl font-bold text-white leading-none tracking-tight group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <div className="w-8 h-[1px] bg-white/20 mt-3 group-hover:w-12 group-hover:bg-lime transition-all duration-500" />
        </div>
      </div>

      {/* Hover Icon */}
      <div className="absolute top-6 right-6 text-lime opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        <ArrowUpRight size={24} />
      </div>
    </div>
  );
};

export const PortfolioShowcase: React.FC = () => {
  return (
    <div className="w-full relative py-20 bg-obsidian overflow-hidden border-b border-white/5">
      {/* Section Header */}
      <div className="text-center mb-12 px-6 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          Selected Works
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
        >
          Curated <span className="text-white/40">Excellence</span>
        </motion.h2>
        <p className="text-offwhite/40 mt-4 font-kor text-sm">
          산업을 선도하는 브랜드들과 함께 만든 성공적인 디지털 경험
        </p>
      </div>

      {/* Gradient Masks for smooth fade in/out at edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-obsidian to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-obsidian to-transparent z-20 pointer-events-none"></div>

      {/* Row 1: Moving Left */}
      <div className="flex mb-6 transition-transform duration-700 ease-out origin-center">
        <motion.div
          className="flex gap-6 pl-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 120, // Much slower speed for elegance
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((item, index) => (
            <PortfolioCard key={`row1-${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moving Right */}
      <div className="flex transition-transform duration-700 ease-out origin-center">
        <motion.div
          className="flex gap-6 pl-6"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            ease: "linear",
            duration: 120, // Much slower speed for elegance
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((item, index) => (
            <PortfolioCard key={`row2-${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>
      
    </div>
  );
};
