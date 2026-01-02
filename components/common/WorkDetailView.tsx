import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, User, Layers, Box, Clock, ArrowLeft, ChevronRight } from 'lucide-react';
import { GenAIImage } from '../GenAIImage';
import { Button } from '../ui/Button';

interface WorkDetailViewProps {
    project: any;
    onClose: () => void;
}

export const WorkDetailView: React.FC<WorkDetailViewProps> = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-obsidian overflow-y-auto"
        >
            {/* Immersive Hero Header */}
            <div className="relative w-full h-[85vh] overflow-hidden">
                <GenAIImage prompt={project.image} alt={project.title} className="w-full h-full grayscale brightness-50" aspectRatio="16:9" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

                {/* Floating Controls */}
                <div className="absolute top-0 left-0 right-0 z-50 p-8 flex justify-between items-center">
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                        <span className="text-gold font-bold tracking-tighter">ONECATION</span>
                        <span className="w-[1px] h-3 bg-white/20"></span>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest">{project.category}</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-lime hover:text-black transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="absolute bottom-20 left-0 right-0 px-8 md:px-16 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6 leading-[0.9]">{project.title}</h1>
                        <div className="flex flex-wrap gap-4 items-center">
                            <span className="px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest">{project.client}</span>
                            <div className="h-0.5 w-12 bg-white/10"></div>
                            <span className="text-white/40 text-sm font-kor">Project Case Study 2024</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Narrative Board */}
            <div className="max-w-5xl mx-auto px-8 py-32 space-y-40">

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5 pb-20">
                    {[
                        { label: 'Client', value: project.client, icon: User },
                        { label: 'Service', value: 'UX/UI Engineering', icon: Layers },
                        { label: 'Industry', value: 'High-Tech Luxury', icon: Box },
                        { label: 'Timeline', value: '14 Weeks', icon: Clock },
                    ].map((spec, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center gap-2 text-white/30 uppercase tracking-widest text-[10px]">
                                <spec.icon size={12} /> {spec.label}
                            </div>
                            <p className="text-lg font-bold text-white">{spec.value}</p>
                        </div>
                    ))}
                </div>

                {/* Narrative Section 1: Challenge */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h3 className="text-3xl font-bold text-white sticky top-32">The <br /><span className="text-gold">Challenge</span></h3>
                    </div>
                    <div className="md:col-span-8 space-y-8 text-xl font-kor text-white/60 leading-loose">
                        <p>
                            {project.client} 프로젝트의 핵심 과제는 파편화된 디지털 접점을 하나로 통합하고, 브랜드의 프리미엄 정체성을 기술적으로 증명하는 것이었습니다.
                        </p>
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/5 italic font-light text-white/80">
                            "단순한 홈페이지를 넘어, 우리 브랜드의 영혼을 디지털 공간에서 경험할 수 있게 해주세요."
                        </div>
                        <p>
                            우리는 수만 명의 사용자 행동 데이터를 분석하여 기존 시스템의 병목 현상을 파악했고, 이를 해결하기 위한 혁신적인 사용자 인터페이스 구조를 설계했습니다.
                        </p>
                    </div>
                </div>

                {/* Visual Showcase 1 */}
                <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 group">
                    <GenAIImage prompt={`${project.image}, futuristic user interface detailed`} alt="Interface" className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>

                {/* Narrative Section 2: Solution */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h3 className="text-3xl font-bold text-white sticky top-32">The <br /><span className="text-lime">Solution</span></h3>
                    </div>
                    <div className="md:col-span-8 space-y-10 text-xl font-kor text-white/60 leading-loose">
                        <p>
                            원케이션의 'Sync 프로세스'를 적용하여 기획, 디자인, 개발이 동시에 동기화되는 워크플로우를 구축했습니다.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Obsidian Design System', desc: '다크 모드에 최적화된 고대비 컴포넌트 라이브러리 구축.' },
                                { title: 'Motion Engine', desc: '60fps의 부드러운 전환 효과로 감성적 만족도 극대화.' },
                                { title: 'Edge Performance', desc: '전 세계 어디서나 1초 미만의 응답 속도를 보장하는 아키텍처.' },
                                { title: 'AI Integration', desc: '사용자 취향에 반응하는 개인화 추천 알고리즘 삽입.' }
                            ].map((sol, i) => (
                                <div key={i} className="bg-white/[0.03] p-6 rounded-xl border border-white/10 hover:border-lime/40 transition-all">
                                    <h5 className="text-white font-bold text-sm mb-2">{sol.title}</h5>
                                    <p className="text-xs text-white/40 leading-relaxed">{sol.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Result Banner */}
                <div className="bg-lime p-16 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-obsidian max-w-sm">
                        <h4 className="text-3xl font-bold mb-4 tracking-tighter">Business Impact</h4>
                        <p className="text-sm font-medium opacity-80">데이터로 증명된 성공적인 디지털 트랜스포메이션 결과입니다.</p>
                    </div>
                    <div className="flex gap-12">
                        <div className="text-center">
                            <span className="block text-5xl font-black text-obsidian tracking-tighter">+240%</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-obsidian/60">Conversion</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-5xl font-black text-obsidian tracking-tighter">-45%</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-obsidian/60">Load Time</span>
                        </div>
                    </div>
                </div>

                {/* Detail Gallery */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/5">
                        <GenAIImage prompt="Modern mobile app interface mockup gold details" alt="Mobile" className="w-full h-full" aspectRatio="1:1" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/5">
                        <GenAIImage prompt="Premium branding collateral layout obsidian" alt="Branding" className="w-full h-full" aspectRatio="1:1" />
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-20 border-t border-white/5 flex flex-col items-center text-center gap-10">
                    <h3 className="text-2xl font-bold text-white">Next Project Experience</h3>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> Prev Project
                        </button>
                        <button className="flex items-center gap-2 text-white font-bold hover:text-gold transition-colors group">
                            Next Project <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                    <Button variant="primary" onClick={onClose} className="px-12 py-5 text-xl">Close Case Study</Button>
                </div>
            </div>
        </motion.div>
    );
};
