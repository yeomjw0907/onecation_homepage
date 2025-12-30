import { NavItem, BentoItem, SubPageContent } from './types';

// Helper to generate slug
const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

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

export const FOUNDATION_SERVICES = [
  {
    id: 'f1',
    title: 'Business Planning',
    description: 'Strategic roadmaps and compelling IR decks to secure your vision.',
    image: 'Abstract 3D Golden Trajectory cutting through dark chaos, symbolizing a clear roadmap to success. Cinematic lighting.'
  },
  {
    id: 'f2',
    title: 'Gov. Strategy',
    description: 'Navigating complex regulations to maximize funding opportunities.',
    image: 'A glowing 3D Golden Key floating in front of a massive digital gate. Symbolizing access and approval.'
  },
  {
    id: 'f3',
    title: 'Tech Consulting',
    description: 'Scalable architecture design and technical leadership from day one.',
    image: 'Isometric 3D Holographic Blueprint of a complex server architecture. Glowing Lime lines on black background. Clean and precise.'
  }
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: '1',
    title: 'ONE.SYSTEM',
    subtitle: '통합 에코시스템',
    description: '럭셔리 테크를 위한 완벽한 통합 워크플로우.',
    colSpan: 2,
    rowSpan: 2,
    image: 'A mesmerizing 3D interlocking mechanism of gold and black gears, perfectly synchronized, clockwork precision.',
    category: 'Core',
    hasArrow: true
  },
  {
    id: '2',
    title: 'Precision',
    subtitle: '픽셀 퍼펙트',
    description: '1px의 오차도 허용하지 않는 집요한 디테일.',
    colSpan: 1,
    rowSpan: 1,
    category: 'Philosophy'
  },
  {
    id: '3',
    title: 'Global Reach',
    subtitle: '글로벌 네트워크',
    description: 'Seoul • NY • Paris',
    colSpan: 1,
    rowSpan: 1,
    category: 'Network'
  },
  {
    id: '4',
    title: 'CREATION',
    subtitle: '디지털 아티스트리',
    description: '상상을 뛰어넘는 새로운 디지털 경험 창조.',
    colSpan: 1, 
    rowSpan: 1, 
    image: 'A digital sculpture of a human hand creating a glowing polygon sphere, creation and art.',
    category: 'Service',
    hasArrow: true
  },
  {
    id: '5',
    title: 'ACCELERATION',
    subtitle: '성장 엔진',
    description: '데이터와 크리에이티브가 결합된 성장 전략.',
    colSpan: 2,
    rowSpan: 1,
    image: 'A high-speed light tunnel, motion blur, accelerating forward, warp speed effect.',
    category: 'Service'
  },
  {
    id: '6',
    title: 'O-LAB',
    subtitle: '자체 R&D 연구소',
    description: 'WebGL과 공간 컴퓨팅의 한계를 넘는 실험.',
    colSpan: 3,
    image: 'A futuristic laboratory setup with floating holograms and experimental tech devices.',
    category: 'R&D',
    hasArrow: true
  }
];

export const SHOWCASE_ITEMS = [
  {
    id: 'p1',
    title: 'SAMSUNG C&T',
    subtitle: 'Immersive Experience',
    handle: '@samsung_cnt',
    image: 'Abstract glass shards floating in a void, reflecting a high-tech fashion runway.',
    iconType: 'brand'
  },
  {
    id: 'p2',
    title: 'GENTLE MONSTER',
    subtitle: 'Digital Flagship',
    handle: '@gentlemonster',
    image: 'Surreal avant-garde sunglasses floating in a strange alien landscape, minimal.',
    iconType: 'cube'
  },
  {
    id: 'p3',
    title: 'HYUNDAI MOTORS',
    subtitle: 'Future Mobility',
    handle: '@hyundai_kr',
    image: 'A futuristic concept car silhouette in a dark tunnel with neon taillights.',
    iconType: 'brand'
  },
  {
    id: 'p4',
    title: 'SK TELECOM',
    subtitle: 'AI Service Platform',
    handle: '@sktelecom',
    image: 'A glowing AI brain network, synapses firing, connected digital intelligence.',
    iconType: 'cube'
  },
  {
    id: 'p5',
    title: 'AMOREPACIFIC',
    subtitle: 'Beauty Tech',
    handle: '@amorepacific',
    image: 'A drop of golden serum falling into water, ripples, high speed photography, pristine.',
    iconType: 'brand'
  },
  {
    id: 'p6',
    title: 'WOORI BANK',
    subtitle: 'Fintech App',
    handle: '@wooribank',
    image: 'Digital blocks of cryptocurrency and finance charts floating in a secure vault.',
    iconType: 'cube'
  }
];

export const CLIENTS = [
  "SAMSUNG C&T", "HYUNDAI MOTORS", "SK TELECOM", "LG ELECTRONICS", "NAVER", "KAKAO", 
  "WOORI BANK", "SHINSEGAE", "AMOREPACIFIC", "GENTLE MONSTER"
];

export const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Foundation',
    description: '비즈니스의 본질을 정의하고, 시장을 관통하는 전략을 수립합니다. 데이터에 기반한 의사결정으로 불확실성을 제거합니다.',
    tags: ['Business Planning', 'Gov. Strategy', 'Tech Consulting'],
    image: 'A 3D architectural blueprint glowing in blue and gold lines on a dark table, foundational planning.'
  },
  {
    id: '02',
    title: 'Creation',
    description: '정의된 전략을 시각적 언어와 기술로 번역합니다. 사용자 경험(UX)을 극대화하는 심미적 디자인과 견고한 엔지니어링이 결합됩니다.',
    tags: ['Brand Experience', 'Web Engineering', 'App & Platform'],
    image: 'An artist hand interacting with a floating digital interface, painting pixels in 3D space.'
  },
  {
    id: '03',
    title: 'Acceleration',
    description: '구축된 플랫폼을 세상에 알리고 성장시킵니다. 퍼포먼스 마케팅과 데이터 분석을 통해 지속 가능한 성장을 견인합니다.',
    tags: ['SEO & Data', 'Performance Marketing', 'Viral Content'],
    image: 'A rocket engine igniting, close up on the flame, showing immense power and thrust.'
  }
];

export const INSIGHTS = [
  {
    id: 1,
    category: 'Tech Trend',
    title: 'Web 3.0와 럭셔리 브랜드의 결합',
    date: 'Oct 24, 2023',
    image: 'A digital diamond floating in a blockchain network, luxury meets technology.'
  },
  {
    id: 2,
    category: 'Design',
    title: '몰입형 경험을 위한 인터랙션 디자인',
    date: 'Nov 11, 2023',
    image: 'Abstract fluid shapes morphing and interacting with light, mesmerizing motion.'
  },
  {
    id: 3,
    category: 'Culture',
    title: '원케이션의 해커톤: O-THON 2023',
    date: 'Dec 05, 2023',
    image: 'A dark room filled with developers and glowing monitors, cyberpunk atmosphere, coding late night.'
  },
  {
    id: 4,
    category: 'Branding',
    title: '2024년 럭셔리 테크 디자인 가이드라인',
    date: 'Jan 15, 2024',
    image: 'Close up of a luxury car dashboard with holographic displays, gold trim on black leather.'
  },
  {
    id: 5,
    category: 'Strategy',
    title: '스타트업을 위한 정부 지원사업 로드맵',
    date: 'Feb 02, 2024',
    image: 'A path made of glowing gold steps leading through a digital mountain landscape.'
  }
];

// --- Subpage Content Database ---

export const SUBPAGE_CONTENT: Record<string, SubPageContent> = {
  // ONE.SYSTEM
  'manifesto': {
    title: 'Manifesto',
    subtitle: 'Business All-in-One',
    description: '우리는 기술과 예술의 경계를 허물며, 비즈니스의 모든 단계에서 완벽한 동기화를 추구합니다. 원케이션은 단순한 대행사가 아닌, 당신의 비전을 현실화하는 파트너입니다.',
    heroImage: 'A majestic obsidian monolith standing in a desert of gold dust, symbolizing a strong vision.',
    features: [
      { title: 'Total Synchronization', desc: '기획부터 마케팅까지 끊김 없는 워크플로우.' },
      { title: 'Obsidian Aesthetics', desc: '깊이감 있는 디자인 철학.' },
      { title: 'Impact Driven', desc: '실질적인 비즈니스 성과 창출.' }
    ],
    details: '우리는 클라이언트의 성공을 우리의 성공으로 정의합니다. 각 분야 최고의 전문가들이 모여 하나의 목표를 향해 달립니다.',
    imageGrid: [
      'Close up of a complex circuit board with gold traces on black PCB.',
      'Abstract liquid gold flowing over a black rock surface.',
      'A futuristic city skyline silhouette against a golden dawn.'
    ],
    layout: 'manifesto'
  },
  'the-120-alliance': {
    title: 'The 120 Alliance',
    subtitle: 'Future Network',
    description: '공유 오피스가 아닌, 미래형 네트워크. 원케이션 코어 팀과 120명의 전문가들이 신경망처럼 연결되어 있습니다.',
    heroImage: 'A massive plexus network of golden lines and nodes connecting in dark space, representing a human network.',
    features: [
      { title: 'Core Brain', desc: '프로젝트를 총괄하는 PM/PO 그룹.' },
      { title: 'Specialist Node', desc: '각 분야 상위 1% 전문가 노드.' },
      { title: 'Hyper Connection', desc: '실시간으로 소통하는 협업 프로토콜.' }
    ],
    details: '개발자, 디자이너, 마케터가 유기적으로 연결된 120개의 노드. 프로젝트의 필요에 따라 최적의 팀이 즉각적으로 구성됩니다.',
    imageGrid: [
      'A 3D icon of a brain made of glowing circuits.',
      'A 3D icon of a computer chip with a diamond core.',
      'A 3D abstract representation of data nodes connecting.'
    ],
    layout: 'alliance'
  },
  'process': {
    title: 'Process',
    subtitle: 'The Sync System',
    description: '정밀 공학처럼 설계된 원케이션만의 동기화 프로세스. 모든 단계가 완벽하게 맞물려 돌아갑니다.',
    heroImage: 'Two large golden rings interlocking perfectly in a dark void, symbolizing synchronization.',
    features: [
      { title: 'Discovery', desc: '본질을 탐색하는 Radar UI.', category: 'Radar' },
      { title: 'Definition', desc: '전략을 설계하는 Blueprint.', category: 'Blueprint' },
      { title: 'Delivery', desc: '결과를 증명하는 3D Diamond.', category: 'Diamond' }
    ],
    details: '투명한 진행 상황 공유와 데이터 기반의 의사결정 프로세스를 통해 프로젝트의 리스크를 최소화합니다.',
    imageGrid: [
      'A high-tech radar screen sweeping for data points.',
      'A digital blueprint rolling out showing technical specs.',
      'A perfect diamond refracting light in a dark room.'
    ],
    layout: 'process'
  },
  
  // FOUNDATION
  'business-planning': {
    title: 'Business Planning',
    subtitle: 'Visionary Roadmap',
    description: '불확실한 비즈니스 환경에서 명확한 승리의 경로를 설계합니다. 투자자를 매료시키는 압도적인 스토리텔링과 정교한 재무 시뮬레이션.',
    heroImage: 'Abstract 3D Golden Trajectory cutting through dark chaos, symbolizing a clear roadmap to success. Cinematic lighting.',
    features: [
      { title: 'Market Analysis', desc: '정량적/정성적 시장 분석 데이터.' },
      { title: 'Financial Modeling', desc: '현실적이고 논리적인 재무 추정.' },
      { title: 'Persuasive Story', desc: '투자자의 마음을 움직이는 스토리텔링.' }
    ],
    details: '단순 문서 작성이 아닌, 비즈니스 모델(BM) 자체를 진단하고 고도화하는 컨설팅을 제공합니다.',
    imageGrid: [
      'Close up of a hand analyzing a stock market graph on a tablet.',
      'A stack of gold coins and documents on a desk.'
    ],
    layout: 'split'
  },
  'gov-strategy': {
    title: 'Gov. Strategy',
    subtitle: 'Master Key Strategy',
    description: '복잡한 심사 기준을 꿰뚫는 필승 전략. 수많은 합격 데이터로 검증된 원케이션만의 합격 공식을 제안합니다.',
    heroImage: 'A glowing 3D Golden Key floating in front of a massive digital gate. Symbolizing access and approval.',
    features: [
      { title: 'Eligibility Check', desc: '지원 가능 사업 적합성 진단.' },
      { title: 'Evaluation Criteria', desc: '평가 지표에 맞춘 사업계획서 최적화.' },
      { title: 'Presentation Prep', desc: '대면 평가 발표 자료 및 Q&A 코칭.' }
    ],
    details: '수많은 합격 사례를 보유한 전문 위원들이 평가위원의 관점에서 합격 포인트를 짚어드립니다.',
    imageGrid: [
      'A judge gavel on a desk, symbolizing evaluation.',
      'A document with an "Approved" stamp glowing.'
    ],
    layout: 'split'
  },
  'tech-consulting': {
    title: 'Tech Consulting',
    subtitle: 'System Architecture',
    description: '개발 착수 전, 실패 확률을 0%로 만드는 기술 설계. 확장 가능한 아키텍처와 빈틈없는 기능 명세서(SRS)를 제공합니다.',
    heroImage: 'Isometric 3D Holographic Blueprint of a complex server architecture. Glowing Lime lines on black background. Clean and precise.',
    features: [
      { title: 'Stack Selection', desc: '서비스에 최적화된 기술 스택 선정.' },
      { title: 'DB Design', desc: '확장성을 고려한 데이터베이스 설계.' },
      { title: 'Technical Spec', desc: '명확한 기능 명세서(SRS) 작성.' }
    ],
    details: '개발 지식이 없는 창업자도 안심하고 프로젝트를 진행할 수 있도록 기술적 가이드를 제시합니다.',
    imageGrid: [
      'A whiteboard filled with complex software architecture diagrams.',
      'Close up of code on a monitor screen.'
    ],
    layout: 'split'
  },
  
  // CREATION
  'brand-experience': {
    title: 'Brand Experience',
    subtitle: 'Visual Identity',
    description: '브랜드의 영혼을 시각화합니다. 로고부터 그래픽 모티프까지, 일관되고 강력한 브랜드 경험을 설계합니다.',
    heroImage: 'An art gallery space with floating abstract brand logos and color swatches.',
    features: [
      { title: 'Logo Design', desc: '기억에 남는 심볼과 워드마크.' },
      { title: 'Brand System', desc: '컬러, 타이포그래피, 그래픽 가이드라인.' },
      { title: 'Application', desc: '명함, 서식, 굿즈 등 어플리케이션 디자인.' }
    ],
    details: '심미적 아름다움을 넘어 브랜드의 철학을 담아냅니다. 시장 내에서 독보적인 위치를 점유할 수 있는 디자인을 제안합니다.',
    imageGrid: [
      'A designer sketchpad with logo concepts.',
      'Premium business cards with gold foil stamping.'
    ],
    layout: 'immersive'
  },
  'web-engineering': {
    title: 'Web Engineering',
    subtitle: 'Immersive Web',
    description: '단순한 정보 전달을 넘어 경험을 선사하는 웹사이트. WebGL, 인터랙티브 모션을 통해 압도적인 몰입감을 제공합니다.',
    heroImage: 'A laptop screen displaying a 3D interactive website with particles flying out.',
    features: [
      { title: 'Creative Dev', desc: '3D 인터랙션 및 마이크로 인터랙션 구현.' },
      { title: 'Responsive', desc: '모든 디바이스에 완벽하게 대응하는 반응형 웹.' },
      { title: 'Performance', desc: 'SEO 최적화 및 빠른 로딩 속도.' }
    ],
    details: 'Next.js, React, Three.js 등 최신 기술을 활용하여 안정적이고 화려한 웹 경험을 구축합니다.',
    imageGrid: [
      'Code editor with React components visible.',
      'A mobile phone showing a responsive website layout.'
    ],
    layout: 'immersive'
  },
  'app-platform': {
    title: 'App & Platform',
    subtitle: 'Robust Ecosystem',
    description: '비즈니스 로직을 완벽하게 구현하는 iOS/Android 앱 및 SaaS 플랫폼을 구축합니다.',
    heroImage: 'A smartphone floating in mid-air displaying a sleek app interface.',
    features: [
      { title: 'Cross Platform', desc: 'Flutter/React Native를 통한 효율적 개발.' },
      { title: 'Scalable Architecture', desc: '대용량 트래픽을 견디는 백엔드 설계.' },
      { title: 'User Centric', desc: '사용자 중심의 직관적인 UI/UX.' }
    ],
    details: '초기 MVP부터 엔터프라이즈급 ERP 시스템까지, 목적에 맞는 최적의 솔루션을 제공합니다.',
    imageGrid: [
      'App wireframes laid out on a table.',
      'A dashboard interface on a tablet device.'
    ],
    layout: 'immersive'
  },
  
  // ACCELERATION
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
    layout: 'split'
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
    layout: 'split'
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
    layout: 'split'
  },
  
  // WORK
  'for-startups': {
    title: 'For Startups',
    subtitle: 'Target B References',
    description: '혁신적인 아이디어를 가진 스타트업을 위한 포트폴리오. 빠르고 강렬한 임팩트를 주는 프로젝트들입니다.',
    heroImage: 'A startup office space with bean bags and whiteboard walls, creative energy.',
    features: [
      { title: 'Agile MVP', desc: '핵심 기능에 집중한 빠른 런칭 사례.' },
      { title: 'Pitch Deck Design', desc: '투자 유치에 성공한 디자인 레퍼런스.' },
      { title: 'Trendy UI', desc: 'Gen Z를 타겟으로 한 힙한 디자인.' }
    ],
    details: '제한된 리소스로 최대의 효과를 낸 스타트업 성공 사례들을 확인하세요.',
    imageGrid: [
      'A modern mobile app login screen.',
      'A pitch deck slide showing market size.',
      'A team high-fiving in an office.',
      'A laptop with stickers on it.'
    ],
    layout: 'gallery'
  },
  'for-enterprise': {
    title: 'For Enterprise',
    subtitle: 'Target A References',
    description: '대기업 및 중견기업을 위한 신뢰와 안정성 중심의 프로젝트. 대규모 시스템 구축 및 브랜드 리뉴얼 사례.',
    heroImage: 'A glass corporate building reflecting the sky, stability and scale.',
    features: [
      { title: 'Corporate Site', desc: '글로벌 스탠다드를 준수한 기업 홈페이지.' },
      { title: 'Large Scale System', desc: '복잡한 데이터를 처리하는 관리자 시스템.' },
      { title: 'Brand Renewal', desc: '전통 있는 기업의 디지털 트랜스포메이션.' }
    ],
    details: '엄격한 보안 규정과 가이드라인을 준수하며 완벽한 퀄리티를 제공한 엔터프라이즈 프로젝트입니다.',
    imageGrid: [
      'A large conference room with a presidential screen.',
      'A complex admin dashboard on a widescreen monitor.',
      'A corporate lobby with branding.',
      'A secure server room.'
    ],
    layout: 'gallery'
  },
  'success-stories': {
    title: 'Success Stories',
    subtitle: 'Case Studies',
    description: '문제를 어떻게 정의하고 해결했는지, 그 과정을 심도 있게 다룬 케이스 스터디 모음입니다.',
    heroImage: 'A library of documented case studies, books with gold titles.',
    features: [
      { title: 'Problem Solving', desc: '명확한 문제 정의와 해결 과정.' },
      { title: 'Data Driven', desc: '전후 데이터 비교를 통한 성과 증명.' },
      { title: 'Client Voice', desc: '클라이언트의 리얼한 인터뷰.' }
    ],
    details: '결과물 뒤에 숨겨진 치열한 고민과 논리적인 해결 과정을 투명하게 공개합니다.',
    imageGrid: [
      'Before and after comparison of a website.',
      'A graph going up showing success.',
      'A quote from a happy client.'
    ],
    layout: 'gallery'
  },
  
  // O-LAB
  'originals': {
    title: 'Originals',
    subtitle: 'Product Gallery',
    description: '원케이션 자체적으로 기획하고 개발한 서비스와 실험적인 제품들을 소개합니다. 혁신적인 아이디어가 실제 제품으로 구현된 결과물들입니다.',
    heroImage: 'A sci-fi lab bench with prototype devices and glowing blueprints.',
    features: [
      { title: 'SaaS Products', desc: '실제 운영 중인 자체 SaaS 서비스.', category: 'Web/App' },
      { title: 'Interactive Art', desc: '기술과 예술이 결합된 디지털 아트.', category: 'Digital Art' },
      { title: 'Open Source', desc: '개발 커뮤니티에 기여하는 라이브러리.', category: 'Tech' }
    ],
    details: '우리는 클라이언트 워크뿐만 아니라, 스스로 메이커가 되어 끊임없이 도전하고 증명합니다.',
    imageGrid: [
      'A screen showing a sleek dark-mode dashboard interface.',
      'A 3D glass sculpture of a digital heart glowing with fiber optics.',
      'Code snippets floating in a 3D space, golden lines on black.',
      'A smartphone displaying a minimalist crypto wallet interface.'
    ],
    layout: 'gallery'
  },
  'trend-insights': {
    title: 'Trend Insights',
    subtitle: 'Insight Archive',
    description: '급변하는 디지털 시장의 트렌드를 분석하고 아카이빙합니다. 디자인, 기술, 마케팅 전반의 핵심 인사이트를 확인하세요.',
    heroImage: 'A futuristic library with floating holographic books and charts.',
    features: [
      { title: 'Web 3.0 & Luxury', desc: '럭셔리 브랜드의 디지털 결합 트렌드.', category: 'Tech' },
      { title: 'Immersive Interaction', desc: '사용자 몰입을 위한 새로운 UX 패턴.', category: 'Design' },
      { title: '2024 Design Guide', desc: '올해 주목해야 할 디자인 가이드라인.', category: 'Design' },
      { title: 'Startup Roadmap', desc: '정부 지원사업 합격을 위한 전략.', category: 'Strategy' }
    ],
    details: '원케이션의 시각으로 해석한 깊이 있는 분석 자료를 통해 미래를 준비하세요.',
    imageGrid: [
      'Digital diamond floating in a mesh network.',
      'Fluid abstract shapes with neon lighting.',
      'Luxury car dashboard with holographic UI.',
      'Golden path leading through a digital mountain range.'
    ],
    layout: 'editorial'
  },
  'culture-log': {
    title: 'Culture Log',
    subtitle: 'Team Archive',
    description: '치열하게 일하고 즐겁게 노는 원케이션의 조직 문화와 비하인드 스토리를 기록합니다.',
    heroImage: 'A candid photo of a team dinner, warm lighting, laughter.',
    features: [
      { title: 'Work Style', desc: '자율과 책임을 중시하는 근무 문화.' },
      { title: 'Events', desc: '해커톤, 워크샵, 회식 등 사내 이벤트.' },
      { title: 'People', desc: '원케이션을 만들어가는 구성원 인터뷰.' }
    ],
    details: '최고의 결과물은 최고의 팀에서 나옵니다. 우리가 일하는 방식과 문화를 공유합니다.',
    imageGrid: [
      'People working on bean bags with laptops.',
      'A group photo at a company retreat.'
    ],
    layout: 'editorial'
  },
  
  // CONTACT
  'start-project': {
    title: 'Start Project',
    subtitle: 'Begin Your Journey',
    description: '위대한 여정은 작은 문의에서 시작됩니다. 프로젝트에 대해 알려주시면 가장 적합한 전문가가 답변드립니다.',
    heroImage: 'A hand holding a golden key, opening a door to the future.',
    features: [
      { title: 'Consultation', desc: '무료 초기 상담 및 견적 산출.' },
      { title: 'Proposal', desc: '맞춤형 제안서 제공.' },
      { title: 'Kickoff', desc: '빠른 프로젝트 착수.' }
    ],
    details: '예산, 일정, 범위가 확정되지 않았어도 괜찮습니다. 원케이션이 함께 고민해 드립니다.',
    imageGrid: [
      'A handshake between two professionals.',
      'A contract being signed on a tablet.'
    ],
    layout: 'contact'
  },
  'recruit': {
    title: 'Recruit',
    subtitle: 'Join the Alliance',
    description: '원케이션과 함께 디지털 경험의 미래를 만들어갈 인재를 찾습니다. 우리는 성장에 목마른 사람들을 환영합니다.',
    heroImage: 'An empty chair at a modern desk with a "We are hiring" sign.',
    features: [
      { title: 'Growth', desc: '아낌없는 교육 지원과 성장 기회.' },
      { title: 'Compensation', desc: '업계 최고 수준의 대우와 성과급.' },
      { title: 'Culture', desc: '수평적이고 자유로운 소통 문화.' }
    ],
    details: '디자이너, 개발자, 마케터, PM 등 전 직군 상시 채용 중입니다. 당신의 포트폴리오를 보여주세요.',
    imageGrid: [
      'A welcome kit on a desk.',
      'A team meeting in a glass room.'
    ],
    layout: 'contact'
  },
  'faq': {
    title: 'FAQ',
    subtitle: 'Questions & Answers',
    description: '프로젝트 진행과 관련하여 자주 묻는 질문들을 모았습니다. 궁금한 점이 해결되지 않았다면 언제든 문의해주세요.',
    heroImage: 'A large glowing question mark in a 3D space.',
    features: [
      { category: '개발', title: '개발 언어는 무엇을 사용하나요?', desc: '웹은 React, Next.js, 앱은 Flutter, React Native를 주력으로 사용합니다. 백엔드는 Node.js, Python, Java 등 프로젝트 특성에 맞춰 가장 적합한 기술 스택을 제안합니다.' },
      { category: '개발', title: '유지보수도 가능한가요?', desc: '네, 가능합니다. 프로젝트 완료 후 기본 하자보수 기간(1년)을 제공하며, 이후 별도의 유지보수(SMA) 계약을 통해 서버 관리, 기능 개선 등 안정적인 운영을 지원합니다.' },
      { category: '개발', title: '하이브리드 앱과 네이티브 앱의 차이는 무엇인가요?', desc: '네이티브 앱은 성능이 뛰어나지만 개발 비용이 높습니다. 하이브리드(크로스 플랫폼) 앱은 하나의 코드로 iOS와 Android를 동시에 개발하여 비용 효율적입니다. 프로젝트 목적에 따라 적합한 방식을 제안드립니다.' },
      { category: '개발', title: '관리자 페이지도 만들어주시나요?', desc: '네, 서비스 운영에 필요한 CMS(관리자 페이지)를 기본적으로 제공합니다. 회원 관리, 콘텐츠 업로드, 통계 확인 등 필요한 기능을 커스텀하여 구축해 드립니다.' },
      
      // Marketing
      { category: '마케팅', title: 'ROAS는 어느 정도 보장되나요?', desc: 'ROAS(광고 대비 매출액)는 업종과 제품에 따라 다르지만, 원케이션은 데이터 기반의 타겟 최적화를 통해 평균 300% 이상의 ROAS를 목표로 운영합니다. 초기 테스트 기간을 거쳐 점진적으로 효율을 개선합니다.' },
      { category: '마케팅', title: '어떤 광고 매체를 운영하나요?', desc: 'Meta(Facebook/Instagram), Google(Youtube/Search), Naver(GFA/Search), Kakao 등 주요 매체를 운영합니다. 타겟 오디언스가 주로 활동하는 채널을 분석하여 매체 믹스(Media Mix) 전략을 수립합니다.' },
      { category: '마케팅', title: '보고서는 얼마나 자주 제공되나요?', desc: '기본적으로 주간/월간 리포트를 제공합니다. 필요에 따라 실시간 대시보드를 구축하여 언제든 성과를 확인하실 수 있도록 지원합니다.' },
      
      // Design
      { category: '디자인', title: '디자인 수정 횟수에 제한이 있나요?', desc: '기본적으로 주요 단계별(시안 확정 전) 2~3회의 무료 수정을 제공합니다. 다만, 기획이 크게 변경되거나 확정된 시안을 전면 수정하는 경우에는 추가 비용이 발생할 수 있습니다.' },
      { category: '디자인', title: '작업 원본 파일도 제공해주나요?', desc: '네, 프로젝트 완료 시 최종 산출물과 함께 디자인 원본 파일(Figma, PSD, AI 등)을 모두 제공해 드립니다. 저작권은 클라이언트에게 귀속됩니다.' },
      { category: '디자인', title: '모바일 반응형도 포함되나요?', desc: '물론입니다. 원케이션의 모든 웹 프로젝트는 데스크탑, 태블릿, 모바일에 완벽하게 대응하는 반응형 디자인(Responsive Design)을 기본으로 합니다.' },
      
      // Other
      { category: '기타', title: '견적은 어떻게 산정되나요?', desc: '투입 인력(M/M), 기간, 기능의 난이도, 디자인 퀄리티 등을 종합적으로 고려하여 산정합니다. 예산 범위를 알려주시면 그에 맞는 최적의 기능을 큐레이션하여 제안해 드립니다.' },
      { category: '기타', title: '미팅은 어떻게 진행하나요?', desc: '효율을 위해 초기 상담은 비대면(Zoom/Google Meet)을 권장하지만, 상세 논의가 필요한 경우 서울/경기 지역 방문 미팅도 가능합니다. 프로젝트 착수 시 킥오프 미팅은 대면으로 진행합니다.' },
      { category: '기타', title: '계약 및 결제 조건이 궁금합니다.', desc: '일반적으로 착수금 40%, 중도금 40%, 잔금 20%로 진행됩니다. 다만 프로젝트 규모와 기간에 따라 협의 가능하며, 세금계산서 발행을 원칙으로 합니다.' }
    ],
    details: '투명하고 정직하게 답변드립니다. 고객의 입장에서 궁금해할 만한 내용들을 정리했습니다.',
    imageGrid: [
      'A person answering a phone call in an office.',
      'A support ticket system interface.'
    ],
    layout: 'faq'
  }
};