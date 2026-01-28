import React from 'react';
import SEO from '../components/SEO';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div>
            <SEO
                title="Contact"
                description="Get in touch for collaborations, consulting, or general inquiries."
                keywords="Contact Kieran Janin, Engineering Consulting, Collaboration"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Contact.</h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Open to interesting problems in the built environment.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="text-zinc-300 mb-8 leading-relaxed">
                        I'm currently based in Paris, but I work with teams globally.
                        If you're working on something that requires bridging the gap between atoms and bits, let's talk.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:hello@example.com" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl group-hover:bg-zinc-800 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-medium">hello@example.com</span>
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl group-hover:bg-zinc-800 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <span className="font-medium">LinkedIn Profile</span>
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl group-hover:bg-zinc-800 transition-colors">
                                <Github className="w-5 h-5" />
                            </div>
                            <span className="font-medium">GitHub Repositories</span>
                        </a>

                        <div className="flex items-center gap-4 text-zinc-500">
                            <div className="p-3 bg-transparent border border-transparent rounded-xl">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span>Paris, France / Remote</span>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Quick Message</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="you@company.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="How can we build something together?"
                            ></textarea>
                        </div>
                        <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
