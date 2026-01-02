import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SubPage } from '../components/SubPage';
import { SEOHead } from '../components/common/SEOHead';
import { SUBPAGE_CONTENT } from '../constants';

const SubPageWrapper: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const content = slug ? SUBPAGE_CONTENT[slug] : null;

    if (!content) {
        return (
            <div className="min-h-screen bg-obsidian flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">404</h2>
                    <p className="mb-8 text-offwhite/50">Page not found or under construction.</p>
                    <button onClick={() => navigate('/')} className="text-lime hover:underline">
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEOHead
                title={content.title}
                description={content.description}
                url={`https://onecation.co.kr/${slug}`}
            />
            <SubPage
                slug={slug!}
                content={content}
                onBack={() => navigate('/')}
                onNavigate={(newSlug) => navigate(`/${newSlug}`)}
            />
        </>
    );
};

export default SubPageWrapper;
