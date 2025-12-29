import React from 'react';
import { motion } from 'framer-motion';
import { INSIGHTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Insights: React.FC = () => {
  return (
    <section id="olab" className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase block mb-4">O-LAB</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Insights & Culture</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm text-offwhite hover:text-lime transition-colors uppercase tracking-widest">
            View All <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-white/5">
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                 <span className="text-xs text-lime font-mono">{item.date}</span>
                 <div className="h-[1px] bg-white/10 flex-grow" />
              </div>
              
              <h3 className="text-xl font-bold text-offwhite group-hover:text-white leading-snug mb-2 font-kor transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};