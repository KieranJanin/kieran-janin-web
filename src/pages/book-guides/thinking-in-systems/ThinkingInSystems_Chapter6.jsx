import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Binary,
    Container,
    Network,
    Clock,
    Scale,
    Zap,
    Radio,
    ScrollText,
    Dna,
    Target,
    BrainCircuit,
    Sparkles,
    LayoutDashboard,
    ChevronUp,
    ChevronDown,
    AlertOctagon,
    Library,
    ArrowLeft,
    CheckCircle
} from 'lucide-react';

const ThinkingChapter6 = () => {
    const [activePoint, setActivePoint] = useState(null);

    const leveragePoints = [
        { rank: 12, title: "Chiffres", subtitle: "Constantes", icon: <Binary />, cat: "Faible", app: "Changer la consigne de 0,50€ à 1,00€." },
        { rank: 11, title: "Tampons", subtitle: "Stocks", icon: <Container />, cat: "Faible", app: "Agrandir les bacs." },
        { rank: 10, title: "Structures", subtitle: "Physique", icon: <Network />, cat: "Faible", app: "Déplacer la déchetterie." },
        { rank: 9, title: "Délais", subtitle: "Temps", icon: <Clock />, cat: "Moyen", app: "Réduire le temps de validation." },
        { rank: 8, title: "Équilibrage", subtitle: "Correction", icon: <Scale />, cat: "Moyen", app: "Augmenter le risque perçu." },
        { rank: 7, title: "Renforcement", subtitle: "Moteur", icon: <Zap />, cat: "Moyen", app: "Bouche-à-oreille viral." },
        { rank: 6, title: "Information", subtitle: "Flux", icon: <Radio />, cat: "Fort", app: "Donner un feedback immédiat à l'usager." },
        { rank: 5, title: "Règles", subtitle: "Lois", icon: <ScrollText />, cat: "Fort", app: "Légaliser le retour." },
        { rank: 4, title: "Auto-orga", subtitle: "Évolution", icon: <Dna />, cat: "Fort", app: "Collecte par les pairs." },
        { rank: 3, title: "Buts", subtitle: "Direction", icon: <Target />, cat: "Très Fort", app: "De 'Déchet' à 'Ressource'." },
        { rank: 2, title: "Paradigmes", subtitle: "Mentalité", icon: <BrainCircuit />, cat: "Très Fort", app: "Changer la vue sur l'usager." },
        { rank: 1, title: "Transcender", subtitle: "Sagesse", icon: <Sparkles />, cat: "Ultime", app: "Tout est possible." }
    ];

    const getGradient = (rank) => {
        if (rank >= 10) return "from-red-500 to-orange-500";
        if (rank >= 6) return "from-orange-500 to-yellow-500";
        if (rank >= 3) return "from-yellow-500 to-green-500";
        return "from-green-500 to-blue-500";
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-200">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full border-[20px] border-slate-200/50 blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full border-[80px] border-green-400/5 blur-3xl"></div>
            </div>

            <main className="max-w-4xl mx-auto px-6 py-16 relative z-10">

                <header className="mb-20 text-center">
                    <div className="inline-block bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                        Classement d'Efficacité
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-4">
                        POINTS DE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
                            LEVIER
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium">
                        Où frapper le système pour qu'il bouge.
                    </p>
                </header>

                <div className="space-y-6">
                    {leveragePoints.map((point) => (
                        <button
                            key={point.rank}
                            onClick={() => setActivePoint(activePoint === point.rank ? null : point.rank)}
                            className={`w-full group relative overflow-hidden rounded-[2rem] border-2 text-left transition-all duration-500 ${activePoint === point.rank
                                ? 'bg-white border-slate-900 shadow-2xl scale-105 z-10'
                                : 'bg-white border-slate-100 hover:border-slate-300'
                                }`}
                        >
                            <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${getGradient(point.rank)}`}></div>

                            <div className="p-8 pl-10">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-6">
                                        <span className={`text-5xl font-black ${activePoint === point.rank ? 'text-slate-900' : 'text-slate-200'}`}>
                                            {point.rank}
                                        </span>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase tracking-tight">{point.title}</h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{point.subtitle}</p>
                                        </div>
                                    </div>
                                    {activePoint === point.rank ? <ChevronUp className="text-slate-300" /> : <ChevronDown className="text-slate-300" />}
                                </div>

                                {activePoint === point.rank && (
                                    <div className="mt-8 pt-8 border-t border-slate-100 animate-in slide-in-from-top-4">
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                                                <AlertOctagon size={14} /> Application Projet
                                            </div>
                                            <p className="text-slate-700 font-medium leading-relaxed">
                                                {point.app}
                                            </p>
                                        </div>
                                        <div className="flex justify-end">
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${point.rank <= 6 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                Levier {point.cat}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex justify-between items-center pt-10 border-t border-slate-200 mt-20">
                    <Link to="/books/thinking-in-systems/chapter-5" className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900">
                            <ArrowLeft size={16} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">Chapitre 05 : Les Pièges</span>
                    </Link>

                    <Link to="/books/thinking-in-systems" className="group flex items-center gap-3 text-emerald-600 hover:text-emerald-800 transition-colors">
                        <span className="font-bold uppercase tracking-widest text-xs">Terminer le Guide</span>
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                            <CheckCircle size={16} />
                        </div>
                    </Link>
                </div>

            </main>

            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-slate-900/90 backdrop-blur-md text-white pl-6 pr-2 py-2 rounded-full shadow-2xl flex items-center gap-4 border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest">Conseil</span>
                    <div className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                        Viser Niveau 6
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ThinkingChapter6;
