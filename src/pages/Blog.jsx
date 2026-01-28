import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosts } from '../lib/ghost';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const fetchedPosts = await getPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error loading posts:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

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

            {loading ? (
                <div className="text-zinc-500 animate-pulse">Loading posts...</div>
            ) : (
                <div className="space-y-6">
                    {posts.map(post => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="block group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/20 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2 text-zinc-500 text-xs uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" /> {formatDate(post.published_at)}
                                        {post.primary_tag && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                <span className="text-zinc-400 font-bold">{post.primary_tag.name}</span>
                                            </>
                                        )}
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{post.title}</h2>
                                    <p className="text-zinc-500 line-clamp-2">{post.excerpt || post.custom_excerpt}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-zinc-600 group-hover:text-white transition-colors shrink-0">
                                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;
