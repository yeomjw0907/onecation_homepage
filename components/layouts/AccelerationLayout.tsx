import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart, TrendingUp, ChevronRight } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton, ContactFormSection } from '../common';
import { GenAIImage } from '../GenAIImage';

export const AccelerationLayout: React.FC<LayoutProps> = ({ content, onBack }) => {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#111] to-transparent transform -skew-x-12 opacity-50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,255,0,0.05),transparent_60%)]"></div>
            </div>

            <div className="relative z-10 pt-24 px-6 md:px-12 max-w-8xl mx-auto flex flex-col">
                <div className="mb-8">
                    <BackButton onClick={onBack} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
                            <span className="text-lime font-bold tracking-[0.2em] uppercase text-sm">{content.subtitle}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-8 leading-[0.9]">
                            {content.title.toUpperCase()}
                        </h1>
                        <p className="text-xl text-offwhite/60 font-kor leading-relaxed max-w-lg border-l-2 border-lime/30 pl-6">
                            {content.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-video rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden border-2 border-white/5 group"
                    >
                        <div className="absolute inset-0 bg-lime/10 mix-blend-overlay z-10"></div>
                        <GenAIImage
                            prompt={content.heroImage}
                            alt="Acceleration Hero"
                            className="w-full h-full grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                            aspectRatio="16:9"
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {content.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-lime/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-lime transition-all duration-500">
                                {idx === 0 ? <Target size={32} /> : idx === 1 ? <BarChart size={32} /> : <TrendingUp size={32} />}
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl font-black text-white/10 mb-4 font-mono group-hover:text-lime/20 transition-colors">0{idx + 1}</div>
                                <h3 className="text-2xl font-bold text-white mb-3 italic">{feature.title}</h3>
                                <p className="text-offwhite/50 text-sm font-kor leading-relaxed">{feature.desc}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 bg-lime w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {content.detailedProcess && (
                <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center">
                            <span className="text-lime text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">Growth Engine</span>
                            <h2 className="text-4xl font-black italic text-white">Execution Process</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                            {content.detailedProcess.map((step, idx) => (
                                <div key={idx} className="flex-1 flex flex-col">
                                    <div className="bg-white/5 border border-lime/10 p-8 rounded-xl h-full relative group hover:bg-lime/5 transition-colors">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-2xl font-black text-lime italic">{step.step}</span>
                                            {idx < 3 && <ChevronRight className="text-white/20 hidden md:block group-hover:text-lime/50 group-hover:translate-x-2 transition-all" />}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 italic">{step.title}</h3>
                                        <p className="text-sm text-offwhite/50 font-kor">{step.description}</p>
                                    </div>
                                    {idx < 3 && <div className="h-8 w-[1px] bg-white/10 mx-auto md:hidden"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ContactFormSection accentColor="lime" />
        </div>
    );
};
