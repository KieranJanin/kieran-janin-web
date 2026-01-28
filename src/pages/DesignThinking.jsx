import React from 'react';
import SEO from '../components/SEO';
import { Lightbulb, Users, PenTool } from 'lucide-react';

const DesignThinking = () => {
    return (
        <div>
            <SEO
                title="Design Thinking & Innovation"
                description="Human-Centric Infrastructure and Industrial Innovation Frameworks using d.school Methodology."
                keywords="Human-Centric Infrastructure, Industrial Innovation Frameworks, d.school Methodology"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                        <Lightbulb className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Design Thinking</h1>
                </div>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Putting humans at the center of infrastructure and industrial innovation frameworks.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-amber-500/20 transition-all group">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-amber-400 transition-colors">
                        <Users className="w-5 h-5" /> User Research
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Conducting ethnographic studies on construction sites to understand the real needs of field engineers and operatives.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-amber-500/20 transition-all group">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-amber-400 transition-colors">
                        <PenTool className="w-5 h-5" /> Prototyping
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Rapid iteration and "dirty prototyping" of new engineering tools to validate hypotheses before scaling development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DesignThinking;
