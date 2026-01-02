import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Clients } from '../components/Clients';
import { PortfolioShowcase } from '../components/PortfolioShowcase';
import { BentoGrid } from '../components/BentoGrid';
import { Process } from '../components/Process';
import { Insights } from '../components/Insights';
import { Section } from '../components/ui/Section';
import { FoundationGrid } from '../components/FoundationGrid';
import { SEOHead } from '../components/common/SEOHead';
import { ArrowUpRight, Lock } from 'lucide-react';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main>
            <SEOHead
                title="Onecation | Business All-in-One"
                description="기획부터 마케팅까지, 비즈니스의 모든 것을 하나로. 원케이션은 프리미엄 디지털 솔루션을 제공합니다."
            />

            <Hero />

            {/* Clients Marquee Section */}
            <Clients />

            {/* Selected Works (Showcase Style) */}
            <Section id="system" className="relative z-10 !px-0 !max-w-none">
                <PortfolioShowcase />
            </Section>

            {/* Core Services (Bento Grid Style) */}
            <Section id="creation">
                <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Expertise</h2>
                        <p className="text-offwhite/40 font-kor">분야별 전문성</p>
                    </div>
                </div>
                <BentoGrid />
            </Section>

            {/* New Process Section */}
            <Process />

            <Section id="foundation">
                <div className="py-20">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase block mb-4">Foundation</span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                                The Digital <br />
                                <span className="text-gold">Blueprint</span>
                            </h2>
                            <p className="text-lg text-offwhite/60 font-kor font-light leading-relaxed">
                                우리는 단순한 에이전시가 아닙니다. 브랜드의 본질을 꿰뚫고,
                                가장 진보된 기술로 그 가치를 증폭시키는 디지털 아틀리에입니다.
                            </p>
                        </div>
                        <div className="hidden md:flex gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">98%</h4>
                                <p className="text-xs text-white/40 uppercase tracking-wider">Retention</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">45+</h4>
                                <p className="text-xs text-white/40 uppercase tracking-wider">Awards</p>
                            </div>
                        </div>
                    </div>

                    {/* New 3-Column Service Grid */}
                    <FoundationGrid />
                </div>
            </Section>

            {/* New Insights Section */}
            <Insights />

            <Section id="contact" className="py-40 text-center relative overflow-hidden">
                {/* Background Glow for Visual Hierarchy */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

                <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-tight">
                    Let's create <br />
                    <span className="block mt-4 text-[5rem] md:text-[8rem] lg:text-[10rem] italic font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#D4AF37] leading-[0.9] pb-4 drop-shadow-2xl scale-110 origin-bottom">
                        Impact.
                    </span>
                </h2>
                <p className="text-offwhite/60 mb-16 max-w-lg mx-auto font-kor text-lg font-light leading-relaxed">
                    귀하의 브랜드가 가진 잠재력을 현실로 만드세요. <br />
                    지금 원케이션과 함께 시작하십시오.
                </p>
                <button
                    onClick={() => navigate('/start-project')}
                    className="group relative inline-flex items-center justify-center gap-4 bg-lime text-obsidian px-14 py-7 rounded-full font-sans font-bold text-xl tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(204,255,0,0.6)] hover:shadow-[0_0_100px_rgba(204,255,0,0.8)] z-10"
                >
                    Start a Project
                    <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                </button>

                {/* Secret Admin Entry (For Dev/Demo) */}
                <div className="mt-20 flex justify-center opacity-10 hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => navigate('/admin')}
                        className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest hover:text-gold"
                    >
                        <Lock size={10} /> Internal Access
                    </button>
                </div>
            </Section>
        </main>
    );
};

export default HomePage;
