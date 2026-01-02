import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LayoutProps } from './types';
import { BackButton, CustomSelect } from '../common';
import { Button } from '../ui/Button';

export const ContactLayout: React.FC<LayoutProps> = ({ content, onBack }) => {
    const [service, setService] = useState('');
    const serviceOptions = [
        'Business Planning', 'Gov. Strategy', 'Tech Consulting',
        'Brand Experience', 'Web Engineering', 'App & Platform',
        'SEO & Data', 'Performance Marketing', 'Viral & Content',
        'Other'
    ];

    return (
        <div className="min-h-screen bg-obsidian pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <BackButton onClick={onBack} className="mb-8" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-lime text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{content.subtitle}</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">{content.title}</h1>
                        <p className="text-offwhite/60 text-lg font-kor leading-relaxed mb-12">{content.description}</p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"><Mail size={20} /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                                    <p className="text-offwhite/50">yeomjw0907@onecation.co.kr</p>
                                    <p className="text-offwhite/50">hello@onecation.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"><Phone size={20} /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                                    <p className="text-offwhite/50">010-6333-4649</p>
                                    <p className="text-offwhite/50 text-xs mt-1">Mon-Fri, 10am - 7pm</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"><MapPin size={20} /></div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Visit Us</h4>
                                    <p className="text-offwhite/50 font-kor">인천광역시 연수구 송도2동 인천타워대로 99<br />애니오션빌딩 11-12층</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-lime focus:outline-none transition-colors" placeholder="홍길동 / 기업명" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Contact</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-lime focus:outline-none transition-colors" placeholder="이메일 또는 전화번호" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Service Interest</label>
                                <CustomSelect options={serviceOptions} value={service} onChange={setService} placeholder="관심 서비스를 선택하세요" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Project Details</label>
                                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-lime focus:outline-none transition-colors resize-none leading-relaxed" placeholder="프로젝트 예산, 일정, 주요 기능 등 상세 내용을 입력해주세요."></textarea>
                            </div>
                            <Button variant="primary" className="w-full py-4 text-lg" withArrow>문의하기</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
