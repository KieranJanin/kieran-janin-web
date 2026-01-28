import React from 'react';
import SEO from '../components/SEO';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Future of Structural Health Monitoring",
            date: "Oct 12, 2025",
            excerpt: "How fiber optic sensors are changing the way we listen to our infrastructure.",
            tag: "Civil"
        },
        {
            id: 2,
            title: "Data-Driven Urban Planning",
            date: "Sep 28, 2025",
            excerpt: "Using mobile network data to redesign public transit nodes for actual human behavior.",
            tag: "Data"
        },
        {
            id: 3,
            title: "Empathy in Engineering",
            date: "Aug 15, 2025",
            excerpt: "Why technical specifications often fail to capture the user experience of built environments.",
            tag: "Design"
        }
    ];

    return (
        <div>
            <SEO
                title="Blog & Thoughts"
                description="Writing on the intersection of civil engineering, data science, and design."
                keywords="Civil Engineering Blog, Data Science Blog, Design Thinking Blog"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">The Blog.</h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Thoughts, tutorials, and rants on the built world and the code that runs it.
                </p>
            </div>

            <div className="space-y-6">
                {posts.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="block group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/20 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2 text-zinc-500 text-xs uppercase tracking-widest">
                                    <Calendar className="w-3 h-3" /> {post.date}
                                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                    <span className="text-zinc-400 font-bold">{post.tag}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{post.title}</h2>
                                <p className="text-zinc-500">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-zinc-600 group-hover:text-white transition-colors">
                                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
