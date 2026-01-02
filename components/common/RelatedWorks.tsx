import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GenAIImage } from '../GenAIImage';
import { SHOWCASE_ITEMS } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

interface RelatedWorksProps {
    currentSlug: string;
    onSelectProject: (project: any) => void;
}

export const RelatedWorks: React.FC<RelatedWorksProps> = ({ currentSlug, onSelectProject }) => {
    const { t } = useTranslation('common');
    const relatedProjects = useMemo(() => {
        let filtered = SHOWCASE_ITEMS.filter(item =>
            item.relatedSlugs?.includes(currentSlug)
        );

        if (filtered.length < 2) {
            const remaining = SHOWCASE_ITEMS.filter(item => !filtered.includes(item));
            const fill = remaining.slice(0, 3 - filtered.length);
            filtered = [...filtered, ...fill];
        }

        return filtered.slice(0, 3);
    }, [currentSlug]);

    if (relatedProjects.length === 0) return null;

    return (
        <section className="relative z-10 py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <span className="text-lime text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                            {t('relatedWorks.subtitle')}
                        </span>
                        <h3 className="text-3xl font-bold text-white">
                            {t('relatedWorks.title')}
                        </h3>
                    </div>
                    <p className="text-offwhite/40 text-xs font-kor hidden md:block">
                        {t('relatedWorks.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => onSelectProject({
                                ...project,
                                client: project.title,
                                category: project.subtitle
                            })}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-white/5 bg-white/5">
                                <GenAIImage
                                    prompt={project.image}
                                    alt={project.title}
                                    className="w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                    aspectRatio="4:3"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 text-white/50 group-hover:text-lime group-hover:border-lime transition-all">
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">{project.title}</h4>
                                <p className="text-offwhite/40 text-xs uppercase tracking-wider">{project.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
