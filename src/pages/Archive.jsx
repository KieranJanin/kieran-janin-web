import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import {
    ArrowLeft,
    MapPin,
    HardHat,
    Database,
    Lightbulb,
    Search
} from 'lucide-react';
import { eras } from '../data/portfolioData';

const Archive = () => {
    const [filter, setFilter] = useState('All');
    const navigate = useNavigate();

    const filteredEras = eras.map(era => ({
        ...era,
        projects: filter === 'All' ? era.projects : era.projects.filter(p => p.domain === filter)
    })).filter(era => era.projects.length > 0);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-zinc-800">
            <SEO
                title="Career Archive & Timeline"
                description="Kieran Janin's career timeline: Bouygues R&D Lead, UC Berkeley Research, and more."
                keywords="Kieran Janin Career, Bouygues R&D Lead, UC Berkeley Research"
            />

            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Overview
                    </button>
                    <div className="flex items-center gap-6">
                        {['All', 'Civil', 'Data', 'Design'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`text-xs font-bold uppercase tracking-widest transition-colors ${filter === f ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-20">

                <div className="mb-20">
                    <h1 className="text-5xl font-bold tracking-tighter mb-4">The Archive.</h1>
                    <p className="text-zinc-500 max-w-xl text-lg">
                        A chronological trace of professional milestones, research projects, and technical deployments across three continents.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="relative border-l border-white/10 ml-4 md:ml-0">

                    {filteredEras.map((era, eraIdx) => (
                        <div key={era.id} className="mb-24 relative pl-8 md:pl-0">

                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a]" />

                            <div className="md:grid md:grid-cols-12 gap-12">

                                {/* Era Sidebar */}
                                <div className="md:col-span-4 mb-8 md:mb-0">
                                    <div className="sticky top-24">
                                        <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest block mb-2">
                                            {era.period}
                                        </span>
                                        <h2 className="text-2xl font-bold mb-1">{era.company}</h2>
                                        <p className="text-zinc-400 font-medium mb-4">{era.role}</p>
                                        <div className="flex items-center gap-2 text-zinc-600 text-sm mb-6">
                                            <MapPin className="w-3 h-3" /> {era.location}
                                        </div>
                                        <p className="text-zinc-500 text-sm leading-relaxed pr-8 italic">
                                            "{era.description}"
                                        </p>
                                    </div>
                                </div>

                                {/* Projects List */}
                                <div className="md:col-span-8 space-y-4">
                                    {era.projects.map((project, pIdx) => (
                                        <div
                                            key={pIdx}
                                            className="group p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-800 text-zinc-400 rounded-md">
                                                            {project.type}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold group-hover:text-white transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                                <div className="text-zinc-700 group-hover:text-zinc-400 transition-colors">
                                                    {project.domain === 'Civil' && <HardHat className="w-5 h-5" />}
                                                    {project.domain === 'Data' && <Database className="w-5 h-5" />}
                                                    {project.domain === 'Design' && <Lightbulb className="w-5 h-5" />}
                                                </div>
                                            </div>

                                            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                                                {project.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-[10px] font-medium text-zinc-600 border border-zinc-800/50 px-2 py-0.5 rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* Empty State */}
                {filteredEras.length === 0 && (
                    <div className="py-40 text-center">
                        <Search className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                        <p className="text-zinc-600">No projects found for the "{filter}" filter.</p>
                    </div>
                )}

            </main>

            <footer className="max-w-5xl mx-auto px-6 py-20 border-t border-white/5 text-center">
                <p className="text-xs text-zinc-600 uppercase tracking-widest">
                    Continuous Integration • Continuous Evolution
                </p>
            </footer>
        </div>
    );
};

export default Archive;