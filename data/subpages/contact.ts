import { SubPageContent } from '../../types';

export const CONTACT_SUBPAGES: Record<string, SubPageContent> = {
    'start-project': {
        translationKey: 'contact:start-project',
        title: 'Start Project',
        subtitle: 'Begin Your Journey',
        description: '',
        heroImage: '/images/contact/contact_start_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/contact/contact_start_grid1.png',
            '/images/contact/contact_start_grid2.png',
            '/images/contact/contact_start_grid3.png'
        ],
        layout: 'contact'
    },
    'recruit': {
        translationKey: 'contact:recruit',
        title: 'Recruit',
        subtitle: 'Join the Alliance',
        description: '',
        heroImage: '/images/contact/contact_careers_hero.png',
        features: [
            { title: '', desc: '' },
            { title: '', desc: '' },
            { title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/contact/contact_careers_grid1.png',
            '/images/contact/contact_careers_grid2.png',
            '/images/contact/contact_careers_grid3.png'
        ],
        layout: 'contact'
    },
    'faq': {
        translationKey: 'contact:faq',
        title: 'FAQ',
        subtitle: 'Questions & Answers',
        description: '',
        heroImage: '/images/contact/contact_faq_hero.png',
        features: [
            { category: '개발', title: '', desc: '' },
            { category: '개발', title: '', desc: '' },
            { category: '개발', title: '', desc: '' },
            { category: '개발', title: '', desc: '' },
            { category: '마케팅', title: '', desc: '' },
            { category: '마케팅', title: '', desc: '' },
            { category: '마케팅', title: '', desc: '' },
            { category: '디자인', title: '', desc: '' },
            { category: '디자인', title: '', desc: '' },
            { category: '디자인', title: '', desc: '' },
            { category: '기타', title: '', desc: '' },
            { category: '기타', title: '', desc: '' },
            { category: '기타', title: '', desc: '' }
        ],
        details: '',
        imageGrid: [
            '/images/contact/contact_start_grid1.png',
            '/images/contact/contact_faq_grid1.png',
            '/images/contact/contact_faq_grid2.png',
            '/images/contact/contact_faq_grid3.png'
        ],
        layout: 'faq'
    }
};
