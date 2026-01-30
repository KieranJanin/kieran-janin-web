import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
    HardHat,
    Database,
    Lightbulb,
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    BookOpen,
    Cpu,
    Briefcase
} from 'lucide-react';
import BridgeImage from '../assets/bridge_centered.png';

const Home = () => {

    const domains = [
        {
            title: "Civil Engineering",
            path: "/civil-engineering",
            description: "Resilient physical infrastructure and structural integrity.",
            icon: <HardHat className="w-6 h-6" />,
            color: "hover:text-blue-400",
            border: "hover:border-blue-500/50"
        },
        {
            title: "Data Science",
            path: "/data-science",
            description: "Predictive modeling and systems analysis for complex insights.",
            icon: <Database className="w-6 h-6" />,
            color: "hover:text-emerald-400",
            border: "hover:border-emerald-500/50"
        },
        {
            title: "Design Thinking",
            path: "/design-thinking",
            description: "Human-centric frameworks for iterative problem solving.",
            icon: <Lightbulb className="w-6 h-6" />,
            color: "hover:text-amber-400",
            border: "hover:border-amber-500/50"
        }
    ];

    const portfolio = [
        {
            title: "Structural Health Monitoring",
            category: "Data + Civil",
            description: "Implemented real-time sensor arrays and predictive maintenance algorithms for aging bridge infrastructure.",
            tags: ["Python", "IoT", "FEA"]
        },
        {
            title: "Urban Flow Optimization",
            category: "Design + Data",
            description: "Redesigning pedestrian transit hubs using human-centric simulation data and iterative prototype testing.",
            tags: ["Simulation", "UX Research", "GIS"]
        },
        {
            title: "Parametric Bridge Design",
            category: "Civil + Design",
            description: "Algorithmic generation of structural forms to minimize material waste while maximizing aesthetic impact.",
            tags: ["Grasshopper", "Optimization", "BIM"]
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-white selection:text-black font-sans selection:bg-zinc-700">
            <SEO
                title="Integrated Engineering Practitioner"
                description="Kieran Janin: Integrated Engineering Practitioner specializing in Data-Driven Design and Civil Engineering Innovation."
                keywords="Kieran Janin, Integrated Engineering Practitioner, Data-Driven Design"
            />

            {/* Background Bridge Image */}
            <div className="absolute top-0 left-0 w-full h-[80vh] overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/80 to-[#0a0a0a] z-10" />
                <img
                    src={BridgeImage}
                    alt="Background Bridge"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="w-full max-w-7xl md:w-[90%] lg:w-[80%] mx-auto">

                    {/* Hero Section */}
                    <section className="mb-32">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                            I build resilient infrastructure, analyze the data that powers it, and design the experiences that make it useful.
                        </h1>
                        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Kieran Janin — An integrated practitioner working at the intersection of
                            <span className="text-white"> Physical Systems</span>,
                            <span className="text-white"> Digital Intelligence</span>, and
                            <span className="text-white"> Human Design</span>.
                        </p>
                    </section>

                    {/* Latest Build */}
                    <section className="mb-32">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Latest Deployment</h2>
                        </div>
                        <div className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 transition-all hover:bg-zinc-900 hover:border-white/10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                        Project Alpha <Cpu className="w-5 h-5 text-zinc-400" />
                                    </h3>
                                    <p className="text-zinc-400 max-w-md">
                                        The application I just deployed. It solves X by leveraging Y, built during a single-night sprint.
                                    </p>
                                </div>
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95"
                                >
                                    View Live App <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* The Triad Grid */}
                    <section className="mb-32">
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Core Domains</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {domains.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 transition-all duration-300 ${item.border} flex flex-col h-full`}
                                >
                                    <div className={`mb-6 text-zinc-400 transition-colors ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">
                                        Visit Pillar <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Professional Portfolio / Selected Works */}
                    <section className="mb-32">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-zinc-500" />
                                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Selected Works</h2>
                            </div>
                            <Link to="/projects" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800 hover:decoration-white">View Full Archive</Link>
                        </div>

                        <div className="space-y-4">
                            {portfolio.map((work, index) => (
                                <div key={index} className="group flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl border border-white/5 hover:bg-zinc-900/40 transition-all duration-300">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-800 text-zinc-400 rounded-md">
                                                {work.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{work.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-4">{work.description}</p>
                                        <div className="flex gap-4">
                                            {work.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-medium text-zinc-600">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Secondary Links / Blog */}
                    <section className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex gap-8">
                            <Link to="/blog" className="group flex items-center gap-3">
                                <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">The Blog</p>
                                    <p className="text-xs text-zinc-500">Thoughts on the built world.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <Link to="/contact" className="p-2 text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></Link>
                        </div>
                    </section>

                </div>
            </main>

            <footer className="px-6 py-12 text-center text-zinc-600 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} Kieran Janin. Integrated Engineering Practitioner.
            </footer>
        </div>
    );
};

export default Home;