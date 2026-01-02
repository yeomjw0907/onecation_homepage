import React from 'react';
import { EditorialLayoutProps } from './types';
import { BackButton } from '../common';
import { GenAIImage } from '../GenAIImage';
import { INSIGHTS } from '../../data/content';

export const EditorialLayout: React.FC<EditorialLayoutProps> = ({ content, onBack, onSelectInsight }) => {
    return (
        <div className="min-h-screen bg-obsidian pt-24 pb-20 font-kor">
            <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
                <BackButton onClick={onBack} className="mb-8" />
                <div className="border-b border-white/5 pb-12 mb-12">
                    <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">O-LAB Archive</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{content.title}</h1>
                    <p className="text-offwhite/60 mt-6 max-w-2xl text-lg">{content.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 group cursor-pointer" onClick={() => onSelectInsight(INSIGHTS[0] || {})}>
                        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 relative">
                            <GenAIImage prompt={content.heroImage} alt="Featured" className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" aspectRatio="16:9" />
                            <div className="absolute top-6 left-6 bg-gold text-obsidian px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Featured</div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{content.features[0]?.title || "The Future of Digital Luxury"}</h2>
                        <p className="text-offwhite/60 text-lg leading-relaxed line-clamp-3">{content.details}</p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-4">Latest Articles</h3>
                        {INSIGHTS.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="group cursor-pointer flex gap-4 items-start" onClick={() => onSelectInsight(item)}>
                                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-white/5">
                                    <GenAIImage prompt={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" aspectRatio="1:1" />
                                </div>
                                <div>
                                    <span className="text-[10px] text-lime font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
                                    <h4 className="text-white font-bold leading-tight group-hover:text-lime transition-colors mb-2">{item.title}</h4>
                                    <span className="text-xs text-white/30">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
