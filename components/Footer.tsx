
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
   const { t } = useTranslation('common');
   const currentYear = new Date().getFullYear();

   return (
      <footer className="border-t border-white/5 bg-[#0A0A0A] py-24 mt-20 font-kor">
         <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0">

               {/* Left Side: Brand & Company Info */}
               <div className="flex flex-col md:flex-row gap-10 lg:gap-16 w-full lg:w-auto">
                  {/* Logo Section (Simulated based on image) */}
                  <div className="shrink-0 pt-1">
                     <div className="relative w-12 h-12 flex items-center justify-center">
                        {/* Gold Circle Q-like Logo */}
                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-gold fill-none stroke-[3]">
                           <circle cx="50" cy="50" r="40" />
                           <path d="M70 70 L90 90" />
                        </svg>
                     </div>
                     <span className="text-gold font-serif text-[10px] tracking-[0.3em] uppercase block mt-3 text-center opacity-80">One Cation</span>
                  </div>

                  {/* Info List */}
                  <div className="space-y-3 text-sm text-offwhite/50 font-light leading-relaxed">
                     <div className="flex flex-col gap-2.5">
                        <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                           <span className="font-bold text-offwhite/80 shrink-0">{t('footer.labels.company_name')}</span>
                           <span className="hidden sm:block w-[1px] h-3 bg-white/10"></span>
                           <span>{t('footer.info.company_name')}</span>
                        </p>
                        <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                           <span className="font-bold text-offwhite/80 shrink-0">{t('footer.labels.ceo')}</span>
                           <span className="hidden sm:block w-[1px] h-3 bg-white/10"></span>
                           <span>{t('footer.info.ceo')}</span>
                        </p>
                        <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                           <span className="font-bold text-offwhite/80 shrink-0">{t('footer.labels.business_no')}</span>
                           <span className="hidden sm:block w-[1px] h-3 bg-white/10"></span>
                           <span className="font-sans">{t('footer.info.business_no')}</span>
                        </p>
                        <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                           <span className="font-bold text-offwhite/80 shrink-0">{t('footer.labels.email')}</span>
                           <span className="hidden sm:block w-[1px] h-3 bg-white/10"></span>
                           <a href="mailto:yeomjw0907@onecation.co.kr" className="hover:text-white transition-colors font-sans">yeomjw0907@onecation.co.kr</a>
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 mt-1">
                           <span className="font-bold text-offwhite/80 shrink-0 pt-0.5">{t('footer.labels.address_dept')}</span>
                           <span className="hidden sm:block w-[1px] h-3 bg-white/10 mt-1.5"></span>
                           <span className="break-keep max-w-md">{t('footer.info.address')}</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side: Contact */}
               <div className="w-full lg:w-auto lg:text-right border-t border-white/5 lg:border-none pt-10 lg:pt-0">
                  <a href="tel:01063334649" className="text-3xl md:text-4xl font-bold text-white hover:text-gold transition-colors font-sans tracking-tight block mb-6">
                     010-6333-4649
                  </a>
                  <div className="space-y-2.5 text-sm text-offwhite/50">
                     <div className="flex flex-col sm:flex-row sm:items-center lg:justify-end gap-1 sm:gap-3">
                        <span className="font-bold text-offwhite/80">{t('footer.labels.phone_inquiry')}</span>
                        <span className="hidden sm:block w-[1px] h-3 bg-white/10"></span>
                        <span>{t('footer.info.phone_time')}</span>
                     </div>
                     <div className="flex flex-col sm:flex-row sm:items-center lg:justify-end gap-1 sm:gap-3">
                        <span className="font-bold text-offwhite/80">{t('footer.labels.kakao_inquiry')}</span>
                        <span className="hidden sm:block w-[1px] h-3 bg-white/10"></span>
                        <span>{t('footer.info.kakao_time')}</span>
                     </div>
                  </div>
               </div>

            </div>

            {/* Copyright */}
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-offwhite/20 font-sans tracking-[0.2em] uppercase gap-4">
               <span>{t('footer.copyright', { year: currentYear })}</span>
               <span className="opacity-50">{t('footer.premium_motto')}</span>
            </div>
         </div>
      </footer>
   );
};

