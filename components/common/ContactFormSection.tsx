import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { CustomSelect } from './CustomSelect';

interface ContactFormSectionProps {
    accentColor?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ accentColor = 'lime' }) => {
    const [service, setService] = useState('');

    const serviceOptions = [
        'Business Planning', 'Gov. Strategy', 'Tech Consulting',
        'Brand Experience', 'Web Engineering', 'App & Platform',
        'SEO & Data', 'Performance Marketing', 'Viral & Content',
        'Other'
    ];

    return (
        <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-${accentColor}`}>Begin Your Journey</span>
                        <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Start Project</h3>
                        <p className="text-offwhite/50 mb-12 font-kor leading-relaxed">
                            위대한 여정은 작은 문의에서 시작됩니다.<br />
                            프로젝트에 대해 알려주시면 가장 적합한 전문가가 답변드립니다.
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">Email Us</p>
                                    <a href="mailto:yeomjw0907@onecation.co.kr" className="block text-offwhite/60 hover:text-white transition-colors">yeomjw0907@onecation.co.kr</a>
                                    <a href="mailto:hello@onecation.com" className="block text-offwhite/60 hover:text-white transition-colors">hello@onecation.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">Call Us</p>
                                    <a href="tel:01063334649" className="block text-offwhite/60 hover:text-white transition-colors">010-6333-4649</a>
                                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">Mon-Fri, 10am - 7pm</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">Visit Us</p>
                                    <p className="text-offwhite/60 font-kor leading-relaxed">
                                        인천광역시 연수구 송도2동 인천타워대로 99<br />애니오션빌딩 11-12층
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 relative">
                        <h4 className="text-xl font-bold text-white mb-8">Send a Message</h4>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Name</label>
                                    <input type="text" className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors`} placeholder="홍길동 / 기업명" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Contact</label>
                                    <input type="text" className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors`} placeholder="이메일 또는 전화번호" />
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Service Interest</label>
                                <CustomSelect
                                    options={serviceOptions}
                                    value={service}
                                    onChange={setService}
                                    placeholder="관심 서비스를 선택하세요"
                                    accentColor={accentColor}
                                />
                            </div>

                            <div>
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Project Details</label>
                                <textarea rows={4} className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors resize-none leading-relaxed`} placeholder="프로젝트 예산, 일정, 주요 기능 등 상세 내용을 입력해주세요." />
                            </div>

                            <Button variant="primary" className={`w-full bg-${accentColor} text-black border-none py-4 text-lg`} withArrow>문의하기</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
