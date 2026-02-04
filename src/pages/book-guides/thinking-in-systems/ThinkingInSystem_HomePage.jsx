import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    Map,
    AlertTriangle,
    Zap,
    ArrowRight,
    LayoutDashboard,
    Target,
    ChevronRight,
    Activity,
    Layers,
    Library
} from 'lucide-react';

const ThinkingInSystemsHome = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const chapters = [
        {
            id: 1,
            title: "Chapitre 1",
            subtitle: "Les Fondamentaux",
            icon: <Layers className="w-6 h-6" />,
            desc: "Comprendre la structure. Stocks, Flux et la différence cruciale entre le but affiché et le but réel du système.",
            action: "Analyser la Structure",
            color: "from-red-500 to-orange-500",
            status: "Terminé",
            path: "/books/thinking-in-systems/chapter-1"
        },
        {
            id: 2,
            title: "Chapitre 2",
            subtitle: "Le Zoo des Systèmes",
            icon: <Activity className="w-6 h-6" />,
            desc: "Identifier l'animal. Êtes-vous face à un Thermostat qui fuit ou une Tragédie des Communs ?",
            action: "Diagnostiquer",
            color: "from-orange-500 to-yellow-500",
            status: "Terminé",
            path: "/books/thinking-in-systems/chapter-2"
        },
        {
            id: 5,
            title: "Chapitre 5",
            subtitle: "Les Pièges",
            icon: <AlertTriangle className="w-6 h-6" />,
            desc: "Éviter les mines. Résistance aux politiques, Déplacement du fardeau et comment les utilisateurs contournent vos règles.",
            action: "Déminer",
            color: "from-yellow-500 to-green-500",
            status: "Critique",
            path: "/books/thinking-in-systems/chapter-5"
        },
        {
            id: 6,
            title: "Chapitre 6",
            subtitle: "Points de Levier",
            icon: <Zap className="w-6 h-6" />,
            desc: "Où intervenir ? Arrêtez de jouer avec les paramètres (12) et changez le flux d'information (6) ou le paradigme (2).",
            action: "Intervenir",
            color: "from-green-500 to-blue-500",
            status: "Priorité",
            path: "/books/thinking-in-systems/chapter-6"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-200">

            {/* Arrière-plan Slinky Abstrait */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full border-[60px] border-slate-200/50 blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full border-[40px] border-yellow-400/10 blur-2xl"></div>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">

                {/* En-tête de Mission */}
                <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-yellow-400 text-xs font-black tracking-widest uppercase mb-6 shadow-md transform -rotate-1">
                            <Zap size={14} />
                            Guide Stratégique
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter leading-none mb-6">
                            CENTRE DE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
                                CONTRÔLE
                            </span>
                        </h1>
                        <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                            Bienvenue dans l'architecture de votre solution. Ne confondez pas la carte avec le territoire.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-black transition-colors shadow-lg">
                                <Target size={16} className="text-yellow-400" />
                                Voir le Brief CPN
                            </button>
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Équipe Design</span>
                        </div>
                    </div>

                    {/* Book Cover Container */}
                    <div className="relative hidden md:flex justify-center items-center h-full min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-50 transform scale-75"></div>
                        <img
                            src="/book-covers/thinking-in-systems.jpg"
                            alt="Thinking in Systems Book Cover"
                            className="w-64 rounded-lg shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 relative z-10"
                        />
                    </div>

                    {/* Carte du Brief - Le Miroir */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-400 to-orange-500 opacity-20 rounded-bl-[4rem]"></div>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Objectif du Système</h3>
                        <p className="text-lg font-bold text-slate-800 leading-snug mb-6">
                            "Inciter les consommateurs à ramener les bouteilles de protoxyde d'azote... tout en garantissant leur anonymité et ne nuisant pas à l'image de Paprec."
                        </p>
                        <div className="flex items-center gap-2 text-red-500 text-xs font-black uppercase tracking-widest bg-red-50 p-3 rounded-lg inline-block">
                            <AlertTriangle size={14} className="inline mr-1" />
                            Conflit Détecté : Anonymat vs Responsabilité
                        </div>
                    </div>
                </header>

                {/* Grille des Chapitres */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {chapters.map((chapter) => (
                        <Link
                            key={chapter.id}
                            to={chapter.path}
                            onMouseEnter={() => setHoveredCard(chapter.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer block"
                        >
                            {/* Indicateur de Status */}
                            <div className={`absolute top-8 right-8 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${chapter.status === "Terminé" ? "bg-slate-100 text-slate-400" :
                                chapter.status === "Critique" ? "bg-red-100 text-red-600" :
                                    "bg-yellow-100 text-yellow-700"
                                }`}>
                                {chapter.status}
                            </div>

                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white bg-gradient-to-br ${chapter.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                {chapter.icon}
                            </div>

                            <h2 className="text-3xl font-black mb-1">{chapter.title}</h2>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{chapter.subtitle}</h3>

                            <p className="text-slate-600 font-medium leading-relaxed mb-8 border-l-2 border-slate-100 pl-4">
                                {chapter.desc}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
                                    {chapter.action}
                                </span>
                                <div className={`w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all`}>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Section Diagnostique Finale */}
                <section className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black mb-6">Prêt pour l'Itération ?</h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Vos prototypes actuels jouent probablement dans la zone de confort (Niveau 12 : Paramètres). Il est temps de monter d'un cran.
                        </p>
                        <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto">
                            <Zap size={20} className="text-white" />
                            Lancer le Stress-Test
                        </button>
                    </div>

                    {/* Cercles Décoratifs */}
                    <div className="absolute left-0 bottom-0 w-64 h-64 border-[40px] border-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute right-0 top-0 w-96 h-96 border-[60px] border-white/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
                </section>

            </main>
        </div>
    );
};

export default ThinkingInSystemsHome;
