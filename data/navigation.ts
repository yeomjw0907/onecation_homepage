import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
    {
        id: 'system',
        label: 'ONE.SYSTEM',
        subLabel: '회사소개',
        href: '#system',
        children: [
            { label: 'Manifesto', desc: '비전 선포 (Business All-in-One)', slug: 'manifesto' },
            { label: 'The 120 Alliance', desc: '코어 팀과 120명 전문가 협업 시스템', slug: 'the-120-alliance' },
            { label: 'Process', desc: '동기화(Sync) 작업 방식 소개', slug: 'process' }
        ]
    },
    {
        id: 'foundation',
        label: 'FOUNDATION',
        subLabel: '기획·컨설팅',
        href: '#foundation',
        children: [
            { label: 'Business Planning', desc: '사업계획서, IR 피치덱', slug: 'business-planning' },
            { label: 'Gov. Strategy', desc: '정부지원사업 합격 전략 컨설팅', slug: 'gov-strategy' },
            { label: 'Tech Consulting', desc: '개발 전 아키텍처/기획 설계 (CTO 대행)', slug: 'tech-consulting' }
        ]
    },
    {
        id: 'creation',
        label: 'CREATION',
        subLabel: '디자인·개발',
        href: '#creation',
        children: [
            { label: 'Brand Experience', desc: '로고(CI/BI), 브랜드 아이덴티티', slug: 'brand-experience' },
            { label: 'Web Engineering', desc: '반응형 웹, 기업 홈페이지', slug: 'web-engineering' },
            { label: 'App & Platform', desc: 'iOS/Android 앱, 플랫폼, SaaS 구축', slug: 'app-platform' }
        ]
    },
    {
        id: 'acceleration',
        label: 'ACCELERATION',
        subLabel: '마케팅·성장',
        href: '#acceleration',
        children: [
            { label: 'SEO & Data', desc: '검색엔진 최적화, 데이터 분석', slug: 'seo-data' },
            { label: 'Performance', desc: '퍼포먼스 마케팅 (ROAS 최적화)', slug: 'performance' },
            { label: 'Viral & Content', desc: 'SNS, 블로그, 콘텐츠 마케팅', slug: 'viral-content' }
        ]
    },
    {
        id: 'work',
        label: 'WORK',
        subLabel: '포트폴리오',
        href: '#work',
        children: [
            {
                label: 'For Startups',
                desc: '혁신/트렌드 중심 레퍼런스',
                slug: 'for-startups',
                image: 'A futuristic rocket taking off made of geometric black and gold polygons, upward momentum, minimalist.'
            },
            {
                label: 'For Enterprise',
                desc: '신뢰/규모 중심 레퍼런스',
                slug: 'for-enterprise',
                image: 'A massive futuristic skyscraper city at night, glowing windows, corporate power, obsidian and glass texture.'
            },
            {
                label: 'Success Stories',
                desc: '심층 케이스 스터디',
                slug: 'success-stories',
                image: '3D data visualization graph rising upwards, made of glowing gold particles in a dark void.'
            }
        ]
    },
    {
        id: 'olab',
        label: 'O-LAB',
        subLabel: '인사이트',
        href: '#olab',
        children: [
            {
                label: 'Originals',
                desc: '자체 개발 서비스/앱 실험실',
                slug: 'originals',
                image: 'Abstract 3D laboratory equipment, glass beakers with glowing lime liquid, floating in zero gravity dark space.'
            },
            {
                label: 'Trend Insights',
                desc: '디자인/마케팅 트렌드 리포트',
                slug: 'trend-insights',
                image: 'A holographic radar interface showing future trends, floating charts, cyberpunk style.'
            },
            {
                label: 'Culture Log',
                desc: '원케이션 팀 문화, 해커톤',
                slug: 'culture-log',
                image: 'A cinematic close-up of a camera lens reflecting a digital neon city.'
            }
        ]
    },
    {
        id: 'contact',
        label: 'CONTACT',
        subLabel: '문의하기',
        href: '#contact',
        children: [
            { label: 'Start Project', desc: '프로젝트 문의 양식', slug: 'start-project' },
            { label: 'Recruit', desc: '인재 영입', slug: 'recruit' },
            { label: 'FAQ', desc: '자주 묻는 질문', slug: 'faq' }
        ]
    },
];
