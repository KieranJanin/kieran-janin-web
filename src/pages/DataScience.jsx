import React from 'react';
import SEO from '../components/SEO';
import { Database, Eye, LineChart, Code } from 'lucide-react';

const DataScience = () => {
    return (
        <div>
            <SEO
                title="Data Science & Urban Informatics"
                description="Applying predictive maintenance algorithms and computer vision to engineering data science."
                keywords="Predictive Maintenance Algorithms, Urban Informatics, Engineering Data Science"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                        <Database className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Data Science</h1>
                </div>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Bridging the gap between raw unstructured data and actionable engineering credentials.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all group">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                        <Eye className="w-5 h-5" /> Computer Vision
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Automated defect detection in concrete tunnel linings using custom CNN architectures and drone photogrammetry.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all group">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                        <LineChart className="w-5 h-5" /> Predictive Modeling
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Forecasting maintenance needs and structural degradation curves to optimize lifecycle costs (LCC).
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-emerald-500/20 transition-all group md:col-span-2">
                    <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                        <Code className="w-5 h-5" /> Open Source Tools
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                        Contributing to the ecosystem of python libraries for civil engineering data analysis and BIM interoperability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataScience;
