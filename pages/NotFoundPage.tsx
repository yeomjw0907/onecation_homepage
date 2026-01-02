import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-obsidian flex items-center justify-center text-white">
            <SEOHead
                title="404 - Page Not Found"
                description="요청하신 페이지를 찾을 수 없습니다."
            />
            <div className="text-center">
                <h1 className="text-[10rem] font-black text-white/5 leading-none">404</h1>
                <h2 className="text-2xl font-bold mb-4 -mt-12">Page Not Found</h2>
                <p className="mb-8 text-offwhite/50">요청하신 페이지를 찾을 수 없습니다.</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-8 py-3 bg-lime text-black font-bold rounded-full hover:scale-105 transition-transform"
                >
                    Return Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;
