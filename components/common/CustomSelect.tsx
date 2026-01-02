import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CustomSelectProps {
    options: string[];
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    accentColor?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    placeholder = "선택해주세요",
    value,
    onChange,
    accentColor = 'lime'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const borderColor = isOpen
        ? (accentColor === 'gold' ? 'border-gold' : 'border-lime')
        : 'border-white/10';

    const activeOptionClass = accentColor === 'gold' ? 'bg-gold/10 text-gold' : 'bg-lime/10 text-lime';

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-black/20 border ${borderColor} rounded-xl p-4 text-left flex justify-between items-center transition-colors duration-300 text-white focus:outline-none`}
            >
                <span className={value ? "text-white font-medium" : "text-white/30"}>{value || placeholder}</span>
                <ChevronDown size={18} className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 py-2 max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-white/5 ${value === option ? activeOptionClass : 'text-white/70'}`}
                            >
                                {option}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
