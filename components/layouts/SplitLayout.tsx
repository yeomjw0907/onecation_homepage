import React from 'react';
import { LayoutProps } from './types';
import { BackButton, ContactFormSection } from '../common';
import { GenAIImage } from '../GenAIImage';

export const SplitLayout: React.FC<LayoutProps> = ({ content, onBack }) => (
    <div className="min-h-screen bg-obsidian flex flex-col pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
            <div className="p-8 md:p-16 flex flex-col justify-center bg-white/[0.02] border-r border-white/5 relative">
                <BackButton onClick={onBack} className="absolute top-8 left-8" />
                <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4">{content.subtitle}</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {content.title}
                </h1>
                <p className="text-offwhite/60 text-lg font-kor leading-relaxed max-w-lg">
                    {content.description}
                </p>
            </div>
            <div className="relative h-full min-h-[400px]">
                <GenAIImage prompt={content.heroImage} className="absolute inset-0 w-full h-full grayscale opacity-60" alt="Hero" aspectRatio="4:3" />
                <div className="absolute inset-0 bg-gradient-to-l from-obsidian/50 to-transparent"></div>
            </div>
        </div>

        <section className="bg-obsidian border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {content.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-lime/30 transition-colors">
                            <span className="text-gold text-2xl font-bold mb-4 block">0{idx + 1}</span>
                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                            <p className="text-offwhite/50 text-sm font-kor">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {content.detailedProcess && (
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-lime text-xs font-bold uppercase tracking-[0.2em] block mb-4">Our Approach</span>
                        <h2 className="text-4xl font-bold text-white">Consulting Process</h2>
                    </div>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                        {content.detailedProcess.map((step, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-gold font-bold text-xs z-10">
                                    {step.step}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-xl border border-white/5 group-hover:border-gold/30 transition-all">
                                    <h3 className="font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-offwhite/50 font-kor">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        <ContactFormSection accentColor="gold" />
    </div>
);
