import React, { useState } from 'react';
import { BookOpen, Scale, AlertOctagon, Repeat, Activity, HelpCircle, ShoppingBag, ChevronDown, ChevronUp, Target, TrendingDown } from 'lucide-react';

const COLORS = {
    yellow: '#FFD500',
    black: '#111111',
    white: '#FFFFFF',
    accent: '#D93025'
};

const Section = ({ title, icon: Icon, children, auditQuestion }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`p-6 rounded-xl cursor-pointer flex justify-between items-center transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${isOpen ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${isOpen ? 'bg-[#FFD500] text-black' : 'bg-black text-white'}`}>
                        <Icon size={24} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-xl font-serif font-bold">{title}</h2>
                </div>
                {isOpen ? <ChevronUp className="text-[#FFD500]" /> : <ChevronDown />}
            </div>

            {isOpen && (
                <div className="bg-white border-x-4 border-b-4 border-black rounded-b-xl p-8 -mt-2 pt-6 shadow-xl animate-in fade-in slide-in-from-top-2 mx-2">
                    <div className="prose max-w-none text-black font-medium text-sm md:text-lg leading-relaxed mb-8">
                        {children}
                    </div>

                    {auditQuestion && (
                        <div className="mt-6 bg-[#FFD500] border-2 border-black p-6 rounded-lg relative overflow-hidden shadow-md">
                            <div className="flex items-start gap-4">
                                <Target className="text-black mt-1 flex-shrink-0" size={28} strokeWidth={3} />
                                <div>
                                    <h4 className="font-black text-black uppercase tracking-widest text-xs mb-2 bg-white inline-block px-2 py-1 rounded border border-black">
                                        Audit de Projet
                                    </h4>
                                    <p className="text-base font-bold text-black italic leading-snug">
                                        "{auditQuestion}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function Chapter4() {
    return (
        <div className="min-h-screen font-sans selection:bg-black selection:text-[#FFD500]" style={{ backgroundColor: COLORS.yellow }}>
            <header className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-block border-2 border-black px-4 py-1 rounded-full mb-6 bg-white">
                    <h3 className="text-black text-sm font-black tracking-widest uppercase">CHAPITRE 4</h3>
                </div>
                <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-black mb-4 leading-none">
                    Besoin d'un<br />Nudge ?
                </h1>
                <p className="mt-6 text-base md:text-xl font-bold text-black max-w-2xl mx-auto leading-relaxed border-b-4 border-black pb-8">
                    La check-list pour savoir quand le marché libre échoue et quand intervenir.
                </p>
            </header>

            <main className="max-w-3xl mx-auto px-6 pb-24">

                {/* Intro Card */}
                <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                    <p className="text-base md:text-xl font-bold text-black leading-relaxed">
                        <span className="bg-black text-white px-2 py-1 mr-2">La Règle d'Or :</span>
                        Offrir des nudges qui sont le plus susceptibles d'aider et le moins susceptibles de nuire.
                    </p>
                    <div className="mt-6 p-4 border-2 border-black border-dashed rounded-lg bg-[#FFFBEB]">
                        <p className="font-bold text-black">
                            Les gens ont besoin d'aide pour les décisions :
                            <br />1. Difficiles
                            <br />2. Rares
                            <br />3. Sans feedback immédiat
                        </p>
                    </div>
                </div>

                {/* Section 1: Benefits Now, Costs Later */}
                <Section
                    title="Bénéfices Maintenant, Coûts Plus Tard"
                    icon={TrendingDown}
                    auditQuestion="Le protoxyde est un 'Bien de Tentation' : Plaisir immédiat, coûts (explosion) invisibles. Vous DEVEZ créer un bénéfice immédiat (récompense) pour compenser l'effort du tri."
                >
                    <p className="mb-4">
                        Problèmes de maîtrise de soi (Self-control).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4 font-medium">
                        <li><strong>Biens d'investissement :</strong> Coûts immédiats, bénéfices tardifs (Sport). On en fait trop peu.</li>
                        <li><strong>Biens de tentation :</strong> Plaisir immédiat, coûts tardifs (Donuts, Gaz). On en abuse.</li>
                    </ul>
                </Section>

                {/* Section 2: Difficulty */}
                <Section
                    title="Degré de Difficulté"
                    icon={AlertOctagon}
                    auditQuestion="Vos utilisateurs ne comprennent pas la physique des explosions. Simplifiez le choix : 'Bouteille ici = Bien'. Ne faites pas de pédagogie complexe."
                >
                    <p className="mb-4">
                        Tout le monde sait lacer ses chaussures. Peu de gens savent choisir une hypothèque.
                    </p>
                    <p className="font-bold">
                        Pas de "correcteur orthographique" pour les choix de vie complexes.
                    </p>
                </Section>

                {/* Section 3: Frequency */}
                <Section
                    title="Fréquence & Rareté"
                    icon={Repeat}
                    auditQuestion="Jeter une bouteille correctement n'est pas une habitude fréquente pour eux. Si la fréquence est faible, le nudge doit être puissant et explicite à chaque fois."
                >
                    <p className="mb-4">
                        La pratique rend parfait. Mais on ne choisit sa carrière ou sa maison que rarement.
                    </p>
                    <p>
                        Les enjeux élevés + faible fréquence = Besoin critique de Nudge.
                    </p>
                </Section>

                {/* Section 4: Feedback */}
                <Section
                    title="Le Feedback"
                    icon={Activity}
                    auditQuestion="Point critique. Jeter dans la poubelle normale ne donne aucun feedback négatif immédiat. Votre borne DOIT fournir un feedback sensoriel (bruit, lumière) pour valider le bon geste."
                >
                    <p className="mb-4">
                        L'apprentissage nécessite un retour immédiat. Putter dans le noir ne permet pas de progresser au golf.
                    </p>
                    <p className="bg-black text-white p-2 rounded text-center font-bold">
                        Pas de feedback = Pas d'apprentissage.
                    </p>
                </Section>

                {/* Section 5: Knowing What You Like */}
                <Section
                    title="Savoir ce qu'on Aime"
                    icon={HelpCircle}
                    auditQuestion="Ils ont du mal à traduire 'Je veux être citoyen' en 'Je vais à ce point de collecte'. Aidez-les à traduire."
                >
                    <p className="mb-4">
                        Face à un menu en langue étrangère, on ne sait pas choisir. Il faut un "Plat du Chef" (Défaut).
                    </p>
                </Section>

                {/* Section 6: Markets */}
                <Section
                    title="Les Marchés ne suffisent pas"
                    icon={ShoppingBag}
                    auditQuestion="Le marché a intérêt à vendre plus de gaz, pas à le récupérer. Ne comptez pas sur les vendeurs pour résoudre le problème."
                >
                    <div className="bg-red-100 p-4 rounded border-2 border-[#D93025] mb-4">
                        <strong className="text-[#D93025] block mb-2 uppercase font-black">L'Extension de Garantie</strong>
                        <p className="text-sm font-medium text-black">
                            Le marché continue de vendre des garanties inutiles à 20$ car c'est rentable d'exploiter la peur irrationnelle des consommateurs.
                        </p>
                    </div>
                </Section>

            </main>

            <footer className="bg-black text-white py-12 px-6 text-center">
                <BookOpen className="mx-auto mb-4 text-[#FFD500]" size={32} />
                <p className="font-serif text-xl font-bold">Thaler & Sunstein</p>
            </footer>
        </div>
    );
}
