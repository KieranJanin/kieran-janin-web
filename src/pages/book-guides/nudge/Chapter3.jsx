import React, { useState } from 'react';
import { BookOpen, Users, EyeOff, Zap, MessageCircle, BarChart2, ThumbsUp, Shield, ChevronDown, ChevronUp, Target, Search } from 'lucide-react';

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

export default function Chapter3() {
    return (
        <div className="min-h-screen font-sans selection:bg-black selection:text-[#FFD500]" style={{ backgroundColor: COLORS.yellow }}>
            <header className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-block border-2 border-black px-4 py-1 rounded-full mb-6 bg-white">
                    <h3 className="text-black text-sm font-black tracking-widest uppercase">CHAPITRE 3</h3>
                </div>
                <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter text-black mb-4 leading-none">
                    Suivre le<br />Troupeau
                </h1>
                <p className="mt-6 text-base md:text-xl font-bold text-black max-w-2xl mx-auto leading-relaxed border-b-4 border-black pb-8">
                    La preuve sociale : pourquoi nous préférons avoir tort avec le groupe que raison tout seul.
                </p>
            </header>

            <main className="max-w-3xl mx-auto px-6 pb-24">

                {/* Intro Card */}
                <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                    <p className="text-base md:text-xl font-bold text-black mb-6">
                        Des suicides collectifs de Jonestown aux modes vestimentaires, l'Humain regarde l'Humain.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg border-l-8 border-[#D93025]">
                        <h4 className="font-black text-black mb-1 uppercase">Expérience de Asch</h4>
                        <p className="text-sm text-gray-800 font-medium">
                            Face à une évidence, les gens nient leurs propres yeux si le groupe avant eux donne la mauvaise réponse.
                        </p>
                    </div>
                </div>

                {/* Section 1: Doing What Others Do */}
                <Section
                    title="Faire comme les Autres"
                    icon={Users}
                    auditQuestion="Si votre point de collecte est vide, le message social est : 'Personne n'utilise ça'. S'il est sale, le message est : 'Ici, on jette n'importe comment'. Vous devez amorcer la pompe."
                >
                    <p className="mb-4">
                        Le conformisme est puissant. Nous imitons l'obésité, les habitudes alimentaires, et même les votes des juges.
                    </p>
                    <p className="font-bold">
                        Ignorance pluraliste : Suivre une tradition que personne n'aime, juste parce qu'on croit que les autres l'aiment.
                    </p>
                </Section>

                {/* Section 2: The Spotlight Effect */}
                <Section
                    title="L'Effet de Projecteur"
                    icon={EyeOff}
                    auditQuestion="Vos utilisateurs ont peur d'être vus (honte/illégalité). Ils pensent que tout le monde les regarde. Offrez une invisibilité psychologique."
                >
                    <p className="mb-4">
                        <strong>Expérience du T-shirt Barry Manilow :</strong> On pense que 50% des gens remarquent notre T-shirt ridicule. En réalité ? Seulement 20%.
                    </p>
                    <p className="bg-black text-white p-2 rounded text-center font-bold">
                        Le monde ne vous regarde pas autant que vous le croyez.
                    </p>
                </Section>

                {/* Section 3: Social Nudges */}
                <Section
                    title="Nudges Sociaux & Normes"
                    icon={BarChart2}
                    auditQuestion="Ne dites JAMAIS 'Trop de gens jettent par terre' (Norme Descriptive négative). Cela valide le comportement. Dites 'La majorité rapporte' (Norme Injonctive)."
                >
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="p-4 bg-green-100 rounded border-2 border-black">
                            <strong className="text-black block mb-1 font-black">SUCCÈS</strong>
                            <p className="text-sm font-medium">"90% des gens paient leurs impôts à l'heure." → Augmente la conformité.</p>
                        </div>
                        <div className="p-4 bg-red-100 rounded border-2 border-black">
                            <strong className="text-black block mb-1 font-black">ÉCHEC</strong>
                            <p className="text-sm font-medium">"Beaucoup de gens volent du bois pétrifié." → Le vol a AUGMENTÉ.</p>
                        </div>
                    </div>
                </Section>

                {/* Section 4: The Boomerang Effect */}
                <Section
                    title="L'Effet Boomerang"
                    icon={Zap}
                    auditQuestion="Attention à ne pas décourager ceux qui font 'juste assez'. Le feedback doit être universellement positif."
                >
                    <p className="mb-4">
                        Si vous dites aux gens qu'ils consomment moins d'énergie que la moyenne, ils augmentent leur consommation pour "rejoindre la norme".
                    </p>
                    <p className="font-bold">
                        La solution : Ajouter un smiley 😊 (approbation sociale) bloque l'effet boomerang.
                    </p>
                </Section>

                {/* Section 5: Priming */}
                <Section
                    title="Amorçage (Priming)"
                    icon={MessageCircle}
                    auditQuestion="Au moment de l'achat, posez la question : 'Avez-vous prévu où déposer cette bouteille ?'. Le simple fait de poser la question augmente l'action."
                >
                    <p className="mb-4">
                        <strong>Effet de Simple Mesure :</strong> Demander aux gens s'ils comptent voter augmente le vote de 25%.
                    </p>
                    <p className="font-medium">
                        <strong>Facteurs de Canal :</strong> Montrer une carte et demander <em>quand</em> et <em>comment</em> on ira au centre de santé multiplie l'action par 9. Il faut un plan concret.
                    </p>
                </Section>

                {/* Section 6: Texas */}
                <Section
                    title="Don't Mess with Texas"
                    icon={Shield}
                    auditQuestion="Paprec est une autorité 'ennuyeuse'. Vous avez besoin de figures locales ou 'cool'. Qui est le 'Willie Nelson' de vos utilisateurs ?"
                >
                    <p className="mb-4">
                        Pour empêcher les jeunes hommes de jeter des déchets, le Texas a utilisé des joueurs de football écrasant des canettes.
                    </p>
                    <div className="bg-[#FFD500] text-black p-4 rounded-lg font-black text-center border-2 border-black uppercase text-xl">
                        Don't Mess with Texas
                    </div>
                    <p className="text-center mt-2 text-sm font-medium">Résultat : -72% de déchets.</p>
                </Section>

            </main>

            <footer className="bg-black text-white py-12 px-6 text-center">
                <BookOpen className="mx-auto mb-4 text-[#FFD500]" size={32} />
                <p className="font-serif text-xl font-bold">Thaler & Sunstein</p>
            </footer>
        </div>
    );
}
