import { SubPageContent } from '../../types';

export const SYSTEM_SUBPAGES: Record<string, SubPageContent> = {
    'manifesto': {
        translationKey: 'system:manifesto',
        title: 'Manifesto', // Fallback or key placeholder
        subtitle: 'Business All-in-One',
        description: '',
        heroImage: '/images/system/system_manifesto_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/system/system_manifesto_grid1.png',
            '/images/system/system_manifesto_grid2.png',
            '/images/system/system_manifesto_grid3.png'
        ],
        layout: 'manifesto'
    },
    'the-120-alliance': {
        translationKey: 'system:the-120-alliance',
        title: 'The 120 Alliance',
        subtitle: 'Future Network',
        description: '',
        heroImage: '/images/system/system_alliance_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/system/system_alliance_grid1.png',
            '/images/system/system_alliance_grid2.png',
            '/images/system/system_alliance_grid3.png'
        ],
        layout: 'alliance'
    },
    'process': {
        translationKey: 'system:process',
        title: 'Process',
        subtitle: 'The Sync System',
        description: '',
        heroImage: '/images/system/system_process_hero.png',
        features: [
            { title: '', desc: '', category: 'Radar' },
            { title: '', desc: '', category: 'Blueprint' },
            { title: '', desc: '', category: 'Diamond' }
        ],
        details: '',
        imageGrid: [
            '/images/system/system_process_grid1.png',
            '/images/system/system_process_grid2.png',
            '/images/system/system_process_grid3.png'
        ],
        layout: 'process'
    }
};
