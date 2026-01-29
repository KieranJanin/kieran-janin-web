import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SEO from '../../../components/SEO';
import { BookOpen, ChevronLeft, Menu, X } from 'lucide-react';

const NudgeLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const chapters = [
        { path: ".", title: "Introduction", label: "Guide Home" },
        { path: "chapter-1", title: "Chapter 1: Biases and Blunders", label: "Chapter 1" },
        { path: "chapter-2", title: "Chapter 2: Resisting Temptation", label: "Chapter 2" },
        { path: "chapter-3", title: "Chapter 3: Following the Herd", label: "Chapter 3" },
        { path: "chapter-4", title: "Chapter 4: When do we need a Nudge?", label: "Chapter 4" },
        { path: "chapter-5", title: "Chapter 5: Choice Architecture", label: "Chapter 5" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col md:flex-row relative">
            <SEO
                title="Nudge: A Book Guide"
                description="Detailed notes and chapter summaries for Nudge by Thaler & Sunstein."
            />

            {/* Mobile Header */}
            <div className="md:hidden sticky top-0 z-40 bg-[#0a0a0a] border-b border-white/5 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold">
                    <BookOpen className="w-5 h-5 text-emerald-500" />
                    <span>Nudge Guide</span>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-zinc-400 hover:text-white"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Navigation */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a0a] border-r border-white/5 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen md:sticky md:top-20 md:w-64 md:block overflow-y-auto
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6">
                    <NavLink to="/books" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back to Library
                    </NavLink>

                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 hidden md:flex">
                        <BookOpen className="w-5 h-5 text-emerald-500" /> Nudge
                    </h2>

                    <nav className="flex flex-col gap-1">
                        {chapters.map((chapter) => (
                            <NavLink
                                key={chapter.path}
                                to={chapter.path}
                                end={chapter.path === "."}
                                onClick={() => setIsSidebarOpen(false)}
                                className={({ isActive }) => `
                                    px-4 py-3 text-sm font-medium rounded-lg transition-all
                                    ${isActive
                                        ? 'bg-zinc-800 text-white border border-white/5'
                                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                                    }
                                `}
                            >
                                <div className="font-bold">{chapter.label}</div>
                                <div className="text-xs font-normal opacity-70 truncate">{chapter.title}</div>
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow p-0 md:p-12 lg:p-16 w-full">
                <div className="max-w-4xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default NudgeLayout;
