import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
        { path: '/blog', label: 'Blog' },
        { path: '/blog', label: 'Blog' },
        { path: '/archive', label: 'Archive' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white transition-colors duration-300">
            {/* Navigation */}
            <header className={`fixed top-0 w-full z-[101] transition-all duration-300 px-6 py-4 ${scrolled || isMenuOpen ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link to="/" className="font-bold tracking-tighter text-xl z-50 relative">KJ.</Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {navLinks.map(link => (
                            <Link key={link.path} to={link.path} className="hover:text-black dark:hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                        <div className="pl-4 border-l border-zinc-300 dark:border-zinc-700">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden z-[102] relative">
                        <ThemeToggle />
                        <button
                            className="text-zinc-900 dark:text-zinc-100 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved OUTSIDE header to ensure full viewport cover */}
            <div className={`fixed inset-0 bg-white/95 dark:bg-black/90 backdrop-blur-xl z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {/* Extra Close Button for redundancy/clarity */}
                <button
                    className="absolute top-6 right-6 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors z-[103]"
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
                            className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white/90 hover:text-black dark:hover:text-white transition-all hover:scale-105"
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
            <footer className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-600 text-xs tracking-widest uppercase border-t border-zinc-200 dark:border-white/5 bg-gray-50 dark:bg-[#0a0a0a]">
                &copy; 2026 Kieran Janin. Integrated Engineering Practitioner.
            </footer>
        </div>
    );
};

export default Layout;
