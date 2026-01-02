import { SubPageContent } from '../../types';

export const OLAB_SUBPAGES: Record<string, SubPageContent> = {
    'originals': {
        translationKey: 'olab:originals',
        title: 'Originals',
        subtitle: 'Product Gallery',
        description: '',
        heroImage: '/images/olab/olab_rd_hero.png',
        features: [
            { title: '', desc: '', category: 'Web/App' },
            { title: '', desc: '', category: 'Digital Art' },
            { title: '', desc: '', category: 'Tech' }
        ],
        details: '',
        imageGrid: [
            '/images/olab/olab_rd_grid1.png',
            '/images/olab/olab_rd_grid2.png',
            '/images/olab/olab_rd_grid3.png',
        ],
        layout: 'gallery'
    },
    'trend-insights': {
        translationKey: 'olab:trend-insights',
        title: 'Trend Insights',
        subtitle: 'Insight Archive',
        description: '',
        heroImage: '/images/olab/olab_insights_hero.png',
        features: [
            { title: '', desc: '', category: 'Tech' },
            { title: '', desc: '', category: 'Design' },
            { title: '', desc: '', category: 'Design' },
            { title: '', desc: '', category: 'Strategy' }
        ],
        details: '',
        imageGrid: [
            '/images/olab/olab_insights_grid1.png',
            '/images/olab/olab_insights_grid2.png',
            '/images/olab/olab_insights_grid3.png',
            '/images/olab/olab_insights_grid3.png'
        ],
        layout: 'editorial'
    },
    'culture-log': {
        translationKey: 'olab:culture-log',
        title: 'Culture Log',
        subtitle: 'Team Archive',
        description: '',
        heroImage: '/images/olab/olab_team_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/olab/olab_team_grid1.png',
            '/images/olab/olab_team_grid2.png',
            '/images/olab/olab_team_grid3.png'
        ],
        layout: 'editorial'
    }
};
