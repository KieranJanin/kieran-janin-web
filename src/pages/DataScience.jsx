import React from 'react';
import SEO from '../components/SEO';
import { Database, Network, LineChart, Code2 } from 'lucide-react';
import { getProjectsByDomain } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const DataScience = () => {
    const dataProjects = getProjectsByDomain('Data');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 p-6 pt-32">
            <SEO
                title="Data Science & Analytics"
                description="Expertise in Machine Learning, Urban Data Analytics, and Predictive Modeling."
                keywords="Data Science, Machine Learning, Urban Analytics"
            />

            <div className="max-w-5xl mx-auto">
                <div className="mb-12 border-b border-zinc-200 dark:border-white/5 pb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                            <Database className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Data Science</h1>
                    </div>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        Turning raw urban datasets into actionable insights through predictive modeling and spatial analysis.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-20">
                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all group shadow-sm dark:shadow-none">
                        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            <Network className="w-5 h-5" /> Urban Analytics
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                            Modeling complex pedestrian and traffic flows using graph theory and spatial statistics to improve city mobility.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all group shadow-sm dark:shadow-none">
                        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            <LineChart className="w-5 h-5" /> Predictive Maintenance
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                            Using time-series analysis on IoT sensor data to predict structural failures before they happen.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all group md:col-span-2 shadow-sm dark:shadow-none">
                        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            <Code2 className="w-5 h-5" /> Automated Pipelines
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                            Building robust ETL pipelines that ingest terabytes of construction data to fuel real-time decision making dashboards.
                        </p>
                    </div>
                </div>

                {/* Filtered Projects Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Selected Data Projects</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {dataProjects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataScience;
