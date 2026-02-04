import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AlertTriangle,
    Unlock,
    ShieldAlert,
    LayoutDashboard,
    Repeat,
    Trophy,
    Syringe,
    Gavel,
    Compass,
    Crosshair,
    Skull,
    TrendingDown,
    ArrowRight,
    Library,
    ArrowLeft
} from 'lucide-react';

const ThinkingChapter5 = () => {
    const [activeTrap, setActiveTrap] = useState(null);

    const traps = [
        {
            id: 'policy',
            title: "Résistance",
            icon: <Repeat />,
            risk: "Élevé",
            desc: "Chaque acteur tire la couverture. Le système gèle."
        },
        {
            id: 'commons',
            title: "Tragédie des Communs",
            icon: <Skull />,
            risk: "Critique",
            desc: "L'intérêt individuel détruit la ressource partagée."
        },
        {
            id: 'drift',
            title: "Dérive",
            icon: <TrendingDown />,
            risk: "Moyen",
            desc: "Les standards baissent lentement. La grenouille bout."
        },
        {
            id: 'addiction',
            title: "Addiction",
            icon: <Syringe />,
            risk: "Élevé",
            desc: "Le correctif rapide affaiblit la capacité naturelle du système."
        },
        {
            id: 'rule_beating',
            title: "Contournement",
            icon: <Gavel />,
            risk: "Critique",
            desc: "Obéir à la lettre, violer l'esprit. Fausses IDs."
        },
        {
            id: 'wrong_goal',
            title: "Mauvais But",
            icon: <Compass />,
            risk: "Élevé",
            desc: "Optimiser pour 'Nombre de Bacs' au lieu de 'Sécurité'."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-200">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full border-[30px] border-slate-200/50 blur-3xl opacity-50"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full border-[50px] border-red-400/10 blur-3xl"></div>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">

                <header className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 bg-red-50 px-4 py-2 rounded-full border border-red-100">
                        <AlertTriangle size={16} className="text-red-500" />
                        <span className="text-xs font-black uppercase tracking-widest text-red-500">Zone de Danger</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-6">
                        PIÈGES <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600">
                            SYSTÉMIQUES
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium">
                        Où les bonnes intentions vont mourir. Si votre prototype déclenche l'un de ces mécanismes, il échouera.
                    </p>
                </header>

                {/* Grille des Pièges */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {traps.map((trap) => (
                        <button
                            key={trap.id}
                            onClick={() => setActiveTrap(trap)}
                            className={`group relative p-8 rounded-[2rem] text-left transition-all duration-300 border hover:-translate-y-1 ${activeTrap?.id === trap.id
                                ? 'bg-slate-900 border-slate-900 text-white shadow-2xl scale-105 z-10'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-red-300 hover:shadow-lg'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-2xl ${activeTrap?.id === trap.id ? 'bg-white/20' : 'bg-slate-50 text-slate-400'}`}>
                                    {React.cloneElement(trap.icon, { size: 24 })}
                                </div>
                                <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${trap.risk === "Critique" ? "bg-red-500 text-white" :
                                    trap.risk === "Élevé" ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-500"
                                    }`}>
                                    {trap.risk}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black mb-3">{trap.title}</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${activeTrap?.id === trap.id ? 'text-slate-300' : 'text-slate-500'}`}>
                                {trap.desc}
                            </p>

                            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${activeTrap?.id === trap.id ? 'text-yellow-400' : 'text-slate-300 group-hover:text-red-400'}`}>
                                Analyser <ArrowRight size={12} />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Panneau de Diagnostic */}
                {activeTrap && (
                    <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-2xl animate-in slide-in-from-bottom-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-black mb-6 flex items-center gap-4">
                                    {activeTrap.title}
                                    <span className="text-red-500 text-sm px-4 py-1 bg-red-50 rounded-full border border-red-100 uppercase tracking-widest">Détecté</span>
                                </h3>
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                                            <Crosshair size={14} /> Exemple
                                        </h4>
                                        <p className="text-slate-700 font-medium">
                                            {activeTrap.id === 'commons' && "Surpâturage. Le bénéfice est pour moi (+1), le coût est pour tous (pollution)."}
                                            {activeTrap.id === 'rule_beating' && "Dépenser tout le budget à la fin de l'année pour ne pas le perdre l'an prochain."}
                                            {activeTrap.id === 'addiction' && "Utiliser des antidouleurs au lieu de faire de la rééducation."}
                                            {!['commons', 'rule_beating', 'addiction'].includes(activeTrap.id) && "Conflit d'intérêts systémique classique."}
                                        </p>
                                    </div>

                                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-600 mb-2">
                                            <Unlock size={14} /> Solution
                                        </h4>
                                        <p className="text-green-800 font-medium">
                                            {activeTrap.id === 'commons' ? "Coercition mutuelle, mutuellement acceptée. (Régulation)." : "Changer la structure du système pour aligner les buts."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-10 rounded-[2rem] relative overflow-hidden">
                                <ShieldAlert className="absolute top-[-20px] right-[-20px] text-white opacity-5 w-48 h-48" />
                                <h4 className="text-yellow-400 font-black uppercase tracking-widest mb-4">Diagnostic Paprec</h4>
                                <p className="text-xl font-medium leading-relaxed">
                                    {activeTrap.id === 'commons' && "Le flux de déchets est le commun. Les utilisateurs gagnent en commodité en jetant. Paprec paie l'explosion. Vous devez internaliser ce coût pour l'utilisateur."}
                                    {activeTrap.id === 'rule_beating' && "Si vous demandez une ID, ils utiliseront des fausses. Si vous demandez un reçu, ils le falsifieront. Ne jouez pas au chat et à la souris."}
                                    {activeTrap.id === 'addiction' && "Si la solution est 'Meilleure machine de tri', vous déplacez le fardeau. L'addiction à la technologie coûteuse commence."}
                                    {!['commons', 'rule_beating', 'addiction'].includes(activeTrap.id) && "Ce piège menace la viabilité à long terme de votre solution."}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center pt-10 border-t border-slate-200 mt-20">
                    <Link to="/books/thinking-in-systems/chapter-2" className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900">
                            <ArrowLeft size={16} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">Chapitre 02</span>
                    </Link>

                    <Link to="/books/thinking-in-systems/chapter-6" className="group flex items-center gap-3 text-slate-900 hover:text-orange-500 transition-colors">
                        <span className="font-bold uppercase tracking-widest text-xs">Chapitre 06 : Point de Levier</span>
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                </div>

            </main>
        </div>
    );
};

export default ThinkingChapter5;
