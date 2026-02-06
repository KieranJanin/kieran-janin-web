import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Thermometer,
    Users,
    Warehouse,
    Leaf,
    LayoutDashboard,
    ChevronRight,
    Activity,
    Zap,
    ShieldCheck,
    Timer,
    IterationCcw,
    Library,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';

const ThinkingChapter2 = () => {
    const [selectedAnimal, setSelectedAnimal] = useState('thermostat');

    const animals = {
        thermostat: {
            title: "Le Thermostat",
            subtitle: "Boucles Concurrentes",
            icon: <Thermometer />,
            color: "from-red-500 to-orange-500",
            bg: "bg-red-50",
            border: "border-red-200",
            insight: "Si la 'Peur' (Fuite) est plus forte que l''Incitation' (Chauffage), le système reste froid."
        },
        population: {
            title: "Population",
            subtitle: "Renforcement",
            icon: <Users />,
            color: "from-orange-500 to-yellow-500",
            bg: "bg-orange-50",
            border: "border-orange-200",
            insight: "Le bouche-à-oreille est exponentiel. Une identité exposée tue la croissance instantanément."
        },
        inventory: {
            title: "Le Concessionnaire",
            subtitle: "Délais & Oscillations",
            icon: <Warehouse />,
            color: "from-yellow-500 to-green-500",
            bg: "bg-yellow-50",
            border: "border-yellow-200",
            insight: "Réagir trop vite aux niveaux de remplissage crée le chaos. Il faut lisser les flux."
        },
        limits: {
            title: "La Pêcherie",
            subtitle: "Limites de Croissance",
            icon: <Leaf />,
            color: "from-green-500 to-blue-500",
            bg: "bg-green-50",
            border: "border-green-200",
            insight: "La ressource 'Anonymat' est épuisable. Si vous la surpêchez (trop de contrôles), le système s'effondre."
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-200">

            {/* Arrière-plan Slinky Abstrait */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full border-[60px] border-slate-200/50 blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full border-[40px] border-blue-400/10 blur-2xl"></div>
            </div>


            <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">

                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-500 flex items-center justify-center text-white font-black text-xl shadow-lg">2</div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Archétypes</h2>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-8">
                        ZOO DES <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
                            SYSTÈMES
                        </span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sélecteur d'Animal */}
                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 pl-2">Sélectionner un Modèle</h3>
                        {Object.entries(animals).map(([key, animal]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedAnimal(key)}
                                className={`w-full p-6 rounded-[2rem] text-left transition-all duration-300 border border-slate-200 flex items-center gap-4 group ${selectedAnimal === key
                                    ? 'bg-slate-900 text-white shadow-xl translate-x-2'
                                    : 'bg-white hover:border-slate-300'
                                    }`}
                            >
                                <div className={`p-3 rounded-xl ${selectedAnimal === key ? 'bg-white/10' : 'bg-slate-100 text-slate-500'}`}>
                                    {animal.icon}
                                </div>
                                <div>
                                    <div className="font-bold text-lg leading-none mb-1">{animal.title}</div>
                                    <div className={`text-xs uppercase tracking-wider ${selectedAnimal === key ? 'text-slate-400' : 'text-slate-400'}`}>{animal.subtitle}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Affichage Principal */}
                    <div className="lg:col-span-8">
                        <div className={`h-full bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-500`}>
                            {/* Dégradé d'ambiance */}
                            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${animals[selectedAnimal].color} opacity-10 blur-[80px] rounded-full pointer-events-none`}></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl font-black mb-6">{animals[selectedAnimal].title}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                                            <Activity size={14} /> Dynamique
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Chaque système animal a une "signature" comportementale. Le thermostat oscille ou stabilise. La population croît ou s'effondre.
                                        </p>
                                    </div>

                                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg transform rotate-1">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-3 flex items-center gap-2">
                                            <Zap size={14} /> Miroir Projet
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed text-sm italic">
                                            "{animals[selectedAnimal].insight}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stress Test */}
                            <div className="relative z-10 pt-8 border-t border-slate-100">
                                <h3 className="text-sm font-black uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
                                    <ShieldCheck size={16} /> Stress-Test Immédiat
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <StressMetric label="Délai" val="Critique" icon={<Timer size={14} />} />
                                    <StressMetric label="Dominance" val="Instable" icon={<IterationCcw size={14} />} />
                                    <StressMetric label="Seuil" val="Fragile" icon={<Activity size={14} />} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between items-center pt-10 border-t border-slate-200 mt-20">
                    <Link to="/books/thinking-in-systems/chapter-1" className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900">
                            <ArrowLeft size={16} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-xs">Chapitre 01</span>
                    </Link>

                    <Link to="/books/thinking-in-systems/chapter-5" className="group flex items-center gap-3 text-slate-900 hover:text-orange-500 transition-colors">
                        <span className="font-bold uppercase tracking-widest text-xs">Chapitre 05 : Les Pièges</span>
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};

const StressMetric = ({ label, val, icon }) => (
    <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase">
            {icon} {label}
        </div>
        <div className="text-red-900 font-black text-sm">{val}</div>
    </div>
);

export default ThinkingChapter2;
