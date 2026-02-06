import React from 'react';
import SEO from '../components/SEO';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 p-6 pt-32">
            <SEO
                title="Contact"
                description="Get in touch for collaborations, consulting, or general inquiries."
                keywords="Contact Kieran Janin, Engineering Consulting, Collaboration, Paris, Remote Work"
            />

            <div className="max-w-5xl mx-auto">
                <div className="mb-12 border-b border-zinc-200 dark:border-white/5 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">Contact.</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        Open to interesting problems in the built environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                            I'm currently based in Paris, but I work with teams globally.
                            If you're working on something that requires bridging the gap between atoms and bits, let's talk.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:kieran.janin@gmail.com" className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group">
                                <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-xl group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium">kieran.janin@gmail.com</span>
                            </a>

                            <a href="https://www.linkedin.com/in/kieranjanin/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group">
                                <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-xl group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="font-medium">LinkedIn Profile</span>
                            </a>

                            <a href="https://github.com/KieranJanin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group">
                                <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-xl group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800 transition-colors shadow-sm dark:shadow-none">
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

                    <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none">
                        <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">Quick Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-colors"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-white/30 transition-colors"
                                    placeholder="How can we build something together?"
                                ></textarea>
                            </div>
                            <button className="w-full bg-zinc-900 text-white dark:bg-white dark:text-black font-bold py-3 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors shadow-md dark:shadow-none">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
