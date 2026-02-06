import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showModal]);

    return (
        <>
            <div className="group p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/20 transition-all flex flex-col h-full shadow-sm dark:shadow-none">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md">
                            {project.type}
                        </span>
                        {project.company && (
                            <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                                @ {project.company}
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-6">
                        {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tag => (
                            <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto">
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                        Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>

            {/* Modal Portal - Rendered conditionally */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-8 pr-12">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
                                {project.type} {project.company && `— ${project.company}`}
                            </span>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                                {project.title}
                            </h2>
                        </div>

                        <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <p className="text-lg text-zinc-900 dark:text-zinc-200 font-medium">
                                {project.desc}
                            </p>

                            {project.details && (
                                <p>
                                    {project.details}
                                </p>
                            )}

                            <div className="pt-6 border-t border-zinc-100 dark:border-white/5">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Technologies & Methods</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-medium border border-zinc-200 dark:border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {(project.link && project.link !== "#") && (
                                <div className="pt-6">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-black dark:text-white hover:underline underline-offset-4"
                                    >
                                        View Project <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
