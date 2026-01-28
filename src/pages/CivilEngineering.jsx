import React from 'react';
import SEO from '../components/SEO';
import { HardHat, Activity, Box, Zap } from 'lucide-react';

const CivilEngineering = () => {
    return (
        <div>
            <SEO
                title="Civil Engineering & R&D"
                description="Expertise in Structural Health Monitoring, Infrastructure Innovation, and Civil Engineering R&D."
                keywords="Structural Health Monitoring, Infrastructure Innovation, Civil Engineering R&D"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                        <HardHat className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Civil Engineering</h1>
                </div>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Innovating infrastructure through parametric design, structural health monitoring, and automated construction workflows.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-blue-500/20 transition-all group">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                        <Activity className="w-5 h-5" /> Structural Health Monitoring
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Deep dive into sensor networks, fiber optics, and real-time damage detection algorithms for aging infrastructure assets.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-blue-500/20 transition-all group">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                        <Box className="w-5 h-5" /> Parametric Design
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Technical exploration of algorithmic structural optimization using Grasshopper and Python to minimize material usage.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-blue-500/20 transition-all group md:col-span-2">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                        <Zap className="w-5 h-5" /> LabTP R&D
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Leading research developments in digital twins and automated reinforcement placement systems for Bouygues Travaux Publics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CivilEngineering;
