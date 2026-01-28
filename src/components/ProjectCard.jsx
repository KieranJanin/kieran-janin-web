import React from 'react';
import { HardHat, Database, Lightbulb } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/20 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-full">
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

            <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-medium text-zinc-600 border border-zinc-800/50 px-2 py-0.5 rounded-full">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
