import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDATION_SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { GenAIImage } from './GenAIImage';

export const FoundationGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {FOUNDATION_SERVICES.map((item, index) => {
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-glass border border-gold/30 hover:border-lime transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] flex flex-col h-[500px]"
          >
            {/* Blueprint Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            {/* 3D Visual Area (Top Half) */}
            <div className="relative h-[60%] w-full overflow-hidden bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-0 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-obsidian/30 backdrop-blur-sm z-10 pointer-events-none mix-blend-overlay"></div>
              
              <div className="relative z-0 w-full h-full drop-shadow-2xl opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <GenAIImage 
                  prompt={item.image} 
                  alt={item.title} 
                  className="w-full h-full"
                />
              </div>

              {/* Decorative Tech Lines */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent z-20"></div>
            </div>

            {/* Content Area (Bottom Half) */}
            <div className="relative h-[40%] p-8 flex flex-col justify-between bg-obsidian/40 backdrop-blur-md border-t border-white/5 group-hover:bg-obsidian/60 transition-colors z-20">
              <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gold font-sans tracking-tight group-hover:text-lime transition-colors duration-300">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="text-white/30 group-hover:text-lime group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={24} />
                  </div>
                  <p className="text-offwhite/60 font-kor text-sm leading-relaxed">
                    {item.description}
                  </p>
              </div>
              
              {/* Bottom Status Bar */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></div>
                  <span className="text-[10px] text-lime font-mono tracking-widest uppercase">System Online</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
