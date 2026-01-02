import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton } from '../common';
import { Button } from '../ui/Button';

export const FAQLayout: React.FC<LayoutProps> = ({ content, onBack }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-obsidian pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <BackButton onClick={onBack} className="mb-8" />
                <div className="text-center mb-16">
                    <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{content.subtitle}</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.title}</h1>
                    <p className="text-offwhite/60 text-lg">{content.description}</p>
                </div>

                <div className="space-y-4">
                    {content.features.map((item, idx) => (
                        <div key={idx} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] text-lime font-bold uppercase tracking-widest border border-lime/30 px-2 py-1 rounded bg-lime/10">{item.category}</span>
                                    <span className="font-bold text-white text-lg">{item.title}</span>
                                </div>
                                <ChevronDown className={`text-white/40 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="px-6 pb-6 pt-0 pl-20">
                                            <p className="text-offwhite/60 font-kor leading-relaxed border-l-2 border-lime/30 pl-4">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-white/5 border border-white/10 rounded-3xl p-10">
                    <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                    <p className="text-offwhite/50 mb-8">We are here to help you.</p>
                    <Button variant="primary" onClick={() => window.location.href = 'mailto:hello@onecation.com'}>Contact Support</Button>
                </div>
            </div>
        </div>
    );
};
