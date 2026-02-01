
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { ExternalLink, Github, HardHat, Database, Lightbulb, Search } from 'lucide-react';
import { getAllProjects } from '../data/portfolioData';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    // Get all projects via the helper function
    const allProjects = getAllProjects();

    const filteredProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(p => p.domain === filter);

    return (
        <div>
            <SEO
                title="Projects & Portfolio"
                description="A clear list of build projects, codebases, and experiments."
                keywords="Engineering Portfolio, Coding Projects, Data Science Projects"
            />

            <div className="mb-12 border-b border-white/5 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Selected Works.</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        A collection of codebases, physical builds, research papers, and archived works.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex items-center gap-4 bg-zinc-900/50 p-2 rounded-lg border border-white/5">
                    {['All', 'Civil', 'Data', 'Design', 'Other'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${filter === f
                                ? 'bg-zinc-100 text-zinc-900 shadow-lg'
                                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {filteredProjects.map((project, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/20 transition-all flex flex-col h-full relative overflow-hidden">

                        {/* Domain Icon Background */}
                        <div className="absolute top-4 right-4 text-zinc-800/20 group-hover:text-zinc-800/40 transition-colors">
                            {project.domain === 'Civil' && <HardHat className="w-24 h-24" />}
                            {project.domain === 'Data' && <Database className="w-24 h-24" />}
                            {project.domain === 'Design' && <Lightbulb className="w-24 h-24" />}
                        </div>

                        <div className="flex-grow relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                {project.type && (
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-900 border border-white/5 text-zinc-500 rounded-md">
                                        {project.type}
                                    </span>
                                )}
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md border ${project.domain === 'Civil' ? 'border-amber-900/30 text-amber-700' :
                                    project.domain === 'Data' ? 'border-blue-900/30 text-blue-700' :
                                        project.domain === 'Design' ? 'border-purple-900/30 text-purple-700' :
                                            'border-zinc-800 text-zinc-600'
                                    }`}>
                                    {project.domain}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h2>
                            <p className="text-zinc-500 mb-6 leading-relaxed">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(tech => (
                                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-900/50 border border-white/5 text-zinc-400 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions or Status */}
                        <div className="flex gap-4 border-t border-white/5 pt-6 relative z-10">
                            {(project.link || project.demo) ? (
                                <>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                                            <Github className="w-4 h-4" /> Code
                                        </a>
                                    )}
                                    {project.demo && project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                    )}
                                </>
                            ) : (
                                <span className="text-sm text-zinc-600 italic flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                                    Archived / Private
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
                    <Search className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                    <p className="text-zinc-500">No projects found for the "{filter}" filter.</p>
                    <button onClick={() => setFilter('All')} className="mt-4 text-sm text-blue-400 hover:underline">
                        Reset Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;
