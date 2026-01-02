import { SubPageContent } from '../../types';

export interface LayoutProps {
    slug: string;
    content: SubPageContent;
    onBack: () => void;
    onNavigate?: (slug: string) => void;
}

export interface GalleryLayoutProps extends LayoutProps {
    onSelectProject: (project: any) => void;
}

export interface EditorialLayoutProps extends LayoutProps {
    onSelectInsight: (post: any) => void;
}
