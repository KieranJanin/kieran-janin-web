import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/civil-engineering', label: 'Civil' },
        { path: '/data-science', label: 'Data' },
        { path: '/design-thinking', label: 'Design' },
        { path: '/projects', label: 'Projects' },
        { path: '/books', label: 'Books' },
        { path: '/blog', label: 'Blog' },
        { path: '/archive', label: 'Archive' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0a0a0a] text-zinc-100 selection:bg-zinc-700 selection:text-white">
            {/* Navigation */}
            <header className={`fixed top-0 w-full z-[101] transition-all duration-300 px-6 py-4 ${scrolled || isMenuOpen ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/" className="font-bold tracking-tighter text-xl z-50 relative">KJ.</Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                        {navLinks.map(link => (
                            <Link key={link.path} to={link.path} className="hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-zinc-100 z-[102] relative p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved OUTSIDE header to ensure full viewport cover */}
            <div className={`fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {/* Extra Close Button for redundancy/clarity */}
                <button
                    className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-[103]"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <X size={32} />
                </button>

                <nav className="flex flex-col gap-8 text-center">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-bold tracking-tight text-white/90 hover:text-white transition-all hover:scale-105"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="w-full max-w-7xl md:w-[90%] lg:w-[80%] mx-auto">
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
