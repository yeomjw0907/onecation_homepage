import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  const { content: originalContent, slug, onNavigate } = props;
  const { t } = useTranslation(['system', 'foundation', 'creation', 'acceleration', 'work', 'olab', 'contact', 'common']);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const content = useMemo(() => {
    if (!originalContent.translationKey) return originalContent;

    const key = originalContent.translationKey;
    const features = originalContent.features.map((f, idx) => ({
      ...f,
      title: t(`${key}.features.${idx}.title`, f.title),
      desc: t(`${key}.features.${idx}.desc`, f.desc)
    }));

    return {
      ...originalContent,
      title: t(`${key}.title`, originalContent.title),
      subtitle: t(`${key}.subtitle`, originalContent.subtitle),
      description: t(`${key}.description`, originalContent.description),
      details: t(`${key}.details`, originalContent.details),
      features
    };
  }, [originalContent, t]);

  const renderLayout = () => {
    // Pass the translated content to layouts
    const layoutProps = { ...props, content };

    switch (content.layout) {
      case 'manifesto': return <ManifestoLayout {...layoutProps} />;
      case 'alliance': return <AllianceLayout {...layoutProps} />;
      case 'process': return <ProcessLayout {...layoutProps} />;
      case 'creation': return <CreationLayout {...layoutProps} />;
      case 'split': return <SplitLayout {...layoutProps} />;
      case 'acceleration': return <AccelerationLayout {...layoutProps} />;
      case 'immersive': return <ImmersiveLayout {...layoutProps} />;
      case 'gallery': return <GalleryLayout {...layoutProps} onSelectProject={setSelectedProject} />;
      case 'success-story': return <GalleryLayout {...layoutProps} onSelectProject={setSelectedProject} />;
      case 'editorial': return <EditorialLayout {...layoutProps} onSelectInsight={setSelectedInsight} />;
      case 'contact': return <ContactLayout {...layoutProps} />;
      case 'faq': return <FAQLayout {...layoutProps} />;
      default: return <CreationLayout {...layoutProps} />;
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
