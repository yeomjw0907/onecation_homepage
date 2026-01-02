import React from 'react';

interface GenAIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "16:9" | "9:16";
}

export const GenAIImage: React.FC<GenAIImageProps> = ({ 
  prompt, 
  alt, 
  className = "", 
  aspectRatio = "1:1" 
}) => {
  // 임시 placeholder - 나중에 실제 이미지로 교체 예정
  return (
    <div 
      className={`relative overflow-hidden bg-gradient-to-br from-obsidian via-white/5 to-obsidian ${className}`}
      title={prompt}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white/20 text-xs font-mono text-center p-4">
          {alt}
        </div>
      </div>
      {/* 그레인 텍스처 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};
