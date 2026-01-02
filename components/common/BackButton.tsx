import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
    onClick: () => void;
    className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, className = '' }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 text-white/50 hover:text-lime uppercase tracking-widest text-xs transition-colors z-20 ${className}`}
    >
        <ArrowLeft size={16} /> Back
    </button>
);
