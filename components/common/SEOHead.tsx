import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    image = '/og-image.jpg',
    url = 'https://onecation.co.kr'
}) => {
    const { t } = useTranslation('common');

    const defaultTitle = t('seo.default_title');
    const defaultDescription = t('seo.default_description');

    const metaTitle = title || defaultTitle;
    const metaDescription = description || defaultDescription;

    const fullTitle = metaTitle.includes('Onecation') ? metaTitle : `${metaTitle} | Onecation`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Onecation" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
