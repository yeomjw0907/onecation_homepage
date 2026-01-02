import { SubPageContent } from '../../types';

export const CONTACT_SUBPAGES: Record<string, SubPageContent> = {
    'start-project': {
        title: 'Start Project',
        subtitle: 'Begin Your Journey',
        description: '위대한 여정은 작은 문의에서 시작됩니다. 프로젝트에 대해 알려주시면 가장 적합한 전문가가 답변드립니다.',
        heroImage: '/images/contact/contact_start_hero.png',
        features: [
            { title: 'Consultation', desc: '무료 초기 상담 및 견적 산출.' },
            { title: 'Proposal', desc: '맞춤형 제안서 제공.' },
            { title: 'Kickoff', desc: '빠른 프로젝트 착수.' }
        ],
        details: '예산, 일정, 범위가 확정되지 않았어도 괜찮습니다. 원케이션이 함께 고민해 드립니다.',
        imageGrid: [
            '/images/contact/contact_start_grid1.png',
            '/images/contact/contact_start_grid2.png',
            '/images/contact/contact_start_grid3.png'
        ],
        layout: 'contact'
    },
    'recruit': {
        title: 'Recruit',
        subtitle: 'Join the Alliance',
        description: '원케이션과 함께 디지털 경험의 미래를 만들어갈 인재를 찾습니다. 우리는 성장에 목마른 사람들을 환영합니다.',
        heroImage: '/images/contact/contact_careers_hero.png',
        features: [
            { title: 'Growth', desc: '아낌없는 교육 지원과 성장 기회.' },
            { title: 'Compensation', desc: '업계 최고 수준의 대우와 성과급.' },
            { title: 'Culture', desc: '수평적이고 자유로운 소통 문화.' }
        ],
        details: '디자이너, 개발자, 마케터, PM 등 전 직군 상시 채용 중입니다. 당신의 포트폴리오를 보여주세요.',
        imageGrid: [
            '/images/contact/contact_careers_grid1.png',
            '/images/contact/contact_careers_grid2.png',
            '/images/contact/contact_careers_grid3.png'
        ],
        layout: 'contact'
    },
    'faq': {
        title: 'FAQ',
        subtitle: 'Questions & Answers',
        description: '프로젝트 진행과 관련하여 자주 묻는 질문들을 모았습니다. 궁금한 점이 해결되지 않았다면 언제든 문의해주세요.',
        heroImage: '/images/contact/contact_faq_hero.png',
        features: [
            { category: '개발', title: '개발 언어는 무엇을 사용하나요?', desc: '웹은 React, Next.js, 앱은 Flutter, React Native를 주력으로 사용합니다. 백엔드는 Node.js, Python, Java 등 프로젝트 특성에 맞춰 가장 적합한 기술 스택을 제안합니다.' },
            { category: '개발', title: '유지보수도 가능한가요?', desc: '네, 가능합니다. 프로젝트 완료 후 기본 하자보수 기간(1년)을 제공하며, 이후 별도의 유지보수(SMA) 계약을 통해 서버 관리, 기능 개선 등 안정적인 운영을 지원합니다.' },
            { category: '개발', title: '하이브리드 앱과 네이티브 앱의 차이는 무엇인가요?', desc: '네이티브 앱은 성능이 뛰어나지만 개발 비용이 높습니다. 하이브리드(크로스 플랫폼) 앱은 하나의 코드로 iOS와 Android를 동시에 개발하여 비용 효율적입니다. 프로젝트 목적에 따라 적합한 방식을 제안드립니다.' },
            { category: '개발', title: '관리자 페이지도 만들어주시나요?', desc: '네, 서비스 운영에 필요한 CMS(관리자 페이지)를 기본적으로 제공합니다. 회원 관리, 콘텐츠 업로드, 통계 확인 등 필요한 기능을 커스텀하여 구축해 드립니다.' },
            { category: '마케팅', title: 'ROAS는 어느 정도 보장되나요?', desc: 'ROAS(광고 대비 매출액)는 업종과 제품에 따라 다르지만, 원케이션은 데이터 기반의 타겟 최적화를 통해 평균 300% 이상의 ROAS를 목표로 운영합니다. 초기 테스트 기간을 거쳐 점진적으로 효율을 개선합니다.' },
            { category: '마케팅', title: '어떤 광고 매체를 운영하나요?', desc: 'Meta(Facebook/Instagram), Google(Youtube/Search), Naver(GFA/Search), Kakao 등 주요 매체를 운영합니다. 타겟 오디언스가 주로 활동하는 채널을 분석하여 매체 믹스(Media Mix) 전략을 수립합니다.' },
            { category: '마케팅', title: '보고서는 얼마나 자주 제공되나요?', desc: '기본적으로 주간/월간 리포트를 제공합니다. 필요에 따라 실시간 대시보드를 구축하여 언제든 성과를 확인하실 수 있도록 지원합니다.' },
            { category: '디자인', title: '디자인 수정 횟수에 제한이 있나요?', desc: '기본적으로 주요 단계별(시안 확정 전) 2~3회의 무료 수정을 제공합니다. 다만, 기획이 크게 변경되거나 확정된 시안을 전면 수정하는 경우에는 추가 비용이 발생할 수 있습니다.' },
            { category: '디자인', title: '작업 원본 파일도 제공해주나요?', desc: '네, 프로젝트 완료 시 최종 산출물과 함께 디자인 원본 파일(Figma, PSD, AI 등)을 모두 제공해 드립니다. 저작권은 클라이언트에게 귀속됩니다.' },
            { category: '디자인', title: '모바일 반응형도 포함되나요?', desc: '물론입니다. 원케이션의 모든 웹 프로젝트는 데스크탑, 태블릿, 모바일에 완벽하게 대응하는 반응형 디자인(Responsive Design)을 기본으로 합니다.' },
            { category: '기타', title: '견적은 어떻게 산정되나요?', desc: '투입 인력(M/M), 기간, 기능의 난이도, 디자인 퀄리티 등을 종합적으로 고려하여 산정합니다. 예산 범위를 알려주시면 그에 맞는 최적의 기능을 큐레이션하여 제안해 드립니다.' },
            { category: '기타', title: '미팅은 어떻게 진행하나요?', desc: '효율을 위해 초기 상담은 비대면(Zoom/Google Meet)을 권장하지만, 상세 논의가 필요한 경우 서울/경기 지역 방문 미팅도 가능합니다. 프로젝트 착수 시 킥오프 미팅은 대면으로 진행합니다.' },
            { category: '기타', title: '계약 및 결제 조건이 궁금합니다.', desc: '일반적으로 착수금 40%, 중도금 40%, 잔금 20%로 진행됩니다. 다만 프로젝트 규모와 기간에 따라 협의 가능하며, 세금계산서 발행을 원칙으로 합니다.' }
        ],
        details: '투명하고 정직하게 답변드립니다. 고객의 입장에서 궁금해할 만한 내용들을 정리했습니다.',
        imageGrid: [
            '/images/contact/contact_start_grid1.png',
            '/images/contact/contact_faq_grid1.png',
            '/images/contact/contact_faq_grid2.png',
            '/images/contact/contact_faq_grid3.png'
        ],
        layout: 'faq'
    }
};
