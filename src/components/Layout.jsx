import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0a0a0a] text-zinc-100 selection:bg-zinc-700 selection:text-white">
            {/* Navigation */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/" className="font-bold tracking-tighter text-xl">KJ.</Link>
                    <nav className="flex gap-6 text-sm font-medium text-zinc-400">
                        <Link to="/civil-engineering" className="hover:text-white transition-colors hidden md:block">Civil</Link>
                        <Link to="/data-science" className="hover:text-white transition-colors hidden md:block">Data</Link>
                        <Link to="/design-thinking" className="hover:text-white transition-colors hidden md:block">Design</Link>
                        <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                        <Link to="/books" className="hover:text-white transition-colors">Books</Link>
                        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <Link to="/archive" className="hover:text-white transition-colors">Archive</Link>
                        <Link to="/about" className="hover:text-white transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-[80%] mx-auto">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="px-6 py-12 text-center text-zinc-600 text-xs tracking-widest uppercase border-t border-white/5 bg-[#0a0a0a]">
                &copy; {new Date().getFullYear()} Kieran Janin. Integrated Engineering Practitioner.
            </footer>
        </div>
    );
};

export default Layout;
