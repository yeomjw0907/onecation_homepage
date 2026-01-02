import React from 'react';
import { motion } from 'framer-motion';

export const AllianceVisual: React.FC = () => {
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
