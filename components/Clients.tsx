import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../constants';

export const Clients: React.FC = () => {
  return (
    <div className="w-full py-10 overflow-hidden relative border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10"></div>
      
      <div className="flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 80 // Slowed down from 30 to 80
          }}
          className="flex items-center gap-20 whitespace-nowrap px-10"
        >
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
            <span 
              key={index} 
              className="text-lg md:text-xl font-sans font-bold text-white/20 uppercase tracking-widest hover:text-gold/50 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};