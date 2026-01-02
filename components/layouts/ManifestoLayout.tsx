import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton, AllianceVisual } from '../common';
import { GenAIImage } from '../GenAIImage';

export const ManifestoLayout: React.FC<LayoutProps> = ({ content, onBack }) => {
    return (
        <div className="pt-24 min-h-screen bg-obsidian text-white">
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

            <section className="relative z-10 py-24 border-t border-white/5">
                <AllianceVisual />
            </section>

            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24">
                <div className="flex flex-col gap-32">
                    {content.features.map((feature, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
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

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex-1 w-full"
                            >
                                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-gold/20">
                                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-lime/50 z-20 shadow-[0_0_10px_#ccff00] animate-pulse"></div>
                                    <div className="w-full h-full grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-700">
                                        <GenAIImage
                                            prompt={content.imageGrid[idx % content.imageGrid.length] || content.heroImage}
                                            alt={feature.title}
                                            className="w-full h-full"
                                            aspectRatio="4:3"
                                        />
                                    </div>
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

            <section className="relative z-10 py-32 text-center border-t border-white/5 bg-gradient-to-b from-obsidian to-black">
                <h2 className="text-4xl font-bold text-white mb-12">Ready to Synchronize?</h2>
                <button
                    onClick={() => window.location.href = 'mailto:hello@onecation.com'}
                    className="px-12 py-5 bg-lime text-black font-bold text-xl tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                >
                    Contact Us
                </button>
            </section>
        </div>
    );
};
