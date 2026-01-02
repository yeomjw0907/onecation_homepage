import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Share2, Bookmark, Clock, ArrowLeft, BookOpen, Zap } from 'lucide-react';
import { GenAIImage } from '../GenAIImage';
import { Button } from '../ui/Button';

export interface InsightDetailProps {
    post: any;
    onClose: () => void;
}

export const InsightDetailView: React.FC<InsightDetailProps> = ({ post, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-obsidian overflow-y-auto font-kor"
        >
            {/* Top Reading Bar */}
            <div className="sticky top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <span className="text-gold font-bold text-sm tracking-tighter">O-LAB INSIGHTS</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest hidden md:block">Now Reading: {post.title}</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="p-2 text-white/40 hover:text-white transition-colors"><Share2 size={18} /></button>
                    <button className="p-2 text-white/40 hover:text-white transition-colors"><Bookmark size={18} /></button>
                    <span className="w-[1px] h-4 bg-white/10 mx-2"></span>
                    <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors"><X size={20} /></button>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-6 py-20">
                {/* Article Header */}
                <header className="mb-16 space-y-8">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-white/5 text-lime text-[10px] font-bold uppercase tracking-widest border border-white/10">
                            {post.category}
                        </span>
                        <span className="text-white/20 text-xs font-mono">{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/20 text-gold font-bold text-xs">
                            OC
                        </div>
                        <div>
                            <p className="text-white text-sm font-bold">Onecation Editorial Team</p>
                            <p className="text-white/30 text-xs">Premium Business Architects</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-white/30 text-xs">
                            <Clock size={14} /> 8 min read
                        </div>
                    </div>
                </header>

                {/* Lead Image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-white/5 bg-white/5">
                    <GenAIImage prompt={post.image} alt={post.title} className="w-full h-full" aspectRatio="16:9" />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none text-white/70 text-lg leading-loose space-y-8">
                    <p className="text-xl text-white font-medium leading-relaxed border-l-4 border-gold pl-8 py-2 italic bg-white/[0.02] rounded-r-lg">
                        비즈니스의 미래는 단순히 어떤 기술을 사용하는가에 있지 않습니다. 그 기술을 어떻게 브랜드의 영혼과 결합시켜 사용자에게 잊지 못할 경험을 선사하는가에 달려 있습니다.
                    </p>

                    <h3 className="text-2xl font-bold text-white pt-8">디지털 트랜스포메이션의 본질</h3>
                    <p>
                        오늘날 많은 기업들이 디지털 전환을 외치고 있지만, 대다수는 기존의 오프라인 프로세스를 온라인으로 옮기는 수준에 머물러 있습니다. 하지만 원케이션이 정의하는 진정한 디지털 트랜스포메이션은 브랜드의 본질(Essence)을 재정의하고, 이를 디지털 환경에 최적화된 새로운 사용자 여정으로 창조하는 것입니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><BookOpen size={16} /> Key Insight A</h4>
                            <p className="text-sm">데이터는 방향을 제시할 뿐, 결정은 브랜드의 가치관을 따릅니다. 무조건적인 최적화보다 정체성 유지가 우선입니다.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-gold font-bold mb-4 flex items-center gap-2"><Zap size={16} /> Key Insight B</h4>
                            <p className="text-sm">사용자의 찰나의 순간을 포착하는 마이크로 인터랙션이 브랜드에 대한 신뢰도를 70% 이상 상승시킵니다.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white">결론: 우리가 나아가야 할 방향</h3>
                    <p>
                        우리는 더 이상 단순히 아름다운 웹사이트나 기능적인 앱을 만드는 것에 만족해서는 안 됩니다. 기술과 예술, 그리고 비즈니스 전략이 완벽하게 동기화된 하나의 에코시스템을 구축해야 합니다. 그것이 원케이션이 지향하는 'Business All-in-One'의 미래입니다.
                    </p>
                </div>

                {/* Footer Tags */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-2">
                    {['Strategy', 'UX Design', 'Luxury Tech', 'Future'].map(tag => (
                        <span key={tag} className="text-[10px] text-white/30 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full hover:border-gold/30 hover:text-gold transition-colors cursor-pointer">#{tag}</span>
                    ))}
                </div>

                {/* Author Bio */}
                <footer className="mt-20 p-10 bg-white/[0.03] rounded-3xl border border-white/5 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 text-gold font-bold text-2xl">
                        OC
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white">Onecation Insights</h4>
                        <p className="text-sm text-white/40 leading-relaxed">원케이션 에디토리얼 팀은 비즈니스 아키텍처의 최신 트렌드와 인사이트를 분석하여 공유합니다. 우리는 지식의 공유가 더 큰 혁신을 만든다고 믿습니다.</p>
                    </div>
                </footer>

                <div className="mt-20 flex justify-between items-center">
                    <button onClick={onClose} className="text-offwhite/40 hover:text-white transition-colors flex items-center gap-2 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to List
                    </button>
                    <div className="flex gap-4">
                        <Button variant="secondary" className="text-xs">이전 글</Button>
                        <Button variant="primary" className="text-xs">다음 글 보기</Button>
                    </div>
                </div>
            </article>
        </motion.div>
    );
};
