import { SubPageContent } from '../../types';

export const WORK_SUBPAGES: Record<string, SubPageContent> = {
    'for-startups': {
        translationKey: 'work:for-startups',
        title: 'For Startups',
        subtitle: 'Target B References',
        description: '',
        heroImage: '/images/work/work_startup_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/work/work_startup_grid1.png',
            '/images/work/work_startup_grid2.png',
            '/images/work/work_startup_grid3.png'
        ],
        layout: 'gallery'
    },
    'for-enterprise': {
        translationKey: 'work:for-enterprise',
        title: 'For Enterprise',
        subtitle: 'Target A References',
        description: '',
        heroImage: '/images/work/work_enterprise_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/work/work_enterprise_grid1.png',
            '/images/work/work_enterprise_grid2.png',
            '/images/work/work_enterprise_grid3.png'
        ],
        layout: 'gallery'
    },
    'success-stories': {
        translationKey: 'work:success-stories',
        title: 'Success Stories',
        subtitle: 'Case Studies',
        description: '',
        heroImage: '/images/work/work_cases_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/work/work_cases_grid1.png',
            '/images/work/work_cases_grid2.png',
            '/images/work/work_cases_grid3.png'
        ],
        layout: 'gallery'
    }
};
