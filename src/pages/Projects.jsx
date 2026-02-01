import React from 'react';
import SEO from '../components/SEO';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Design Fiction Facilitator",
            description: "Interactive workshop tool for generating and exploring future scenarios.",
            stack: ["React", "Vite", "Tailwind"],
            link: "https://github.com",
            demo: "https://design-fiction.kieranjanin.com"
        },
        {
            title: "Project Alpha",
            description: "A full-stack application leveraging AI for structural defect detection.",
            stack: ["React", "Python", "TensorFlow"],
            link: "https://github.com",
            demo: "#"
        },
        {
            title: "Urban Flow Sim",
            description: "Agent-based simulation of pedestrian traffic in transit hubs.",
            stack: ["Unity", "C#", "Data Analysis"],
            link: "https://github.com",
            demo: "#"
        },
        {
            title: "Kieran Janin Web",
            description: "The portfolio site you are looking at right now. Built with Vite and React.",
            stack: ["React", "Tailwind", "Vite"],
            link: "https://github.com",
            demo: "#"
        }
    ];

    return (
        <div>
            <SEO
                title="Projects & Portfolio"
                description="A clear list of build projects, codebases, and experiments."
                keywords="Engineering Portfolio, Coding Projects, Data Science Projects"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Selected Works.</h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    A collection of codebases, physical builds, and research papers.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/20 transition-all flex flex-col h-full">
                        <div className="flex-grow">
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h2>
                            <p className="text-zinc-500 mb-6 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map(tech => (
                                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-900 border border-white/5 text-zinc-400 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 border-t border-white/5 pt-6">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                                <Github className="w-4 h-4" /> Code
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
