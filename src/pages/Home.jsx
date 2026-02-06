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
    Briefcase
} from 'lucide-react';
import BridgeLight from '../assets/bridge_centered-light.png';
import BridgeDark from '../assets/bridge_centered-dark.png';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

import { getFeaturedProjects } from '../data/portfolioData';

const Home = () => {
    const { theme } = useTheme();
    const featuredProjects = getFeaturedProjects();

    const domains = [
        {
            title: "Civil Engineering",
            path: "/civil-engineering",
            description: "Resilient physical infrastructure and structural integrity.",
            icon: <HardHat className="w-6 h-6" />,
            color: "hover:text-blue-600 dark:hover:text-blue-400",
            border: "hover:border-blue-500/50"
        },
        {
            title: "Data Science",
            path: "/data-science",
            description: "Predictive modeling and systems analysis for complex insights.",
            icon: <Database className="w-6 h-6" />,
            color: "hover:text-emerald-600 dark:hover:text-emerald-400",
            border: "hover:border-emerald-500/50"
        },
        {
            title: "Design Thinking",
            path: "/design-thinking",
            description: "Human-centric frameworks for iterative problem solving.",
            icon: <Lightbulb className="w-6 h-6" />,
            color: "hover:text-amber-600 dark:hover:text-amber-400",
            border: "hover:border-amber-500/50"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-300">
            <SEO
                title="Civil Engineering, Data Science & Design"
                description="Kieran Janin is an Integrated Engineering Practitioner specializing in Civil Engineering, Data Science, and Human-Centered Design."
                keywords="Civil Engineering, Data Science, Human-Centered Design, Structural Health Monitoring, Integrated Engineering"
            />

            {/* Structured Data for SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Kieran Janin",
                    "url": "https://kieranjanin.com",
                    "sameAs": [
                        "https://github.com",
                        "https://linkedin.com"
                    ],
                    "jobTitle": "Integrated Engineering Practitioner",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "d.school Paris"
                    },
                    "knowsAbout": [
                        "Civil Engineering",
                        "Data Science",
                        "Human-Centered Design",
                        "Structural Health Monitoring",
                        "Rapid Prototyping"
                    ]
                })}
            </script>



            {/* Background Bridge Image */}
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
                <div className={`absolute inset-0 z-20 bg-gradient-to-b ${theme === 'light'
                    ? 'from-blue-50/20 via-gray-50/60 to-gray-50'
                    : 'from-[#0a0a0a]/30 via-[#0a0a0a]/80 to-[#0a0a0a]'
                    }`} />
                <img
                    src={theme === 'light' ? BridgeLight : BridgeDark}
                    alt="Background Bridge"
                    className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                    style={{
                        maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 100%)'
                    }}
                />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="w-full max-w-7xl md:w-[90%] lg:w-[80%] mx-auto">

                    {/* Hero Section */}
                    <section className="mb-32">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-zinc-900 dark:text-white">
                            I build resilient infrastructure, analyze the data that powers it, and design the experiences that make it useful.
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Kieran Janin — An integrated practitioner working at the intersection of
                            <span className="text-black dark:text-white font-medium"> Physical Systems</span>,
                            <span className="text-black dark:text-white font-medium"> Digital Intelligence</span>, and
                            <span className="text-black dark:text-white font-medium"> Human Design</span>.
                        </p>
                    </section>

                    {/* Latest Build */}
                    <section className="mb-32">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Latest Deployment</h2>
                        </div>
                        <div className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-2xl p-8 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-white/10 shadow-sm dark:shadow-none">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-zinc-900 dark:text-white">
                                        Design Fiction Facilitator <Lightbulb className="w-5 h-5 text-zinc-400" />
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                                        A digital companion for facilitating design fiction workshops, helping teams generate and explore future scenarios.
                                    </p>
                                </div>
                                <a
                                    href="https://design-fiction.kieranjanin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-md dark:shadow-none"
                                >
                                    Launch Tool <ExternalLink className="w-4 h-4" />
                                </a>
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
                                    className={`group p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 transition-all duration-300 ${item.border} flex flex-col h-full hover:shadow-md dark:hover:shadow-none`}
                                >
                                    <div className={`mb-6 text-zinc-400 transition-colors ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{item.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors">
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
                            <Link to="/projects" className="text-xs font-bold text-zinc-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-800 hover:decoration-black dark:hover:decoration-white">View Full Archive</Link>
                        </div>

                        <div className="space-y-4">
                            {featuredProjects.map((work, index) => (
                                <a
                                    key={index}
                                    href={work.link || "#"}
                                    target={work.link && work.link !== "#" ? "_blank" : "_self"}
                                    rel={work.link && work.link !== "#" ? "noopener noreferrer" : ""}
                                    className="block group flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl bg-white dark:bg-transparent border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-all duration-300 hover:shadow-sm dark:hover:shadow-none cursor-pointer"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md">
                                                {work.type}
                                            </span>
                                            {work.company && (
                                                <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                                                    @ {work.company}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">{work.title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-4">{work.desc}</p>
                                        <div className="flex gap-4">
                                            {work.tech.map(tag => (
                                                <span key={tag} className="text-[10px] font-medium text-zinc-500 dark:text-zinc-600">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Secondary Links / Blog */}
                    <section className="border-t border-zinc-200 dark:border-white/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex gap-8">
                            <Link to="/blog" className="group flex items-center gap-3">
                                <div className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:bg-zinc-800 transition-colors">
                                    <BookOpen className="w-5 h-5 text-zinc-700 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-zinc-200" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-200">The Blog</p>
                                    <p className="text-xs text-zinc-500">Thoughts on the built world.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <a href="https://github.com/KieranJanin" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="https://www.linkedin.com/in/kieranjanin/" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <Link to="/contact" className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"><Mail className="w-5 h-5" /></Link>
                        </div>
                    </section>

                </div>
            </main>

        </div>
    );
};

export default Home;