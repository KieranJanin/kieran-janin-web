import React, { useState } from 'react';
import { BookOpen, MousePointer, AlertCircle, Volume2, Map, LayoutGrid, DollarSign, CheckCircle, ChevronDown, ChevronUp, Target, DoorOpen } from 'lucide-react';

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

export default function Chapter5() {
    return (
        <div className="min-h-screen font-sans selection:bg-black selection:text-[#FFD500]" style={{ backgroundColor: COLORS.yellow }}>
            <header className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-block border-2 border-black px-4 py-1 rounded-full mb-6 bg-white">
                    <h3 className="text-black text-sm font-black tracking-widest uppercase">CHAPITRE 5</h3>
                </div>
                <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-black mb-4 leading-none">
                    Architecture<br />du Choix
                </h1>
                <p className="mt-6 text-base md:text-xl font-bold text-black max-w-2xl mx-auto leading-relaxed border-b-4 border-black pb-8">
                    Le framework NUDGES. Le manuel pratique pour concevoir des environnements intelligents.
                </p>
            </header>

            <main className="max-w-3xl mx-auto px-6 pb-24">

                {/* Intro Card */}
                <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                    <h3 className="text-xl md:text-2xl font-black text-black mb-2">La Parabole de la Porte</h3>
                    <p className="text-sm md:text-lg text-black mb-6">
                        Une porte avec de grandes poignées verticales crie "TIREZ". Si elle s'ouvre en poussant, c'est une <strong>mauvaise architecture</strong>.
                    </p>
                    <div className="bg-gray-100 border-2 border-black p-4 rounded text-center font-bold">
                        Si vous devez mettre un panneau "POUSSEZ", votre design est raté.
                    </div>
                </div>

                {/* Section 1: Compatibility */}
                <Section
                    title="Compatibilité Stimulus-Réponse"
                    icon={DoorOpen}
                    auditQuestion="Si le trou est rond, il suggère 'bouteille'. S'il est carré, il suggère 'carton'. Si l'utilisateur doit lire une étiquette, vous avez perdu. Le design doit crier 'METS LE MÉTAL ICI'."
                >
                    <p className="mb-4">
                        Le signal (stimulus) doit être cohérent avec l'action.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4 font-medium">
                        <li><strong>Test de Stroop :</strong> Lire <span className="text-green-600 font-bold">ROUGE</span> en vert fait buguer le cerveau.</li>
                        <li><strong>Affordance :</strong> Plaque = Pousser. Poignée = Tirer.</li>
                    </ul>
                </Section>

                {/* Section 2: Defaults */}
                <Section
                    title="Options par Défaut"
                    icon={MousePointer}
                    auditQuestion="L'option par défaut actuelle est 'Laisser la bouteille par terre'. C'est le chemin de moindre résistance. Votre borne doit être sur ce chemin."
                >
                    <p className="mb-4">
                        Le chemin de moindre résistance gagne toujours. Les options par défaut sont inévitables.
                    </p>
                </Section>

                {/* Section 3: Expect Error */}
                <Section
                    title="Prévoir l'Erreur"
                    icon={AlertCircle}
                    auditQuestion="Vos utilisateurs sont high, fatigués, ou dans le noir. Ils VONT faire des erreurs. Le système pardonne-t-il ?"
                >
                    <p className="mb-4">
                        Un bon système anticipe l'idiotie.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4 font-medium">
                        <li><strong>Métro Paris :</strong> Ticket marche dans les 2 sens (Génie).</li>
                        <li><strong>Bouchon Réservoir :</strong> Attaché pour ne pas l'oublier.</li>
                        <li><strong>Forcing Function :</strong> Retirer la carte avant d'avoir les billets.</li>
                    </ul>
                </Section>

                {/* Section 4: Feedback */}
                <Section
                    title="Donner du Feedback"
                    icon={Volume2}
                    auditQuestion="Ajoutez un feedback artificiel. Un 'clong' satisfaisant ? Une lumière verte ? Sans feedback, pas de satisfaction."
                >
                    <p className="mb-4">
                        Les humains ont besoin de savoir immédiatement s'ils ont réussi.
                    </p>
                    <p className="font-bold">
                        Ex: Le faux "clic" des appareils photos numériques.
                    </p>
                </Section>

                {/* Section 5: Mappings */}
                <Section
                    title="Comprendre les Correspondances"
                    icon={Map}
                    auditQuestion="Traduisez '300g de métal' en '1 place de ciné' ou 'Évite une explosion'. Aidez à mapper l'acte sur le résultat."
                >
                    <p className="mb-4">
                        Difficile de traduire des données techniques en expérience vécue.
                    </p>
                    <p>
                        Dites "Format Poster" plutôt que "7 Mégapixels".
                    </p>
                </Section>

                {/* Section 6: Complex Choices */}
                <Section
                    title="Structurer les Choix"
                    icon={LayoutGrid}
                    auditQuestion="Le tri est trop complexe. Simplifiez la structure. Bouteille -> Trou Spécial. C'est tout."
                >
                    <p className="mb-4">
                        Trop d'options tuent le choix. Simplifiez la structure.
                    </p>
                </Section>

                {/* Section 7: Incentives */}
                <Section
                    title="Incitations (Incentives)"
                    icon={DollarSign}
                    auditQuestion="Conflit d'intérêt : Paprec économise, l'utilisateur fait l'effort. Paprec doit transférer une partie des gains vers l'utilisateur pour aligner les intérêts."
                >
                    <p className="mb-4">
                        Qui utilise ? Qui choisit ? Qui paie ? Qui profite ?
                    </p>
                    <p className="font-bold">
                        Rendre les coûts ou bénéfices SAILLANTS.
                    </p>
                </Section>

                {/* Summary Card - NUDGES */}
                <div className="bg-black text-[#FFD500] p-8 rounded-xl shadow-[8px_8px_0px_0px_#D93025] mt-12 transform rotate-1 border-4 border-black">
                    <h2 className="text-4xl font-serif font-black mb-8 text-center text-white">N.U.D.G.E.S</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                        <div className="flex items-center gap-3"><span className="font-black text-2xl text-[#D93025]">N</span> iNcentives</div>
                        <div className="flex items-center gap-3"><span className="font-black text-2xl text-[#D93025]">U</span> Understand mappings</div>
                        <div className="flex items-center gap-3"><span className="font-black text-2xl text-[#D93025]">D</span> Defaults</div>
                        <div className="flex items-center gap-3"><span className="font-black text-2xl text-[#D93025]">G</span> Give feedback</div>
                        <div className="flex items-center gap-3"><span className="font-black text-2xl text-[#D93025]">E</span> Expect error</div>
                        <div className="flex items-center gap-3"><span className="font-black text-2xl text-[#D93025]">S</span> Structure choices</div>
                    </div>
                </div>

            </main>

            <footer className="bg-black text-white py-12 px-6 text-center">
                <BookOpen className="mx-auto mb-4 text-[#FFD500]" size={32} />
                <p className="font-serif text-xl font-bold">Thaler & Sunstein</p>
            </footer>
        </div>
    );
}
