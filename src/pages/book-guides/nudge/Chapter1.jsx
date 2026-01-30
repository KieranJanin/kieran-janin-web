import React, { useState } from 'react';
import { BookOpen, Brain, Anchor, AlertTriangle, Users, TrendingUp, Ban, Layers, Eye, ChevronDown, ChevronUp, Target } from 'lucide-react';

const COLORS = {
    yellow: '#FFD500',
    black: '#111111',
    white: '#FFFFFF',
    accent: '#D93025' // Rouge pour les audits
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

export default function Chapter1() {
    return (
        <div className="min-h-screen font-sans selection:bg-black selection:text-[#FFD500]" style={{ backgroundColor: COLORS.yellow }}>
            {/* Cover Header */}
            <header className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-block border-2 border-black px-4 py-1 rounded-full mb-6 bg-white">
                    <h3 className="text-black text-sm font-black tracking-widest uppercase">CHAPITRE 1</h3>
                </div>
                <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-black mb-4 leading-none">
                    Biais &<br />Étourderies
                </h1>
                <p className="mt-6 text-base md:text-xl font-bold text-black max-w-2xl mx-auto leading-relaxed border-b-4 border-black pb-8">
                    Comment le "Système Automatique" conduit les humains à commettre des erreurs prévisibles.
                </p>
            </header>

            {/* Main Content Grid */}
            <main className="max-w-3xl mx-auto px-6 pb-24">

                {/* Intro Card */}
                <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                    <p className="text-base md:text-xl font-bold text-black leading-relaxed mb-4">
                        <span className="bg-black text-white px-2 py-1">Humains vs Econs :</span>
                    </p>
                    <p className="text-sm md:text-lg text-black mb-6">
                        Les vraies gens ne sont pas les agents économiques rationnels ("Econs") des manuels. Nous sommes des "Humains" — nous calculons mal les risques, nous sommes paresseux, et nous sommes facilement influencés.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg border-2 border-black border-dashed">
                        <h4 className="font-bold text-black mb-1 flex items-center gap-2"><Eye size={18} /> Illusions Visuelles</h4>
                        <p className="text-sm text-gray-800 font-medium">Tout comme nous sommes trompés par des illusions d'optique (les tables de Shepard), nous sommes trompés par des illusions <em>cognitives</em>.</p>
                    </div>
                </div>

                {/* Section 1: Two Systems */}
                <Section
                    title="Les Deux Systèmes"
                    icon={Brain}
                    auditQuestion="Votre prototype actuel suppose probablement que les utilisateurs sont des 'Spocks' soucieux de l'environnement. Les utilisateurs de protoxyde sont des 'Homer Simpson' au moment de la consommation. Votre processus de retour nécessite-t-il une réflexion consciente ? Si oui, il échouera."
                >
                    <p className="mb-4">
                        Le cerveau fonctionne selon deux modes. La plupart des échecs politiques surviennent parce que nous concevons pour le mauvais système.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="p-5 bg-white rounded-lg border-2 border-black shadow-md">
                            <strong className="text-black block mb-3 text-lg font-black uppercase">Système Automatique</strong>
                            <ul className="text-sm space-y-2 text-black font-medium list-disc pl-4 marker:text-[#FFD500]">
                                <li>Non contrôlé & Sans effort</li>
                                <li>Rapide & Inconscient</li>
                                <li>Associatif</li>
                                <li className="font-bold bg-[#FFD500] inline-block px-1">"Homer Simpson"</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-black rounded-lg border-2 border-black shadow-md transform md:rotate-1">
                            <strong className="text-white block mb-3 text-lg font-black uppercase">Système Réflectif</strong>
                            <ul className="text-sm space-y-2 text-gray-300 font-medium list-disc pl-4 marker:text-white">
                                <li>Contrôlé & Laborieux</li>
                                <li>Lent & Conscient de soi</li>
                                <li>Déductif</li>
                                <li className="font-bold text-white underline decoration-[#FFD500]">"Mr. Spock"</li>
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* Section 2: Anchoring */}
                <Section
                    title="Ancrage (Anchoring)"
                    icon={Anchor}
                    auditQuestion="Quel est l''Ancre' de l'effort perçu pour recycler ? Si l'ancre est 'Marcher 10 minutes', ils ajusteront vers le bas : 'Laisser sur le trottoir'. Déplacez l'ancre vers zéro effort."
                >
                    <p className="mb-4">
                        Lorsque nous estimons des valeurs, nous partons d'un nombre connu (l'ancre) et nous ajustons. Généralement, nous n'ajustons pas assez.
                    </p>
                    <p className="bg-gray-100 p-3 rounded border-l-4 border-black italic">
                        <strong>Exemple :</strong> Les montants de dons suggérés (100€, 250€) ancrent les gens à donner plus que si on suggère 50€.
                    </p>
                </Section>

                {/* Section 3: Availability */}
                <Section
                    title="Heuristique de Disponibilité"
                    icon={AlertTriangle}
                    auditQuestion="Le récit 'Je vais me faire attraper par la police au point de collecte' est-il disponible dans leur esprit ? Si oui, le risque perçu est énorme. Rendez le récit 'Anonyme et Sûr' plus disponible."
                >
                    <p className="mb-4">
                        Nous évaluons la probabilité des risques en fonction de la facilité avec laquelle des exemples nous viennent à l'esprit.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 font-bold">
                        <li>On craint plus les homicides (médiatisés) que les suicides (plus fréquents).</li>
                        <li>On achète une assurance APRÈS le tremblement de terre.</li>
                    </ul>
                </Section>

                {/* Section 4: Representativeness */}
                <Section
                    title="Représentativité"
                    icon={Layers}
                    auditQuestion="Votre borne RESSEMBLE-t-elle à un piège de police ? Si elle partage des traits visuels avec l'autorité (couleurs, logo), l'utilisateur l'évitera par automatisme."
                >
                    <p className="mb-4">
                        L'"Heuristique de Similitude". Nous jugeons par stéréotype.
                    </p>
                    <p>
                        <strong>Le problème de "Linda" :</strong> Les gens pensent qu'il est plus probable que Linda soit "guichetière féministe" que juste "guichetière" car elle correspond au stéréotype. C'est illogique, mais humain.
                    </p>
                </Section>

                {/* Section 5: Optimism */}
                <Section
                    title="Optimisme & Excès de Confiance"
                    icon={TrendingUp}
                    auditQuestion="Vos utilisateurs croient : 'Je ne serai pas celui dont la bouteille explosera'. Cet optimisme irréaliste bloque la prévention."
                >
                    <p className="mb-4 text-2xl font-black">
                        90% des conducteurs pensent conduire mieux que la moyenne.
                    </p>
                    <p>
                        Les gens sous-estiment systématiquement leurs propres risques (divorce, accident, maladie).
                    </p>
                </Section>

                {/* Section 6: Gains & Losses */}
                <Section
                    title="Aversion à la Perte & Statu Quo"
                    icon={Ban}
                    auditQuestion="Le statu quo est 'ne rien faire'. Rapporter une bouteille est perçu comme une perte (de temps). Inversez le cadre : Faites sentir que NE PAS rapporter est une perte (d'argent, de réputation)."
                >
                    <p className="mb-4">
                        <strong>Aversion à la Perte :</strong> Perdre 10€ fait deux fois plus mal que gagner 10€ ne fait plaisir.
                    </p>
                    <div className="bg-black text-white p-4 rounded-lg transform rotate-1">
                        <p className="text-sm font-bold uppercase tracking-widest text-[#FFD500] mb-1">Le Pouvoir du Défaut</p>
                        <p>Si une option est "par défaut" (ex: abonnement tacite), elle gagne toujours.</p>
                    </div>
                </Section>

            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-12 px-6 text-center">
                <BookOpen className="mx-auto mb-4 text-[#FFD500]" size={32} />
                <p className="font-serif text-xl font-bold">Thaler & Sunstein</p>
            </footer>
        </div>
    );
}
