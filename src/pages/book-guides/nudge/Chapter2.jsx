import React, { useState } from 'react';
import { BookOpen, Flame, Snowflake, Clock, Zap, PiggyBank, ShieldAlert, ChevronDown, ChevronUp, Target, BrainCircuit } from 'lucide-react';

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

export default function Chapter2() {
    return (
        <div className="min-h-screen font-sans selection:bg-black selection:text-[#FFD500]" style={{ backgroundColor: COLORS.yellow }}>
            <header className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-block border-2 border-black px-4 py-1 rounded-full mb-6 bg-white">
                    <h3 className="text-black text-sm font-black tracking-widest uppercase">CHAPITRE 2</h3>
                </div>
                <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-black mb-4 leading-none">
                    Résister à<br />la Tentation
                </h1>
                <p className="mt-6 text-base md:text-xl font-bold text-black max-w-2xl mx-auto leading-relaxed border-b-4 border-black pb-8">
                    Le conflit éternel entre ce que nous voulons faire (Planificateur) et ce que nous faisons vraiment (Exécutant).
                </p>
            </header>

            <main className="max-w-3xl mx-auto px-6 pb-24">

                {/* Intro Card */}
                <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                    <h3 className="text-xl md:text-2xl font-black text-black mb-2">Les Noix de Cajou de Thaler</h3>
                    <p className="text-sm md:text-lg text-black mb-6">
                        Thaler sert des noix. Les invités mangent tout. Thaler retire le bol. Les invités le <em>remercient</em>.
                    </p>
                    <div className="bg-black text-white p-4 rounded-lg transform -rotate-1">
                        <p className="text-sm font-bold">
                            <span className="text-[#FFD500]">LE PARADOXE :</span> En théorie, moins de choix = moins de bonheur. En réalité, sans volonté, moins de choix (pas de bol) = soulagement.
                        </p>
                    </div>
                </div>

                {/* Section 1: Incohérence Temporelle */}
                <Section
                    title="Le Planificateur vs L'Exécutant"
                    icon={BrainCircuit}
                    auditQuestion="Vous concevez pour le Planificateur (l'utilisateur calme qui veut bien faire). Mais c'est l'Exécutant (l'utilisateur pressé) qui tient le déchet. L'Exécutant gagnera toujours."
                >
                    <p className="mb-4">
                        Nos préférences changent. Samedi matin : "Je vais faire du sport". Samedi 16h : "Je regarde le foot".
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-gray-100 rounded border-2 border-black border-dashed">
                            <strong className="text-black block mb-2 font-black uppercase">Le Planificateur</strong>
                            <p className="text-sm font-medium">Votre côté "Mr. Spock". Soucieux de l'avenir et de l'environnement.</p>
                        </div>
                        <div className="p-4 bg-white rounded border-2 border-black shadow-[4px_4px_0px_0px_#D93025]">
                            <strong className="text-[#D93025] block mb-2 font-black uppercase">L'Exécutant</strong>
                            <p className="text-sm font-medium">Votre côté "Homer Simpson". Impulsif, veut du plaisir <em>maintenant</em>.</p>
                        </div>
                    </div>
                </Section>

                {/* Section 2: Hot vs Cold States */}
                <Section
                    title="États Chauds & Froids"
                    icon={Flame}
                    auditQuestion="L'utilisateur est en 'État Chaud' (pressé/énervé/tenté). Les risques futurs sont invisibles. Votre nudge doit fonctionner DANS l'état chaud."
                >
                    <div className="flex gap-4 items-center mb-6">
                        <div className="flex-1 text-center p-3 bg-blue-100 rounded border-2 border-black text-black">
                            <Snowflake className="mx-auto mb-2" size={24} />
                            <strong className="font-black">FROID</strong>
                            <div className="text-xs font-bold mt-1">Calme</div>
                        </div>
                        <div className="flex-1 text-center p-3 bg-red-100 rounded border-2 border-black text-black">
                            <Flame className="mx-auto mb-2 text-[#D93025]" size={24} />
                            <strong className="font-black text-[#D93025]">CHAUD</strong>
                            <div className="text-xs font-bold mt-1">Excité</div>
                        </div>
                    </div>
                    <p className="mb-4 font-bold">
                        Le fossé d'empathie : À froid, on sous-estime à quel point on perdra le contrôle à chaud.
                    </p>
                </Section>

                {/* Section 3: Mindless Choosing */}
                <Section
                    title="Le Choix Inconscient"
                    icon={Zap}
                    auditQuestion="Si la poubelle normale est plus proche, le geste de jeter sera automatique. Votre borne doit physiquement interrompre cet automatisme."
                >
                    <p className="mb-4">
                        Nous mangeons 53% de plus de popcorn rassis s'il est dans un sceau géant.
                    </p>
                    <p className="font-black italic">
                        "Je ne me fais pas avoir" disent-ils. Ils ont tort. L'architecture dicte l'action.
                    </p>
                </Section>

                {/* Section 4: Self Control Strategies */}
                <Section
                    title="Stratégies de Maîtrise"
                    icon={Clock}
                    auditQuestion="Sans contrainte externe (comme 'Clocky' ou une consigne), la volonté échoue. Créez un système d'engagement."
                >
                    <ul className="list-disc pl-5 space-y-3 font-medium">
                        <li><strong>Clocky :</strong> Le réveil qui s'enfuit.</li>
                        <li><strong>Paris Punitions :</strong> Payer un ami si on ne finit pas son travail.</li>
                        <li><strong>Clubs de Noël :</strong> Bloquer son argent volontairement pour ne pas le dépenser.</li>
                    </ul>
                </Section>

                {/* Section 5: Mental Accounting */}
                <Section
                    title="Comptabilité Mentale"
                    icon={PiggyBank}
                    auditQuestion="L'objet jetable est-il un 'Déchet' (valeur 0) ou de l''Argent' (consigne) ? Si c'est de l'argent ('House Money'), on le protège."
                >
                    <p className="mb-4">
                        L'argent est fongible, mais pas dans nos têtes. On a des "bocaux mentaux".
                    </p>
                    <p className="bg-[#FFD500] p-2 rounded text-black border border-black font-bold text-center">
                        Transformez l'objet de Passif en Actif.
                    </p>
                </Section>

                <Section
                    title="Audit Final"
                    icon={ShieldAlert}
                    auditQuestion="Le danger est souvent abstrait. Vous devez rendre le coût de l'inaction immédiat et concret."
                >
                    <div className="space-y-4">
                        <div className="p-4 bg-white border-2 border-black rounded shadow-sm">
                            <h4 className="font-black text-[#D93025]">1. Gérer l'État Chaud</h4>
                            <p className="text-sm font-medium">Le système doit être accessible immédiatement, sans friction. Zéro déviation.</p>
                        </div>
                        <div className="p-4 bg-white border-2 border-black rounded shadow-sm">
                            <h4 className="font-black text-[#D93025]">2. Changer le Compte Mental</h4>
                            <p className="text-sm font-medium">Déchet = Ticket de loterie / Bon d'achat.</p>
                        </div>
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
