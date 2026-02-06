import React from 'react';
import SEO from '../components/SEO';
import { Lightbulb, Users, PenTool, ClipboardList } from 'lucide-react';
import { getProjectsByDomain } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const DesignThinking = () => {
    const designProjects = getProjectsByDomain('Design');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 p-6 pt-32">
            <SEO
                title="Design Thinking & Strategy"
                description="Human-centric problem solving, UX research, and iterative prototyping."
                keywords="Design Thinking, UX Research, Product Strategy"
            />

            <div className="max-w-5xl mx-auto">
                <div className="mb-12 border-b border-zinc-200 dark:border-white/5 pb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-400">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Design Thinking</h1>
                    </div>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        Solving the right problems, not just the technical ones. A human-centric approach to engineering challenges.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-20">
                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-amber-500/20 transition-all group shadow-sm dark:shadow-none">
                        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            <Users className="w-5 h-5" /> Empathy & Research
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                            Qualitative mastery of the problem space through interviews, observation, and synthesis of user needs.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-amber-500/20 transition-all group shadow-sm dark:shadow-none">
                        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            <PenTool className="w-5 h-5" /> Rapid Prototyping
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                            Fail fast, learn faster. Building low-fidelity prototypes to test assumptions before committing to expensive code.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-amber-500/20 transition-all group md:col-span-2 shadow-sm dark:shadow-none">
                        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            <ClipboardList className="w-5 h-5" /> Strategic Facilitation
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                            Guiding cross-functional teams through complex decision-making processes using d.school methodologies.
                        </p>
                    </div>
                </div>

                {/* Filtered Projects Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Selected Design Projects</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {designProjects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignThinking;
