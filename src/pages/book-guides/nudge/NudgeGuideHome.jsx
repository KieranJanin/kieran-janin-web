import React from 'react';
import { ArrowRight, Brain, Flame, Users, AlertTriangle, Map, Zap, Target, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = {
    yellow: '#FFD500', // Le jaune vibrant de la couverture
    black: '#111111',
    white: '#FFFFFF',
    text: '#111111',
    accent: '#D93025' // Une touche de rouge pour les alertes (comme "New York Times Bestseller")
};

const ChapterCard = ({ number, title, subtitle, icon: Icon, link, highlight }) => (
    <Link
        to={link}
        className={`group relative block p-8 rounded-xl border-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${highlight
            ? 'bg-white border-black'
            : 'bg-white/90 border-transparent hover:border-black'
            }`}
    >
        <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-full border-2 border-black ${highlight ? 'bg-black text-white' : 'bg-transparent text-black group-hover:bg-black group-hover:text-white'} transition-colors`}>
                <Icon size={24} />
            </div>
            <span className="font-serif text-4xl md:text-6xl font-bold opacity-10 text-black group-hover:opacity-20 transition-opacity">
                {number}
            </span>
        </div>

        <h3 className="text-2xl font-bold text-black mb-2 font-serif group-hover:underline decoration-4 decoration-[#FFD500] underline-offset-4 transition-all">
            {title}
        </h3>
        <p className="text-sm text-gray-800 leading-relaxed mb-6 font-medium">
            {subtitle}
        </p>

        <div className="flex items-center text-xs font-black tracking-widest uppercase text-black">
            Explorer <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
    </Link>
);

export default function NudgeGuideHome() {
    return (
        <div className="min-h-screen font-sans text-[#111111]" style={{ backgroundColor: COLORS.yellow }}>

            {/* Hero Section */}
            <header className="relative pt-24 pb-20 px-6 border-b-4 border-black">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#FFD500] text-xs font-black tracking-widest uppercase mb-6 shadow-md transform -rotate-2">
                            <Zap size={14} />
                            Guide Stratégique Paprec
                        </div>
                        <h1 className="text-5xl md:text-9xl font-serif font-black tracking-tighter text-black mb-4 leading-none">
                            Nudge
                        </h1>
                        <p className="text-xl md:text-2xl font-serif font-bold text-black mb-8 max-w-lg italic">
                            Improving Decisions About Health, Wealth, and Happiness
                        </p>
                        <div className="bg-white border-l-8 border-black p-6 shadow-lg mb-8 transform rotate-1">
                            <p className="text-black font-medium leading-relaxed">
                                <span className="font-black uppercase">Mission :</span> Transformer l'audit théorique en plan de bataille concret pour empêcher les bouteilles de protoxyde d'exploser.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link to="chapter-1" className="px-8 py-4 bg-black text-[#FFD500] font-black rounded-lg border-2 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                COMMENCER
                            </Link>
                        </div>
                    </div>

                    {/* Book Cover */}
                    <div className="relative hidden md:flex justify-center items-center h-full min-h-[400px]">
                        <img
                            src="/book-covers/nudge.jpg"
                            alt="Nudge Book Cover"
                            className="w-64 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform rotate-3 hover:rotate-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </header>

            {/* Main Grid */}
            <main className="max-w-6xl mx-auto px-6 py-20">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-serif font-black text-black">Les Chapitres</h2>
                        <p className="text-black font-bold mt-2 text-lg">Sélectionnés pour le projet Protoxyde.</p>
                    </div>
                    <div className="hidden md:block h-1 flex-1 bg-black ml-8 mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <ChapterCard
                        number="01"
                        title="Biais & Étourderies"
                        subtitle="Pourquoi vos utilisateurs ne sont pas rationnels. Comprendre les deux systèmes de pensée (Automatique vs Réflectif)."
                        icon={Brain}
                        link="chapter-1"
                        highlight={false}
                    />

                    <ChapterCard
                        number="02"
                        title="Résister à la Tentation"
                        subtitle="Le conflit entre le Planificateur et l'Exécutant. États chauds (fête/high) vs États froids (réflexion)."
                        icon={Flame}
                        link="chapter-2"
                        highlight={false}
                    />

                    <ChapterCard
                        number="03"
                        title="Suivre le Troupeau"
                        subtitle="La preuve sociale. Si tout le monde jette par terre, je jette par terre. Comment créer une nouvelle norme."
                        icon={Users}
                        link="chapter-3"
                        highlight={true}
                    />

                    <ChapterCard
                        number="04"
                        title="Besoin d'un Nudge ?"
                        subtitle="Pourquoi le marché libre ne résoudra pas le problème. Analyse des choix difficiles et sans feedback."
                        icon={AlertTriangle}
                        link="chapter-4"
                        highlight={false}
                    />

                    <ChapterCard
                        number="05"
                        title="Architecture du Choix"
                        subtitle="Le framework NUDGES. Options par défaut, Feedback, et gestion des erreurs. Indispensable pour le prototype."
                        icon={Map}
                        link="chapter-5"
                        highlight={true}
                    />

                    {/* Bonus Card */}
                    <div className="group relative block p-8 rounded-xl border-4 border-black border-dashed bg-[#FFD500] hover:bg-white transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 rounded-full border-2 border-black text-black">
                                <LayoutGrid size={24} />
                            </div>
                            <span className="font-serif text-5xl font-bold opacity-30 text-black">
                                +
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2 font-serif">
                            Concepts Avancés
                        </h3>
                        <p className="text-sm text-black font-medium leading-relaxed mb-6">
                            Loteries à regret, Feedback visuel (Ambient Orb) et Gamification.
                        </p>
                        <div className="flex items-center text-xs font-black tracking-widest uppercase text-black">
                            À venir
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black text-[#FFD500] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Target className="mx-auto mb-6 text-white" size={64} />
                    <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">
                        L'Objectif Final :<br />Zéro Explosion
                    </h2>
                    <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
                        "Si vous voulez encourager les gens à faire quelque chose, rendez la chose facile."
                    </p>
                    <div className="inline-block px-10 py-5 bg-[#FFD500] text-black font-black text-lg rounded-lg shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer uppercase tracking-widest">
                        Accéder au Prototype
                    </div>
                </div>
            </footer>

        </div>
    );
}
