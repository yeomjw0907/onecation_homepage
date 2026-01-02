import { SubPageContent } from '../../types';

export const CREATION_SUBPAGES: Record<string, SubPageContent> = {
    'brand-experience': {
        translationKey: 'creation:brand-experience',
        title: 'Brand Experience',
        subtitle: 'Visual Identity',
        description: '',
        heroImage: '/images/creation/creation_brand_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/creation/creation_brand_grid1.png',
            '/images/creation/creation_brand_grid2.png',
            '/images/creation/creation_brand_grid3.png',
            '/images/creation/creation_brand_grid3.png'
        ],
        detailedProcess: [
            { step: '01', title: '', description: '', image: 'Moodboard textures, color palettes, abstract design research, branding workshop, obsidian table' },
            { step: '02', title: '', description: '', image: 'Sketching logo on paper, vector bezier curves on screen, golden ratio grid, minimal' },
            { step: '03', title: '', description: '', image: 'Luxury business cards, stationery mockup, gold foil stamping on black paper' },
            { step: '04', title: '', description: '', image: 'Brand book layout, typography specimen, design system manual, clean swiss style' }
        ],
        layout: 'creation'
    },
    'web-engineering': {
        translationKey: 'creation:web-engineering',
        title: 'Web Engineering',
        subtitle: 'Immersive Web',
        description: '',
        heroImage: '/images/creation/creation_web_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/creation/creation_web_grid1.png',
            '/images/creation/creation_web_grid2.png',
            '/images/creation/creation_web_grid3.png',
            '/images/creation/creation_web_grid3.png'
        ],
        detailedProcess: [
            { step: '01', title: '', description: '', image: 'Wireframe sketches on whiteboard, user flow diagram, sticky notes, UX research' },
            { step: '02', title: '', description: '', image: 'High fidelity website UI design on monitor, dark mode, futuristic interface, 3D elements' },
            { step: '03', title: '', description: '', image: 'Code on screen, React components, matrix rain style, developer typing, neon glow' },
            { step: '04', title: '', description: '', image: 'Server rack lights, speed test graph, green checkmarks, rocket launch abstract' }
        ],
        layout: 'creation'
    },
    'app-platform': {
        translationKey: 'creation:app-platform',
        title: 'App & Platform',
        subtitle: 'Robust Ecosystem',
        description: '',
        heroImage: '/images/creation/creation_app_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/creation/creation_app_grid1.png',
            '/images/creation/creation_app_grid2.png',
            '/images/creation/creation_app_grid3.png',
            '/images/creation/creation_app_grid3.png'
        ],
        detailedProcess: [
            { step: '01', title: '', description: '', image: 'System architecture diagram, server nodes, database schema, blueprint style' },
            { step: '02', title: '', description: '', image: 'Mobile app interface screens floating in air, app flow, prototyping' },
            { step: '03', title: '', description: '', image: 'Mobile phone showing code, flutter logo abstract, developer desk setup' },
            { step: '04', title: '', description: '', image: 'App store launch button, mobile phone with success screen, confetti abstract' }
        ],
        layout: 'creation'
    }
};
