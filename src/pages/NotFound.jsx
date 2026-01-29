import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BridgeImage from '../assets/bridge_centered.png';
import { ChevronLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans flex flex-col items-center justify-center p-6 text-center selection:bg-white selection:text-black">
            <SEO
                title="404: Page Not Found"
                description="The page you are looking for does not exist."
            />

            {/* Background Bridge Image */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
                <img
                    src={BridgeImage}
                    alt="Background Bridge"
                    className="w-full h-full object-cover"
                />
            </div>

            <main className="relative z-10 max-w-2xl mx-auto animate-in fade-in zoom-in duration-1000">
                <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-white opacity-20">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl text-white font-bold tracking-tight mb-4">
                    Page Not Found
                </h2>

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8"></div>

                <p className="text-zinc-500 mb-12 leading-relaxed">
                    The path you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all font-bold text-sm"
                >
                    <ChevronLeft className="w-4 h-4" /> Return Home
                </Link>
            </main>

            <footer className="absolute bottom-12 text-zinc-700 text-xs tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Kieran Janin
            </footer>
        </div>
    );
};

export default NotFound;
