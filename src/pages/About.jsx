import React from 'react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div>
            <SEO
                title="About Kieran Janin"
                description="Background, education, and philosophy of an integrated engineering practitioner."
                keywords="Kieran Janin Bio, Engineering Philosophy, Education"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About.</h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    The non-linear path from theoretical physics to muddy construction sites and digital twins.
                </p>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none">
                <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    I am an engineer who believes that the separation between "civil infrastructure" and "digital infrastructure" is an outdated concept.
                </p>
                <p className="text-zinc-400 leading-relaxed mb-6">
                    My background spans from the rigor of French "Classes Préparatoires" in Mathematics and Physics to the practical realities of managing large-scale construction sites for Bouygues Travaux Publics.
                    Today, I operate at the intersection of these worlds, using data science and design thinking to build smarter, more resilient systems.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                    <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-2">Education</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li className="flex justify-between"><span>d.school Paris</span> <span>2025</span></li>
                            <li className="flex justify-between"><span>UC Berkeley</span> <span>2020</span></li>
                            <li className="flex justify-between"><span>ESTP Paris</span> <span>2019</span></li>
                        </ul>
                    </div>
                    <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-2">Technical Toolkit</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'React', 'TypeScript', 'PyTorch', 'BIM', 'Grasshopper', 'Docker', 'GCP'].map(skill => (
                                <span key={skill} className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                    I build for the long term. Whether it's a bridge that needs to stand for 100 years or a software architecture that needs to scale with a business, the principles of clarity, resilience, and human-centric design remain the same.
                </p>
            </div>
        </div>
    );
};

export default About;
