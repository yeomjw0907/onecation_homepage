import React from 'react';
import { motion } from 'framer-motion';
import { LayoutProps } from './types';
import { BackButton, ContactFormSection } from '../common';
import { GenAIImage } from '../GenAIImage';

export const CreationLayout: React.FC<LayoutProps> = ({ content, onBack, slug }) => {
    const isBrand = slug === 'brand-experience';
    const textAccent = isBrand ? 'text-gold' : 'text-lime';

    return (
        <div className="bg-obsidian min-h-screen text-white selection:bg-white/20">
            <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <GenAIImage prompt={content.heroImage} className="w-full h-full opacity-40 scale-105" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent"></div>
                    {!isBrand && <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>}
                </div>

                <div className="relative z-10 text-center max-w-5xl">
                    <BackButton onClick={onBack} className="mx-auto mb-8 opacity-50 hover:opacity-100" />
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`inline-block text-xs font-bold tracking-[0.3em] uppercase mb-6 ${textAccent}`}
                    >
                        {content.subtitle}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
                    >
                        {content.title.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-white/60 font-kor max-w-2xl mx-auto leading-relaxed"
                    >
                        {content.description}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className={`w-[1px] h-24 bg-gradient-to-b from-transparent via-${isBrand ? 'gold' : 'lime'} to-transparent animate-pulse`}></div>
                </motion.div>
            </section>

            {content.detailedProcess && (
                <section className="py-24 bg-[#080808] border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center">
                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${textAccent} block mb-4`}>Workflow</span>
                            <h2 className="text-4xl font-bold text-white">Creative Process</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {content.detailedProcess.map((step, idx) => (
                                <div key={idx} className="relative aspect-[3/4] group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                                    <div className="absolute inset-0">
                                        <GenAIImage
                                            prompt={step.image || content.imageGrid[idx % content.imageGrid.length]}
                                            alt={step.title}
                                            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                            aspectRatio="3:4"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                                    </div>

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-10">
                                        <div className="mb-auto">
                                            <span className={`text-5xl font-black ${isBrand ? 'text-gold/20' : 'text-lime/20'} group-hover:opacity-100 transition-opacity`}>{step.step}</span>
                                        </div>
                                        <h3 className={`text-2xl font-bold text-white mb-3 ${isBrand ? 'group-hover:text-gold' : 'group-hover:text-lime'} transition-colors`}>{step.title}</h3>
                                        <p className="text-sm text-offwhite/60 font-kor leading-relaxed group-hover:text-white transition-colors">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="max-w-[1920px] mx-auto border-t border-white/5">
                {content.features.map((feature, idx) => (
                    <div key={idx} className="min-h-[50vh] flex flex-col md:flex-row border-b border-white/5 relative group">
                        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-10 bg-obsidian/90 backdrop-blur-sm md:bg-transparent">
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">{feature.title}</h2>
                                <div className={`w-12 h-1 ${isBrand ? 'bg-gold' : 'bg-lime'} mb-6`}></div>
                                <p className="text-lg text-white/60 font-kor leading-loose max-w-md">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-[40vh] md:h-auto overflow-hidden border-l border-white/5 relative">
                            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                            <GenAIImage
                                prompt={content.imageGrid[idx % content.imageGrid.length]}
                                alt={feature.title}
                                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                aspectRatio="4:3"
                            />
                        </div>
                    </div>
                ))}
            </section>

            <ContactFormSection accentColor={isBrand ? 'gold' : 'lime'} />
        </div>
    );
};
