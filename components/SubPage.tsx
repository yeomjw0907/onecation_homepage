import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SubPageContent } from '../types';
import {
  ContextNavigation,
  RelatedWorks,
  WorkDetailView,
  InsightDetailView
} from './common';
import {
  ManifestoLayout,
  AllianceLayout,
  ProcessLayout,
  CreationLayout,
  SplitLayout,
  AccelerationLayout,
  ImmersiveLayout,
  GalleryLayout,
  EditorialLayout,
  ContactLayout,
  FAQLayout
} from './layouts';

interface SubPageProps {
  slug: string;
  content: SubPageContent;
  onBack: () => void;
  onNavigate?: (slug: string) => void;
}

export const SubPage: React.FC<SubPageProps> = (props) => {
  const { content, slug, onNavigate } = props;
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const renderLayout = () => {
    switch (content.layout) {
      case 'manifesto': return <ManifestoLayout {...props} />;
      case 'alliance': return <AllianceLayout {...props} />;
      case 'process': return <ProcessLayout {...props} />;
      case 'creation': return <CreationLayout {...props} />;
      case 'split': return <SplitLayout {...props} />;
      case 'acceleration': return <AccelerationLayout {...props} />;
      case 'immersive': return <ImmersiveLayout {...props} />;
      case 'gallery': return <GalleryLayout {...props} onSelectProject={setSelectedProject} />;
      case 'success-story': return <GalleryLayout {...props} onSelectProject={setSelectedProject} />;
      case 'editorial': return <EditorialLayout {...props} onSelectInsight={setSelectedInsight} />;
      case 'contact': return <ContactLayout {...props} />;
      case 'faq': return <FAQLayout {...props} />;
      default: return <CreationLayout {...props} />;
    }
  };

  return (
    <>
      <ContextNavigation currentSlug={slug} onNavigate={onNavigate} />
      {renderLayout()}

      <AnimatePresence>
        {selectedProject && (
          <WorkDetailView project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
        {selectedInsight && (
          <InsightDetailView post={selectedInsight} onClose={() => setSelectedInsight(null)} />
        )}
      </AnimatePresence>

      {!['contact', 'faq', 'gallery', 'editorial', 'manifesto', 'alliance'].includes(content.layout) && (
        <RelatedWorks currentSlug={slug} onSelectProject={setSelectedProject} />
      )}
    </>
  );
};
