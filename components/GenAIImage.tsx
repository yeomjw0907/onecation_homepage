import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

interface GenAIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "16:9" | "9:16";
}

// Deterministic Abstract Art Generator based on prompt string
// API 비용 없는 순수 CSS/Code 아트워크
const AbstractArt: React.FC<{ prompt: string; className: string }> = ({ prompt, className }) => {
  // Generate a deterministic number from the prompt
  const seed = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < prompt.length; i++) {
      hash = prompt.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }, [prompt]);

  // Art Styles - Optimized for Obsidian/Gold/Lime Theme
  const styles = [
    // 1. Golden Nebula (Obsidian base)
    {
      bg: "bg-obsidian",
      element: (
        <div className="absolute inset-0 opacity-60 mix-blend-screen">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,#D4AF37_180deg,transparent_360deg)] animate-[spin_20s_linear_infinite] opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.2),transparent_70%)]"></div>
        </div>
      )
    },
    // 2. Lime Cyber Grid (Tech feel)
    {
      bg: "bg-[#050505]",
      element: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-lime/10 blur-[50px] rounded-full"></div>
        </div>
      )
    },
    // 3. Obsidian Flow (Luxury dark)
    {
      bg: "bg-black",
      element: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[200%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-12 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(212,175,55,0.15),transparent_50%)]"></div>
        </div>
      )
    },
    // 4. Digital Noise (Texture)
    {
      bg: "bg-obsidian",
      element: (
        <div className="absolute inset-0">
           <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-lime/5 via-transparent to-gold/5"></div>
        </div>
      )
    }
  ];

  const selectedStyle = styles[seed % styles.length];

  return (
    <div className={`relative overflow-hidden w-full h-full ${selectedStyle.bg} ${className}`}>
      {selectedStyle.element}
      {/* Universal Grain Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export const GenAIImage: React.FC<GenAIImageProps> = ({ 
  prompt, 
  alt, 
  className = "", 
  aspectRatio = "1:1" 
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // No API Logic - Only Local Cache Read
  useEffect(() => {
    if (!isVisible) return;

    const cacheKey = `onecation_img_${btoa(prompt + aspectRatio)}`;
    
    // Try to load from Cache first (Free)
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setImageUrl(cached);
    }
    // If no cache, we simply stay null and render AbstractArt (Free)
  }, [isVisible, prompt, aspectRatio]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-white/5 ${className}`}>
      {imageUrl ? (
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        // Fallback: Deterministic Luxury Abstract Art (Zero Cost)
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full"
        >
          <AbstractArt prompt={prompt} className="w-full h-full" />
        </motion.div>
      )}
    </div>
  );
};
