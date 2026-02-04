import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SEO from '../../../components/SEO';
import { BookOpen, ChevronLeft, Menu, X, Layers, Activity, AlertTriangle, Zap, LayoutDashboard } from 'lucide-react';

const ThinkingInSystemsLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const chapters = [
        { path: ".", title: "Introduction", label: "Guide Home", icon: LayoutDashboard },
        { path: "chapter-1", title: "Chapter 1: Les Fondamentaux", label: "Chapter 1", icon: Layers },
        { path: "chapter-2", title: "Chapter 2: Le Zoo des Systèmes", label: "Chapter 2", icon: Activity },
        { path: "chapter-5", title: "Chapter 5: Les Pièges", label: "Chapter 5", icon: AlertTriangle },
        { path: "chapter-6", title: "Chapter 6: Points de Levier", label: "Chapter 6", icon: Zap },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row relative font-sans">
            <SEO
                title="Thinking in Systems: A Guide"
                description="Analysis and strategic application of Donella Meadows' Thinking in Systems."
            />

            {/* Mobile Header */}
            <div className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-black uppercase tracking-tight text-slate-900">
                    <div className="bg-slate-900 text-white p-1 rounded">
                        <BookOpen size={16} />
                    </div>
                    <span>Thinking in Systems</span>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-slate-500 hover:text-slate-900"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Navigation */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen md:sticky md:top-20 md:w-64 md:block overflow-y-auto
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6">
                    <NavLink to="/books" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 mb-8 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back to Library
                    </NavLink>

                    <h2 className="text-xl font-black mb-6 flex items-center gap-2 hidden md:flex text-slate-900">
                        <BookOpen className="w-5 h-5 text-orange-500" /> Systems
                    </h2>

                    <nav className="flex flex-col gap-2">
                        {chapters.map((chapter) => (
                            <NavLink
                                key={chapter.path}
                                to={chapter.path}
                                end={chapter.path === "."}
                                onClick={() => setIsSidebarOpen(false)}
                                className={({ isActive }) => `
                                    px-4 py-3 text-sm font-medium rounded-xl transition-all flex items-center gap-3
                                    ${isActive
                                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                                    }
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        <chapter.icon size={18} className={isActive ? "text-yellow-400" : "text-slate-400"} />
                                        <div>
                                            <div className="font-bold leading-none">{chapter.label}</div>
                                            <div className={`text-[10px] uppercase tracking-wide mt-1 ${isActive ? "text-slate-400" : "text-slate-400"}`}>{chapter.title.split(': ')[1] || 'Home'}</div>
                                        </div>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Project Context Box */}
                    <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Contexte Projet</h3>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            Application des concepts systémiques au projet Paprec / Protoxyde d'azote.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow w-full relative">
                {/* Re-using the Slinky Background for consistency across the layout */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="fixed top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full border-[60px] border-slate-200/50 blur-3xl opacity-40"></div>
                </div>

                <div className="relative z-10 w-full">
                    {/* 
                        We remove padding here to allow the child pages to handle their own layout 
                        (e.g., full width sections). The child pages already have their own max-w wrappers.
                     */}
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default ThinkingInSystemsLayout;
