import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    title = 'Onecation | Business All-in-One',
    description = '기획부터 마케팅까지, 비즈니스의 모든 것을 하나로. 원케이션은 프리미엄 디지털 솔루션을 제공합니다.',
    image = '/og-image.jpg',
    url = 'https://onecation.co.kr'
}) => {
    const fullTitle = title.includes('Onecation') ? title : `${title} | Onecation`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Onecation" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
