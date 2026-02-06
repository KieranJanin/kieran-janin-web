import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import {
    ArrowLeft,
    MapPin,
    HardHat,
    Database,
    Lightbulb,
    Search,
    ChevronDown,
    ChevronUp,
    BookOpen
} from 'lucide-react';
import { eras } from '../data/portfolioData';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const CourseworkDropdown = ({ coursework }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!coursework || coursework.length === 0) return null;

    return (
        <div className="mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors w-full"
            >
                <BookOpen className="w-4 h-4" />
                Relevant Coursework
                {isOpen ? <ChevronUp className="w-3 h-3 ml-auto" /> : <ChevronDown className="w-3 h-3 ml-auto" />}
            </button>

            {isOpen && (
                <ul className="mt-4 space-y-2">
                    {coursework.map((course, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 pl-6 relative before:absolute before:left-2 before:top-2 before:w-1 before:h-1 before:bg-zinc-400 dark:before:bg-zinc-600 before:rounded-full">
                            {course}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const ProjectCard = ({ project, color }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-white/5 hover:border-[var(--hover-color)] hover:bg-white dark:hover:bg-[color-mix(in_srgb,var(--hover-color),transparent_80%)] transition-all duration-300"
            style={{ '--hover-color': color }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md">
                            {project.type}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-[var(--hover-color)] dark:group-hover:text-zinc-100 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <div className="text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-400 dark:group-hover:text-zinc-200 transition-colors">
                    {project.domain === 'Civil' && <HardHat className="w-5 h-5" />}
                    {project.domain === 'Data' && <Database className="w-5 h-5" />}
                    {project.domain === 'Design' && <Lightbulb className="w-5 h-5" />}
                </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed mb-6">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800/50 px-2 py-0.5 rounded-full">
                        {t}
                    </span>
                ))}
            </div>

            {/* Details Dropdown */}
            {project.details && (
                <div className="mt-4 border-t border-zinc-200 dark:border-zinc-800/50 pt-3">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors w-full"
                    >
                        {isOpen ? "Hide Details" : "Read More"}
                        {isOpen ? <ChevronUp className="w-3 h-3 ml-auto" /> : <ChevronDown className="w-3 h-3 ml-auto" />}
                    </button>

                    {isOpen && (
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                            {project.details}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

const Archive = () => {
    const [filter, setFilter] = useState('All');
    const { theme } = useTheme();

    const filteredEras = eras.map(era => ({
        ...era,
        projects: filter === 'All' ? era.projects : era.projects.filter(p => p.domain === filter)
    })).filter(era => era.projects.length > 0);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
            <SEO
                title="Career Archive & Timeline"
                description="Kieran Janin's career timeline: Bouygues R&D Lead, UC Berkeley Research, and more."
                keywords="Kieran Janin Career, Bouygues R&D Lead, UC Berkeley Research"
            />

            <div className="max-w-5xl mx-auto">

                <div className="mb-20">
                    <h1 className="text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-white">The Archive.</h1>
                    <p className="text-zinc-600 dark:text-zinc-500 max-w-xl text-lg mb-8">
                        A chronological trace of professional milestones, research projects, and technical deployments across three continents.
                    </p>

                    {/* Filters */}
                    <div className="flex items-center gap-4 bg-white dark:bg-zinc-900/50 p-2 rounded-lg border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none w-fit">
                        {['All', 'Civil', 'Data', 'Design'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${filter === f
                                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md'
                                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Grid */}
                <div className="relative border-l border-zinc-200 dark:border-white/10 ml-4 md:ml-0">

                    {filteredEras.map((era, eraIdx) => (
                        <div key={era.id} className="mb-24 relative pl-8 md:pl-0">

                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-50 dark:border-[#0a0a0a] ring-2 ring-zinc-200 dark:ring-white/10 z-10 transition-colors duration-300" />

                            <div className="md:grid md:grid-cols-12 gap-12">

                                {/* Era Sidebar */}
                                <div className="md:col-span-4 mb-8 md:mb-0">
                                    <div className="sticky top-24">
                                        <div className="flex items-center gap-4 mb-4 mt-2">
                                            <div className="w-12 h-px bg-zinc-300 dark:bg-zinc-800" />
                                            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-600 uppercase tracking-widest">
                                                {era.period}
                                            </span>
                                        </div>

                                        {/* Logo Placeholder */}
                                        <div className="mb-4">
                                            <a
                                                href={era.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-12 h-12 rounded-lg overflow-hidden transition-transform hover:scale-105 hover:brightness-110 shadow-sm dark:shadow-none"
                                            >
                                                <div className="w-full h-full flex items-center justify-center">
                                                    {/* Replace src with era.logo when actual images are available */}
                                                    <img
                                                        src={era.logo[theme] || era.logo.dark} // Fallback to dark if theme undefined
                                                        alt={`${era.company} logo`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.style.display = 'none';
                                                            e.target.parentNode.classList.add('bg-zinc-100', 'dark:bg-zinc-800');
                                                            e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-zinc-400 dark:text-zinc-500">${era.company[0]}</span>`;
                                                        }}
                                                    />
                                                </div>
                                            </a>
                                        </div>

                                        <h2 className="text-2xl font-bold mb-1">
                                            <a
                                                href={era.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-white transition-colors hover:underline hover:decoration-zinc-400 dark:hover:decoration-zinc-600 hover:underline-offset-4"
                                            >
                                                {era.company}
                                            </a>
                                        </h2>
                                        <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4">{era.role}</p>
                                        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-600 text-sm mb-6">
                                            <MapPin className="w-3 h-3" /> {era.location}
                                        </div>
                                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed pr-8 italic">
                                            "{era.description}"
                                        </p>

                                        {/* Coursework Dropdown - Only shows if era has coursework */}
                                        <CourseworkDropdown coursework={era.coursework} />
                                    </div>
                                </div>

                                {/* Projects List */}
                                <div className="md:col-span-8 space-y-4">
                                    {era.projects.map((project, pIdx) => (
                                        <ProjectCard key={pIdx} project={project} color={era.color} />
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* Empty State */}
                {
                    filteredEras.length === 0 && (
                        <div className="py-40 text-center">
                            <Search className="w-12 h-12 text-zinc-300 dark:text-zinc-800 mx-auto mb-4" />
                            <p className="text-zinc-500 dark:text-zinc-600">No projects found for the "{filter}" filter.</p>
                        </div>
                    )
                }

            </div>
        </div >
    );
};
export default Archive;