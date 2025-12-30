import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Layers, Zap } from 'lucide-react';
import { BENTO_ITEMS } from '../constants';
import { BentoItem } from '../types';
import { GenAIImage } from './GenAIImage';

const BentoCard: React.FC<{ item: BentoItem; index: number }> = ({ item, index }) => {
  // Determine grid span classes
  const colSpanClass = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
  }[item.colSpan];

  const rowSpanClass = item.rowSpan === 2 ? 'md:row-span-2 h-full min-h-[350px] md:min-h-[400px]' : 'min-h-[200px] md:min-h-[240px]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl bg-glass border border-glass-border p-6 md:p-8 hover:border-white/20 transition-all duration-500 ${colSpanClass} ${rowSpanClass}`}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between mb-4">
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black/50 text-lime transition-transform duration-300 ${item.hasArrow ? 'group-hover:rotate-45 group-hover:bg-lime group-hover:text-black group-hover:border-lime' : ''}`}>
               {item.hasArrow ? <ArrowUpRight size={14} /> : getIcon(item.category)}
            </span>
            {item.category && (
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 border border-white/5 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                {item.category}
              </span>
            )}
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300 font-sans drop-shadow-md">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm font-medium text-white/70 mb-4">{item.subtitle}</p>
        </div>

        {item.description && (
          <p className="text-xs md:text-sm text-offwhite/60 font-kor leading-relaxed max-w-[95%] md:max-w-[90%] mt-auto drop-shadow-sm">
            {item.description}
          </p>
        )}
      </div>

      {/* Image Background (if exists) */}
      {item.image && (
        <div className="absolute inset-0 -z-0">
           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent z-[1]" />
           <div className="absolute inset-0 bg-obsidian/40 z-[1] group-hover:bg-obsidian/20 transition-colors duration-500" />
           <GenAIImage 
            prompt={item.image} 
            alt={item.title} 
            className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
            aspectRatio="1:1"
          />
        </div>
      )}
    </motion.div>
  );
};

const getIcon = (category?: string) => {
  switch (category) {
    case 'Core': return <Layers size={14} />;
    case 'Philosophy': return <Zap size={14} />;
    default: return <Code size={14} />;
  }
};

export const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto grid-flow-dense">
      {BENTO_ITEMS.map((item, index) => (
        <BentoCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};