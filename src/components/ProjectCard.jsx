import React from 'react';
import { HardHat, Database, Lightbulb } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group p-6 rounded-xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-full shadow-sm dark:shadow-none">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md">
                            {project.type}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                </div>
                <div className="text-zinc-400 dark:text-zinc-700 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    {project.domain === 'Civil' && <HardHat className="w-5 h-5" />}
                    {project.domain === 'Data' && <Database className="w-5 h-5" />}
                    {project.domain === 'Design' && <Lightbulb className="w-5 h-5" />}
                </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed mb-6 flex-grow">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-medium text-zinc-500 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800/50 px-2 py-0.5 rounded-full">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
