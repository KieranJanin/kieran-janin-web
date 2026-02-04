import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Boxes,
    Target,
    Droplets,
    RefreshCcw,
    AlertTriangle,
    Zap,
    ChevronRight,
    LayoutDashboard,
    ArrowRight,
    Library,
    ArrowLeft
} from 'lucide-react';

const ThinkingChapter1 = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = {
        overview: {
            title: "La Trinité",
            icon: <Boxes className="w-6 h-6" />,
            desc: "Un système est un ensemble d'éléments interconnectés, organisés de manière cohérente pour atteindre un but."
        },
        anatomy: {
            title: "Éléments & Règles",
            icon: <Target className="w-6 h-6" />,
            desc: "Les éléments sont visibles. Les règles sont invisibles. Le but est souvent caché."
        },
        stocks: {
            title: "Stocks & Flux",
            icon: <Droplets className="w-6 h-6" />,
            desc: "La mémoire du système. Les délais. Les tampons."
        },
        feedback: {
            title: "Rétroaction",
            icon: <RefreshCcw className="w-6 h-6" />,
            desc: "Le moteur du comportement. Équilibrage vs Renforcement."
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-200">

            {/* Arrière-plan Slinky Abstrait (Standardisé) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full border-[60px] border-slate-200/50 blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full border-[40px] border-yellow-400/10 blur-2xl"></div>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                {/* En-tête */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg">1</div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Fondamentaux</h2>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-8">
                        ANATOMIE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                            DU SYSTÈME
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl leading-relaxed italic border-l-4 border-slate-200 pl-6">
                        "Je n'ai pas encore vu de problème, aussi compliqué soit-il, qui, regardé de la bonne manière, ne devienne encore plus compliqué."
                    </p>
                </header>

                {/* Contenu Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">

                    {/* Menu Latéral */}
                    <div className="lg:col-span-4 space-y-4">
                        {Object.entries(sections).map(([key, section]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`w-full p-6 rounded-[2rem] text-left transition-all duration-300 border border-slate-200 flex items-center justify-between group ${activeSection === key
                                    ? 'bg-slate-900 text-white shadow-xl scale-105'
                                    : 'bg-white hover:border-slate-300 hover:shadow-md'
                                    }`}
                            >
                                <div>
                                    <div className={`mb-2 ${activeSection === key ? 'text-yellow-400' : 'text-slate-400'}`}>{section.icon}</div>
                                    <div className="font-bold text-lg">{section.title}</div>
                                </div>
                                {activeSection === key && <ChevronRight className="text-white" />}
                            </button>
                        ))}
                    </div>

                    {/* Zone de Contenu */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Carte Principale */}
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50 to-orange-50 rounded-bl-full opacity-50 pointer-events-none"></div>

                            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                                <Boxes className="text-red-500" /> Les 3 Piliers
                            </h3>

                            <div className="space-y-6">
                                <AnatomyCard
                                    label="Éléments (Visible)"
                                    desc="Les acteurs physiques. Dans votre projet : Les utilisateurs, les bouteilles, les camions Paprec."
                                    color="border-red-400 bg-red-50/50"
                                />
                                <AnatomyCard
                                    label="Interconnexions (Invisible)"
                                    desc="Les règles du jeu. Le flux d'information. Comment l'utilisateur sait-il que la bouteille est dangereuse ?"
                                    color="border-orange-400 bg-orange-50/50"
                                />
                                <AnatomyCard
                                    label="But (Caché)"
                                    desc="Le comportement réel. Le but du système actuel est 'Se débarrasser de la preuve', pas 'Recycler'."
                                    color="border-yellow-400 bg-yellow-50/50"
                                />
                            </div>
                        </div>

                        {/* Simulateur Stocks */}
                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Stocks & Délais</h3>
                                    <Zap className="text-yellow-400 animate-pulse" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <StockDisplay title="Stock : Bouteilles" value="85%" color="bg-red-500" />
                                    <div className="flex flex-col justify-center items-center text-xs font-bold uppercase tracking-widest text-slate-500 space-y-2">
                                        <span>Flux Entrant</span>
                                        <div className="w-full h-px bg-slate-700"></div>
                                        <span>Flux Sortant</span>
                                    </div>
                                    <StockDisplay title="Stock : Confiance" value="20%" color="bg-blue-500" />
                                </div>

                                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                                    <div className="flex gap-4">
                                        <AlertTriangle className="text-yellow-400 shrink-0" />
                                        <p className="text-sm font-medium leading-relaxed opacity-90">
                                            <strong>Miroir Stratégique :</strong> Vous ne pouvez pas vider le stock de bouteilles instantanément. Le système a une inertie. Votre prototype doit gérer le délai entre "J'installe le bac" et "Les gens l'utilisent".
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between items-center pt-10 border-t border-slate-200">
                    <Link to="/books/thinking-in-systems" className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900">
                            <ArrowLeft size={16} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">Retour au QG</span>
                    </Link>

                    <Link to="/books/thinking-in-systems/chapter-2" className="group flex items-center gap-3 text-slate-900 hover:text-orange-500 transition-colors">
                        <span className="font-bold uppercase tracking-widest text-xs">Chapitre Suivant : Le Zoo</span>
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};

const AnatomyCard = ({ label, desc, color }) => (
    <div className={`p-6 border-l-4 rounded-r-2xl ${color}`}>
        <h4 className="font-bold text-lg mb-1">{label}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

const StockDisplay = ({ title, value, color }) => (
    <div className="text-center">
        <div className="h-32 bg-slate-800 rounded-2xl relative overflow-hidden mb-4 border border-slate-700">
            <div className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ${color}`} style={{ height: value }}></div>
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</div>
    </div>
);

export default ThinkingChapter1;
