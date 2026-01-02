import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton } from '../common';
import { GenAIImage } from '../GenAIImage';
import { Button } from '../ui/Button';

export const ImmersiveLayout: React.FC<LayoutProps> = ({ content, onBack }) => (
    <div className="bg-obsidian min-h-screen">
        <div className="h-screen w-full relative overflow-hidden flex items-end p-8 md:p-16">
            <div className="absolute inset-0 w-full h-full opacity-60 scale-105">
                <GenAIImage prompt={content.heroImage} alt="Hero" className="w-full h-full" aspectRatio="16:9" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90"></div>
            <div className="relative z-10 w-full">
                <BackButton onClick={onBack} className="absolute top-[-80vh] left-0 text-white" />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-[12vw] leading-none font-bold text-white tracking-tighter mix-blend-overlay opacity-80">
                        {content.title.toUpperCase()}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-end mt-8 border-t border-white/20 pt-8">
                        <span className="text-gold text-xl tracking-widest uppercase">{content.subtitle}</span>
                        <p className="max-w-xl text-offwhite/80 text-lg md:text-xl font-kor text-right mt-4 md:mt-0">
                            {content.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-10 text-lime animate-bounce">
                <ArrowDown size={32} />
            </div>

            <div className="space-y-32">
                {content.features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6">
                                {feature.title}
                            </h2>
                            <p className="text-xl text-offwhite/60 font-kor leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                        <div className="flex-1 w-full aspect-square relative rounded-full overflow-hidden border border-white/10">
                            <div className="absolute inset-0 w-full h-full hover:scale-110 transition-transform duration-700">
                                <GenAIImage
                                    prompt={content.imageGrid[idx % content.imageGrid.length] || content.heroImage}
                                    alt="Feature"
                                    className="w-full h-full"
                                    aspectRatio="1:1"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32 text-center">
                <p className="text-2xl text-white mb-8 font-light">"{content.details}"</p>
                <Button variant="outline" withArrow onClick={() => window.location.href = 'mailto:hello@onecation.com'}>Start Creating</Button>
            </div>
        </section>
    </div>
);
