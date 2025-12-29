import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-lime text-obsidian hover:bg-white hover:text-black shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-white/10 backdrop-blur-md text-offwhite border border-white/10 hover:bg-white/20 hover:border-white/30",
    outline: "bg-transparent border border-lime text-lime hover:bg-lime hover:text-obsidian"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight size={18} />}
    </button>
  );
};