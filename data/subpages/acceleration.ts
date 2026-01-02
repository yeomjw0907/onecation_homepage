import { SubPageContent } from '../../types';

export const ACCELERATION_SUBPAGES: Record<string, SubPageContent> = {
    'seo-data': {
        title: 'SEO & Data',
        subtitle: 'Growth Hacking',
        description: '데이터는 거짓말하지 않습니다. 검색엔진 최적화와 사용자 행동 데이터 분석을 통해 오가닉 트래픽을 극대화합니다.',
        heroImage: 'A data analytics dashboard floating in a virtual space, showing upward trends.',
        features: [
            { title: 'Technical SEO', desc: '검색엔진이 좋아하는 구조로 사이트 최적화.' },
            { title: 'Analytics', desc: 'GA4, Mixpanel 등을 활용한 유저 행동 분석.' },
            { title: 'Keyword Strategy', desc: '고효율 키워드 발굴 및 콘텐츠 전략.' }
        ],
        details: '잠재 고객이 당신을 먼저 찾게 만듭니다. 지속 가능한 성장의 기반을 마련해 드립니다.',
        imageGrid: [
            'Search engine results page on a monitor.',
            'A graph showing exponential user growth.'
        ],
        detailedProcess: [
            { step: '01', title: 'Site Audit', description: '웹사이트 구조 및 SEO 건강도 정밀 진단' },
            { step: '02', title: 'Keyword Strategy', description: '고효율 유입 키워드 발굴 및 콘텐츠 로드맵 수립' },
            { step: '03', title: 'Technical Setup', description: '메타태그 최적화, 스키마 마크업, 사이트맵 제출' },
            { step: '04', title: 'Data Analysis', description: 'GA4/GSC 데이터 기반의 지속적인 트래픽 성과 분석' }
        ],
        layout: 'acceleration'
    },
    'performance': {
        title: 'Performance',
        subtitle: 'ROAS Optimization',
        description: '효율적인 예산 집행으로 최대의 성과를 냅니다. 메타, 구글, 틱톡 등 매체별 최적화된 광고 운영.',
        heroImage: 'A target bulls-eye with an arrow hitting the center, symbolizing ad targeting.',
        features: [
            { title: 'Targeting', desc: '초정밀 타겟팅으로 진성 유저 확보.' },
            { title: 'Creative Testing', desc: '끊임없는 A/B 테스트로 승리하는 소재 발굴.' },
            { title: 'Funnel Optimization', desc: '유입부터 구매까지 전환율 개선.' }
        ],
        details: '단순 노출이 아닌 구매와 전환을 목표로 합니다. 투입 대비 최고의 효율을 보장합니다.',
        imageGrid: [
            'Social media ad interface on a phone.',
            'A funnel diagram showing conversion rates.'
        ],
        detailedProcess: [
            { step: '01', title: 'Media Mix', description: '타겟 오디언스에 맞는 최적의 광고 매체 선정' },
            { step: '02', title: 'Creative Prod', description: '클릭을 유도하는 숏폼/이미지 광고 소재 제작' },
            { step: '03', title: 'A/B Testing', description: '소재 및 타겟 테스트를 통한 위닝(Winning) 세트 발굴' },
            { step: '04', title: 'Scale Up', description: '고효율 캠페인 예산 증액 및 전환율 최적화(CRO)' }
        ],
        layout: 'acceleration'
    },
    'viral-content': {
        title: 'Viral & Content',
        subtitle: 'Storytelling',
        description: '사람들의 마음을 움직이고 공유하게 만드는 콘텐츠. 브랜드의 팬덤을 형성하는 강력한 내러티브를 만듭니다.',
        heroImage: 'A smartphone screen showing a viral video with thousands of likes.',
        features: [
            { title: 'Short-form', desc: '릴스, 숏츠, 틱톡 등 트렌디한 숏폼 제작.' },
            { title: 'Blog Marketing', desc: '정보성 콘텐츠를 통한 브랜드 신뢰도 구축.' },
            { title: 'Influencer', desc: '브랜드 결에 맞는 인플루언서 매칭 및 캠페인.' }
        ],
        details: '지루한 광고는 외면받습니다. 재미있고, 유익하고, 감동적인 콘텐츠로 소비자와 소통합니다.',
        imageGrid: [
            'A camera setup for filming content.',
            'An influencer holding a product.'
        ],
        detailedProcess: [
            { step: '01', title: 'Trend Catch', description: '실시간 소셜 미디어 트렌드 및 밈(Meme) 분석' },
            { step: '02', title: 'Storytelling', description: '브랜드 메시지를 녹여낸 바이럴 시나리오 기획' },
            { step: '03', title: 'Production', description: '트렌디한 촬영 및 편집 기법을 적용한 콘텐츠 제작' },
            { step: '04', title: 'Seeding', description: '주요 커뮤니티 및 SNS 채널 배포 및 확산 유도' }
        ],
        layout: 'acceleration'
    }
};
