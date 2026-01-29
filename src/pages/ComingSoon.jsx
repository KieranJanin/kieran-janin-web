import React from 'react';
import SEO from '../components/SEO';
import BridgeImage from '../assets/bridge_centered.png';
import { Linkedin, Mail } from 'lucide-react';

const ComingSoon = () => {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans flex flex-col items-center justify-center p-6 text-center selection:bg-white selection:text-black">
            <SEO
                title="Coming Soon - Kieran Janin"
                description="Kieran Janin - Integrated Engineering Practitioner. Website launching soon."
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
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                        Kieran Janin
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide">
                        Integrated Engineering Practitioner
                    </p>
                </div>

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8"></div>

                <p className="text-zinc-500 mb-12 leading-relaxed">
                    My full portfolio is currently in the works. <br />
                    Please check back soon.
                </p>

                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <div className="p-3 rounded-full bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </div>
                    </a>
                    <a
                        href="mailto:contact@kieranjanin.com"
                        className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <div className="p-3 rounded-full bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all">
                            <Mail className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </main>

            <footer className="absolute bottom-12 text-zinc-700 text-xs tracking-widest uppercase">
                &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
};

export default ComingSoon;
