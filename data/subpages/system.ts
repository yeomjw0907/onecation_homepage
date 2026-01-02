import { SubPageContent } from '../../types';

export const SYSTEM_SUBPAGES: Record<string, SubPageContent> = {
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
    }
};
