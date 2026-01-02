import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GalleryLayoutProps } from './types';
import { BackButton } from '../common';
import { GenAIImage } from '../GenAIImage';

export const GalleryLayout: React.FC<GalleryLayoutProps> = ({ content, onBack, onSelectProject }) => {
    const [filter, setFilter] = useState('All');

    const categories = useMemo(() => {
        const cats = new Set(content.features.map(f => f.category).filter(Boolean));
        return ['All', ...Array.from(cats)];
    }, [content.features]);

    const projects = useMemo(() => {
        const baseItems = content.imageGrid.map((img, i) => ({
            id: i,
            image: img,
            title: content.features[i % content.features.length].title,
            client: "Original Partner",
            category: content.features[i % content.features.length].category || "Tech",
            aspect: i % 3 === 0 ? 'aspect-[4/5]' : i % 2 === 0 ? 'aspect-video' : 'aspect-square'
        }));
        return baseItems;
    }, [content.imageGrid, content.features]);

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <>
            <div className="bg-obsidian min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
                    <BackButton onClick={onBack} className="mb-8" />
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">{content.title}</h1>
                                <span className="text-lime text-sm tracking-[0.2em] uppercase font-bold">{content.subtitle}</span>
                            </motion.div>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat as string)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-white text-black' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-[1920px] mx-auto px-6">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="break-inside-avoid relative group cursor-pointer"
                                onClick={() => onSelectProject(project)}
                            >
                                <div className={`w-full rounded-2xl overflow-hidden bg-white/5 relative ${project.aspect}`}>
                                    <GenAIImage prompt={project.image} alt={project.title} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" aspectRatio={project.aspect === 'aspect-square' ? '1:1' : project.aspect === 'aspect-video' ? '16:9' : '3:4'} />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                                        <div className="relative z-10">
                                            <span className="text-[10px] text-lime font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
