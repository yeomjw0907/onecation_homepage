import { SubPageContent } from '../../types';

export const OLAB_SUBPAGES: Record<string, SubPageContent> = {
    'originals': {
        title: 'Originals',
        subtitle: 'Product Gallery',
        description: '원케이션 자체적으로 기획하고 개발한 서비스와 실험적인 제품들을 소개합니다. 혁신적인 아이디어가 실제 제품으로 구현된 결과물들입니다.',
        heroImage: '/images/olab/olab_rd_hero.png',
        features: [
            { title: 'SaaS Products', desc: '실제 운영 중인 자체 SaaS 서비스.', category: 'Web/App' },
            { title: 'Interactive Art', desc: '기술과 예술이 결합된 디지털 아트.', category: 'Digital Art' },
            { title: 'Open Source', desc: '개발 커뮤니티에 기여하는 라이브러리.', category: 'Tech' }
        ],
        details: '우리는 클라이언트 워크뿐만 아니라, 스스로 메이커가 되어 끊임없이 도전하고 증명합니다.',
        imageGrid: [
            '/images/olab/olab_rd_grid1.png',
            '/images/olab/olab_rd_grid2.png',
            '/images/olab/olab_rd_grid3.png',
        ],
        layout: 'gallery'
    },
    'trend-insights': {
        title: 'Trend Insights',
        subtitle: 'Insight Archive',
        description: '급변하는 디지털 시장의 트렌드를 분석하고 아카이빙합니다. 디자인, 기술, 마케팅 전반의 핵심 인사이트를 확인하세요.',
        heroImage: '/images/olab/olab_insights_hero.png',
        features: [
            { title: 'Web 3.0 & Luxury', desc: '럭셔리 브랜드의 디지털 결합 트렌드.', category: 'Tech' },
            { title: 'Immersive Interaction', desc: '사용자 몰입을 위한 새로운 UX 패턴.', category: 'Design' },
            { title: '2024 Design Guide', desc: '올해 주목해야 할 디자인 가이드라인.', category: 'Design' },
            { title: 'Startup Roadmap', desc: '정부 지원사업 합격을 위한 전략.', category: 'Strategy' }
        ],
        details: '원케이션의 시각으로 해석한 깊이 있는 분석 자료를 통해 미래를 준비하세요.',
        imageGrid: [
            '/images/olab/olab_insights_grid1.png',
            '/images/olab/olab_insights_grid2.png',
            '/images/olab/olab_insights_grid3.png',
            '/images/olab/olab_insights_grid3.png'
        ],
        layout: 'editorial'
    },
    'culture-log': {
        title: 'Culture Log',
        subtitle: 'Team Archive',
        description: '치열하게 일하고 즐겁게 노는 원케이션의 조직 문화와 비하인드 스토리를 기록합니다.',
        heroImage: '/images/olab/olab_team_hero.png',
        features: [
            { title: 'Work Style', desc: '자율과 책임을 중시하는 근무 문화.' },
            { title: 'Events', desc: '해커톤, 워크샵, 회식 등 사내 이벤트.' },
            { title: 'People', desc: '원케이션을 만들어가는 구성원 인터뷰.' }
        ],
        details: '최고의 결과물은 최고의 팀에서 나옵니다. 우리가 일하는 방식과 문화를 공유합니다.',
        imageGrid: [
            '/images/olab/olab_team_grid1.png',
            '/images/olab/olab_team_grid2.png',
            '/images/olab/olab_team_grid3.png'
        ],
        layout: 'editorial'
    }
};
