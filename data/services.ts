import { BentoItem } from '../types';

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
