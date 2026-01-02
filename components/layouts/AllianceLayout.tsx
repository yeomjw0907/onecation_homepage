import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Network } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton } from '../common';
import { GenAIImage } from '../GenAIImage';

export const AllianceLayout: React.FC<LayoutProps> = ({ content, onBack }) => {
    return (
        <div className="bg-obsidian min-h-screen text-white">
            <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 md:opacity-60">
                    <GenAIImage prompt={content.heroImage} alt="Neural Network" className="w-full h-full" aspectRatio="16:9" />
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <BackButton onClick={onBack} className="absolute top-[-100px] left-0" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-6 block glow-lime">{content.subtitle}</span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold via-white to-gold">
                            {content.title}
                        </h1>
                        <p className="text-lg md:text-xl text-offwhite/70 font-kor font-light leading-relaxed">
                            {content.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 md:col-span-2 bg-white/5 border border-gold/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-lime/50 transition-colors duration-500"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-lime mb-6 border border-white/10 group-hover:bg-lime group-hover:text-black transition-colors">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.features[0].title}</h3>
                            <p className="text-offwhite/60 font-kor text-sm md:text-base">{content.features[0].desc}</p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-48 md:w-64 h-48 md:h-64 opacity-10 md:opacity-20 group-hover:opacity-40 transition-opacity">
                            <GenAIImage prompt={content.imageGrid[0]} alt="3D Icon" className="w-full h-full" aspectRatio="1:1" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center text-gold mb-6 border border-white/10">
                                <Code size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{content.features[1].title}</h3>
                            <p className="text-offwhite/60 font-kor text-sm">{content.features[1].desc}</p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 md:w-40 md:h-40 opacity-10 md:opacity-20">
                            <GenAIImage prompt={content.imageGrid[1]} alt="3D Icon" className="w-full h-full" aspectRatio="1:1" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-black/50 rounded-2xl flex items-center justify-center text-gold mb-6 border border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                <Network size={26} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{content.features[2].title}</h3>
                            <p className="text-offwhite/60 font-kor text-sm md:text-base leading-relaxed">{content.features[2].desc}</p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 md:w-40 md:h-40 opacity-10 md:opacity-20">
                            <GenAIImage prompt={content.imageGrid[2]} alt="3D Icon" className="w-full h-full" aspectRatio="1:1" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-2 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-6"
                    >
                        <div className="text-center sm:text-left">
                            <h4 className="text-5xl md:text-6xl font-bold text-white mb-1.5 tracking-tighter">120+</h4>
                            <p className="text-lime uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold whitespace-nowrap">Active Experts</p>
                        </div>
                        <div className="hidden sm:block h-16 w-[1px] bg-white/10"></div>
                        <div className="text-center sm:text-left">
                            <div className="flex flex-col items-center sm:items-start">
                                <span className="text-2xl md:text-3xl font-bold text-white/50 leading-none">Top</span>
                                <h4 className="text-5xl md:text-6xl font-bold text-white mb-1.5 tracking-tighter">1%</h4>
                            </div>
                            <p className="text-lime uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold whitespace-nowrap">Talent Pool</p>
                        </div>
                        <div className="hidden sm:block h-16 w-[1px] bg-white/10"></div>
                        <div className="text-center sm:text-left">
                            <h4 className="text-5xl md:text-6xl font-bold text-white mb-1.5 tracking-tighter">0%</h4>
                            <p className="text-lime uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold whitespace-nowrap">Overhead</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
