import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton } from '../common';
import { GenAIImage } from '../GenAIImage';

export const ProcessLayout: React.FC<LayoutProps> = ({ content, onBack }) => {
    return (
        <div className="bg-obsidian min-h-screen text-white">
            <section className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full opacity-60">
                        <GenAIImage prompt={content.heroImage} alt="Process Hero" className="w-full h-full" aspectRatio="16:9" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl px-6">
                    <BackButton onClick={onBack} className="absolute top-[-100px] left-8" />
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-white"
                    >
                        The <span className="text-gold">Sync</span> System
                    </motion.h1>
                    <p className="text-xl text-offwhite/60 font-kor max-w-2xl mx-auto">
                        {content.description}
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 space-y-32">
                {content.features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-lime text-lime font-mono font-bold text-xl">
                                    0{idx + 1}
                                </span>
                                <span className="h-[1px] flex-grow bg-white/10"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{feature.title}</h2>
                            <p className="text-offwhite/60 text-lg font-kor leading-relaxed mb-8">{feature.desc}</p>

                            <div className="inline-flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-widest border border-gold/30 px-4 py-2 rounded bg-gold/5">
                                <Zap size={12} /> System Status: Online
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 relative aspect-square md:aspect-[4/3] w-full"
                        >
                            <div className="absolute inset-0 border border-white/10 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                                <div className="w-full h-full opacity-80 mix-blend-screen">
                                    <GenAIImage
                                        prompt={content.imageGrid[idx % content.imageGrid.length]}
                                        alt={feature.title}
                                        className="w-full h-full"
                                        aspectRatio="4:3"
                                    />
                                </div>

                                <div className="absolute inset-0 border border-white/5 m-4 rounded-xl pointer-events-none">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-lime"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-lime"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-lime"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-lime"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </section>
        </div>
    );
};
