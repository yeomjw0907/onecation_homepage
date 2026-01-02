import { SubPageContent } from '../../types';

export const CREATION_SUBPAGES: Record<string, SubPageContent> = {
    'brand-experience': {
        title: 'Brand Experience',
        subtitle: 'Visual Identity',
        description: '브랜드의 영혼을 시각화합니다. 로고부터 그래픽 모티프까지, 일관되고 강력한 브랜드 경험을 설계합니다.',
        heroImage: '/images/creation/creation_brand_hero.png',
        features: [
            { title: 'Logo Design', desc: '기억에 남는 심볼과 워드마크.' },
            { title: 'Brand System', desc: '컬러, 타이포그래피, 그래픽 가이드라인.' },
            { title: 'Application', desc: '명함, 서식, 굿즈 등 어플리케이션 디자인.' }
        ],
        details: '심미적 아름다움을 넘어 브랜드의 철학을 담아냅니다. 시장 내에서 독보적인 위치를 점유할 수 있는 디자인을 제안합니다.',
        imageGrid: [
            '/images/creation/creation_brand_grid1.png',
            '/images/creation/creation_brand_grid2.png',
            '/images/creation/creation_brand_grid3.png',
            '/images/creation/creation_brand_grid3.png'
        ],
        detailedProcess: [
            { step: '01', title: 'Discovery', description: '브랜드 코어 밸류 및 타겟 오디언스 분석', image: 'Moodboard textures, color palettes, abstract design research, branding workshop, obsidian table' },
            { step: '02', title: 'Identity Design', description: '로고, 컬러, 타이포그래피 등 시각적 언어 정립', image: 'Sketching logo on paper, vector bezier curves on screen, golden ratio grid, minimal' },
            { step: '03', title: 'Application', description: '명함, 패키지, 굿즈 등 온/오프라인 접점 디자인', image: 'Luxury business cards, stationery mockup, gold foil stamping on black paper' },
            { step: '04', title: 'Guideline', description: '일관된 브랜드 경험 유지를 위한 BX 가이드라인 배포', image: 'Brand book layout, typography specimen, design system manual, clean swiss style' }
        ],
        layout: 'creation'
    },
    'web-engineering': {
        title: 'Web Engineering',
        subtitle: 'Immersive Web',
        description: '단순한 정보 전달을 넘어 경험을 선사하는 웹사이트. WebGL, 인터랙티브 모션을 통해 압도적인 몰입감을 제공합니다.',
        heroImage: '/images/creation/creation_web_hero.png',
        features: [
            { title: 'Creative Dev', desc: '3D 인터랙션 및 마이크로 인터랙션 구현.' },
            { title: 'Responsive', desc: '모든 디바이스에 완벽하게 대응하는 반응형 웹.' },
            { title: 'Performance', desc: 'SEO 최적화 및 빠른 로딩 속도.' }
        ],
        details: 'Next.js, React, Three.js 등 최신 기술을 활용하여 안정적이고 화려한 웹 경험을 구축합니다.',
        imageGrid: [
            '/images/creation/creation_web_grid1.png',
            '/images/creation/creation_web_grid2.png',
            '/images/creation/creation_web_grid3.png',
            '/images/creation/creation_web_grid3.png'
        ],
        detailedProcess: [
            { step: '01', title: 'Planning & UX', description: '사용자 여정(User Journey) 설계 및 와이어프레임 작성', image: 'Wireframe sketches on whiteboard, user flow diagram, sticky notes, UX research' },
            { step: '02', title: 'Creative Design', description: '몰입형 인터랙션이 가미된 고해상도 UI 디자인', image: 'High fidelity website UI design on monitor, dark mode, futuristic interface, 3D elements' },
            { step: '03', title: 'Engineering', description: 'Next.js 기반의 프론트엔드 구축 및 CMS 연동', image: 'Code on screen, React components, matrix rain style, developer typing, neon glow' },
            { step: '04', title: 'Optimization', description: 'SEO 최적화, 크로스 브라우징, 성능 테스트 및 배포', image: 'Server rack lights, speed test graph, green checkmarks, rocket launch abstract' }
        ],
        layout: 'creation'
    },
    'app-platform': {
        title: 'App & Platform',
        subtitle: 'Robust Ecosystem',
        description: '비즈니스 로직을 완벽하게 구현하는 iOS/Android 앱 및 SaaS 플랫폼을 구축합니다.',
        heroImage: '/images/creation/creation_app_hero.png',
        features: [
            { title: 'Cross Platform', desc: 'Flutter/React Native를 통한 효율적 개발.' },
            { title: 'Scalable Architecture', desc: '대용량 트래픽을 견디는 백엔드 설계.' },
            { title: 'User Centric', desc: '사용자 중심의 직관적인 UI/UX.' }
        ],
        details: '초기 MVP부터 엔터프라이즈급 ERP 시스템까지, 목적에 맞는 최적의 솔루션을 제공합니다.',
        imageGrid: [
            '/images/creation/creation_app_grid1.png',
            '/images/creation/creation_app_grid2.png',
            '/images/creation/creation_app_grid3.png',
            '/images/creation/creation_app_grid3.png'
        ],
        detailedProcess: [
            { step: '01', title: 'Architecture', description: '시스템 구조 설계 및 데이터 모델링', image: 'System architecture diagram, server nodes, database schema, blueprint style' },
            { step: '02', title: 'UI/UX Design', description: '모바일 환경에 최적화된 사용자 인터페이스 디자인', image: 'Mobile app interface screens floating in air, app flow, prototyping' },
            { step: '03', title: 'Full-stack Dev', description: '클라이언트(App) 및 서버(Admin) 동시 개발', image: 'Mobile phone showing code, flutter logo abstract, developer desk setup' },
            { step: '04', title: 'QA & Launch', description: '기능/보안 테스트 후 스토어 심사 및 출시 지원', image: 'App store launch button, mobile phone with success screen, confetti abstract' }
        ],
        layout: 'creation'
    }
};
