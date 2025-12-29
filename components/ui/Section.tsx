import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-6 md:px-8 py-20 ${className}`}>
      {children}
    </section>
  );
};