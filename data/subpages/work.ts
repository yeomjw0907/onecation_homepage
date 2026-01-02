import { SubPageContent } from '../../types';

export const WORK_SUBPAGES: Record<string, SubPageContent> = {
    'for-startups': {
        title: 'For Startups',
        subtitle: 'Target B References',
        description: '혁신적인 아이디어를 가진 스타트업을 위한 포트폴리오. 빠르고 강렬한 임팩트를 주는 프로젝트들입니다.',
        heroImage: '/images/work/work_startup_hero.png',
        features: [
            { title: 'Agile MVP', desc: '핵심 기능에 집중한 빠른 런칭 사례.' },
            { title: 'Pitch Deck Design', desc: '투자 유치에 성공한 디자인 레퍼런스.' },
            { title: 'Trendy UI', desc: 'Gen Z를 타겟으로 한 힙한 디자인.' }
        ],
        details: '제한된 리소스로 최대의 효과를 낸 스타트업 성공 사례들을 확인하세요.',
        imageGrid: [
            '/images/work/work_startup_grid1.png',
            '/images/work/work_startup_grid2.png',
            '/images/work/work_startup_grid3.png'
        ],
        layout: 'gallery'
    },
    'for-enterprise': {
        title: 'For Enterprise',
        subtitle: 'Target A References',
        description: '대기업 및 중견기업을 위한 신뢰와 안정성 중심의 프로젝트. 대규모 시스템 구축 및 브랜드 리뉴얼 사례.',
        heroImage: '/images/work/work_enterprise_hero.png',
        features: [
            { title: 'Corporate Site', desc: '글로벌 스탠다드를 준수한 기업 홈페이지.' },
            { title: 'Large Scale System', desc: '복잡한 데이터를 처리하는 관리자 시스템.' },
            { title: 'Brand Renewal', desc: '전통 있는 기업의 디지털 트랜스포메이션.' }
        ],
        details: '엄격한 보안 규정과 가이드라인을 준수하며 완벽한 퀄리티를 제공한 엔터프라이즈 프로젝트입니다.',
        imageGrid: [
            '/images/work/work_enterprise_grid1.png',
            '/images/work/work_enterprise_grid2.png',
            '/images/work/work_enterprise_grid3.png'
        ],
        layout: 'gallery'
    },
    'success-stories': {
        title: 'Success Stories',
        subtitle: 'Case Studies',
        description: '문제를 어떻게 정의하고 해결했는지, 그 과정을 심도 있게 다룬 케이스 스터디 모음입니다.',
        heroImage: '/images/work/work_cases_hero.png',
        features: [
            { title: 'Problem Solving', desc: '명확한 문제 정의와 해결 과정.' },
            { title: 'Data Driven', desc: '전후 데이터 비교를 통한 성과 증명.' },
            { title: 'Client Voice', desc: '클라이언트의 리얼한 인터뷰.' }
        ],
        details: '결과물 뒤에 숨겨진 치열한 고민과 논리적인 해결 과정을 투명하게 공개합니다.',
        imageGrid: [
            '/images/work/work_cases_grid1.png',
            '/images/work/work_cases_grid2.png',
            '/images/work/work_cases_grid3.png'
        ],
        layout: 'gallery'
    }
};
