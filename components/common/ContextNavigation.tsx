import React, { useMemo } from 'react';
import { NAV_ITEMS } from '../../data/navigation';

interface ContextNavigationProps {
    currentSlug: string;
    onNavigate?: (slug: string) => void;
}

export const ContextNavigation: React.FC<ContextNavigationProps> = ({ currentSlug, onNavigate }) => {
    const context = useMemo(() => {
        for (const item of NAV_ITEMS) {
            const found = item.children.find(child => child.slug === currentSlug);
            if (found) {
                return {
                    category: item.label,
                    siblings: item.children
                };
            }
        }
        return null;
    }, [currentSlug]);

    if (!context || !onNavigate) return null;

    return (
        <>
            <div className="fixed top-[72px] left-0 right-0 z-40 bg-obsidian/80 backdrop-blur-md border-b border-white/5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex items-center px-6 h-12 gap-6 min-w-max">
                    <span className="text-gold text-[10px] font-bold tracking-widest uppercase border-r border-white/10 pr-6 mr-2 sticky left-0 bg-[#080808]/95 backdrop-blur-md h-full flex items-center z-10 shadow-[5px_0_15px_-5px_rgba(0,0,0,0.8)]">
                        {context.category}
                    </span>
                    {context.siblings.map((child, idx) => {
                        const isActive = child.slug === currentSlug;
                        return (
                            <button
                                key={idx}
                                onClick={() => onNavigate(child.slug!)}
                                className={`text-[11px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${isActive ? 'text-lime font-bold' : 'text-white/40 hover:text-white'}`}
                            >
                                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_5px_#ccff00]" />}
                                {child.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    );
};
