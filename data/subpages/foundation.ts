import { SubPageContent } from '../../types';

export const FOUNDATION_SUBPAGES: Record<string, SubPageContent> = {
    'business-planning': {
        title: 'Business Planning',
        subtitle: 'Visionary Roadmap',
        description: '불확실한 비즈니스 환경에서 명확한 승리의 경로를 설계합니다. 투자자를 매료시키는 압도적인 스토리텔링과 정교한 재무 시뮬레이션.',
        heroImage: '/images/foundation/foundation_planning_hero.png',
        features: [
            { title: 'Market Analysis', desc: '정량적/정성적 시장 분석 데이터.' },
            { title: 'Financial Modeling', desc: '현실적이고 논리적인 재무 추정.' },
            { title: 'Persuasive Story', desc: '투자자의 마음을 움직이는 스토리텔링.' }
        ],
        details: '단순 문서 작성이 아닌, 비즈니스 모델(BM) 자체를 진단하고 고도화하는 컨설팅을 제공합니다.',
        imageGrid: [
            '/images/foundation/foundation_planning_grid1.png',
            '/images/foundation/foundation_planning_grid2.png'
        ],
        detailedProcess: [
            { step: '01', title: 'BM Diagnosis', description: '기존 비즈니스 모델의 수익성 및 확장성 정밀 진단' },
            { step: '02', title: 'Market Research', description: 'TAM-SAM-SOM 분석 및 경쟁사 벤치마킹' },
            { step: '03', title: 'Financial Modeling', description: '3~5개년 추정 손익계산서 및 기업가치 평가(Valuation)' },
            { step: '04', title: 'Pitch Deck Design', description: '투자자를 설득하는 압도적인 스토리텔링 및 디자인' }
        ],
        layout: 'split'
    },
    'gov-strategy': {
        title: 'Gov. Strategy',
        subtitle: 'Master Key Strategy',
        description: '복잡한 심사 기준을 꿰뚫는 필승 전략. 수많은 합격 데이터로 검증된 원케이션만의 합격 공식을 제안합니다.',
        heroImage: '/images/foundation/foundation_gov_hero.png',
        features: [
            { title: 'Eligibility Check', desc: '지원 가능 사업 적합성 진단.' },
            { title: 'Evaluation Criteria', desc: '평가 지표에 맞춘 사업계획서 최적화.' },
            { title: 'Presentation Prep', desc: '대면 평가 발표 자료 및 Q&A 코칭.' }
        ],
        details: '수많은 합격 사례를 보유한 전문 위원들이 평가위원의 관점에서 합격 포인트를 짚어드립니다.',
        imageGrid: [
            '/images/foundation/foundation_gov_grid1.png',
            '/images/foundation/foundation_gov_grid2.png'
        ],
        detailedProcess: [
            { step: '01', title: 'Audit', description: '기업 역량 및 가점 사항 정밀 진단' },
            { step: '02', title: 'Matching', description: '최적의 지원사업 매칭 및 전략 수립' },
            { step: '03', title: 'Writing', description: '평가 지표를 관통하는 사업계획서 작성 및 첨삭' },
            { step: '04', title: 'Defense', description: '대면 평가용 발표 자료 제작 및 모의 Q&A 코칭' }
        ],
        layout: 'split'
    },
    'tech-consulting': {
        title: 'Tech Consulting',
        subtitle: 'System Architecture',
        description: '개발 착수 전, 실패 확률을 0%로 만드는 기술 설계. 확장 가능한 아키텍처와 빈틈없는 기능 명세서(SRS)를 제공합니다.',
        heroImage: '/images/foundation/foundation_tech_hero.png',
        features: [
            { title: 'Stack Selection', desc: '서비스에 최적화된 기술 스택 선정.' },
            { title: 'DB Design', desc: '확장성을 고려한 데이터베이스 설계.' },
            { title: 'Technical Spec', desc: '명확한 기능 명세서(SRS) 작성.' }
        ],
        details: '개발 지식이 없는 창업자도 안심하고 프로젝트를 진행할 수 있도록 기술적 가이드를 제시합니다.',
        imageGrid: [
            '/images/foundation/foundation_tech_grid1.png',
            '/images/foundation/foundation_tech_grid2.png'
        ],
        detailedProcess: [
            { step: '01', title: 'Requirement Analysis', description: '비즈니스 요구사항의 기술적 타당성 검토' },
            { step: '02', title: 'Stack Selection', description: '서비스 규모에 맞는 최적의 언어, 프레임워크 선정' },
            { step: '03', title: 'Architecture Design', description: 'DB 스키마, API 명세, 시스템 아키텍처 설계' },
            { step: '04', title: 'SRS Documentation', description: '개발자 커뮤니케이션을 위한 상세 기능 명세서 작성' }
        ],
        layout: 'split'
    }
};
