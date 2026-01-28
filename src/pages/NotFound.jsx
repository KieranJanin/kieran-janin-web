import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';
import NotFoundImage from '../assets/404_not_found.png';

const NotFound = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img
                    src={NotFoundImage}
                    alt=""
                    className="w-full h-full object-cover blur-[2px]"
                />
            </div>

            {/* Content Content - z-10 to stay on top */}
            <div className="relative z-10 flex flex-col items-center">
                <SEO
                    title="Page Not Found"
                    description="The page you are looking for does not exist."
                    keywords="404, Not Found"
                />

                <h1 className="text-3xl font-bold mb-4">Lost in the Digital Twin?</h1>
                <p className="text-zinc-500 mb-8 max-w-sm">
                    The requested resource could not be found on this server. It might have been moved or deleted.
                </p>

                <Link
                    to="/"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
                >
                    <Home className="w-4 h-4" /> Return Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
