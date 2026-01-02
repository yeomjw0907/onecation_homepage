import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { CustomSelect } from './CustomSelect';
import { useTranslation, Trans } from 'react-i18next';

interface ContactFormSectionProps {
    accentColor?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ accentColor = 'lime' }) => {
    const { t } = useTranslation('common');
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
                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-${accentColor}`}>
                            {t('contactSection.subtitle')}
                        </span>
                        <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
                            {t('contactSection.title')}
                        </h3>
                        <p className="text-offwhite/50 mb-12 font-kor leading-relaxed">
                            <Trans i18nKey="contactSection.description" components={{ br: <br /> }} />
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">{t('contactSection.email_us')}</p>
                                    <a href="mailto:yeomjw0907@onecation.co.kr" className="block text-offwhite/60 hover:text-white transition-colors">yeomjw0907@onecation.co.kr</a>
                                    <a href="mailto:hello@onecation.com" className="block text-offwhite/60 hover:text-white transition-colors">hello@onecation.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">{t('contactSection.call_us')}</p>
                                    <a href="tel:01063334649" className="block text-offwhite/60 hover:text-white transition-colors">010-6333-4649</a>
                                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-wider">{t('contactSection.mon_fri')}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-${accentColor} bg-white/5`}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">{t('contactSection.visit_us')}</p>
                                    <p className="text-offwhite/60 font-kor leading-relaxed">
                                        <Trans i18nKey="contactSection.address" components={{ br: <br /> }} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 relative">
                        <h4 className="text-xl font-bold text-white mb-8">{t('contactSection.send_message')}</h4>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">
                                        {t('contactSection.form.name')}
                                    </label>
                                    <input type="text" className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors`} placeholder={t('contactSection.form.name_placeholder')} />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">
                                        {t('contactSection.form.contact')}
                                    </label>
                                    <input type="text" className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors`} placeholder={t('contactSection.form.contact_placeholder')} />
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">
                                    {t('contactSection.form.service_interest')}
                                </label>
                                <CustomSelect
                                    options={serviceOptions}
                                    value={service}
                                    onChange={setService}
                                    placeholder={t('contactSection.form.service_placeholder')}
                                    accentColor={accentColor}
                                />
                            </div>

                            <div>
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">
                                    {t('contactSection.form.project_details')}
                                </label>
                                <textarea rows={4} className={`w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-${accentColor} outline-none transition-colors resize-none leading-relaxed`} placeholder={t('contactSection.form.message_placeholder')} />
                            </div>

                            <Button variant="primary" className={`w-full bg-${accentColor} text-black border-none py-4 text-lg`} withArrow>
                                {t('contactSection.form.submit')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
