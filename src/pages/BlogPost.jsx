import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { getSinglePost } from '../lib/ghost';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            setLoading(true);
            try {
                const fetchedPost = await getSinglePost(slug);
                setPost(fetchedPost);
                setError(null);
            } catch (err) {
                console.error("Error fetching post:", err);
                setError("Post not found");
            } finally {
                setLoading(false);
            }
        }
        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (loading) {
        return <div className="text-zinc-500 animate-pulse mt-12">Loading article...</div>;
    }

    if (error || !post) {
        return (
            <div className="flex flex-col items-start gap-4 mt-12">
                <h1 className="text-2xl font-bold text-red-500">Post not found</h1>
                <Link to="/blog" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
            </div>
        );
    }

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    return (
        <article className="max-w-3xl mx-auto">
            <SEO
                title={post.meta_title || post.title}
                description={post.meta_description || post.excerpt}
                image={post.og_image || post.feature_image}
            />

            <header className="mb-12 border-b border-white/5 pb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.published_at)}
                    </div>
                    {post.primary_tag && (
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            <span className="bg-zinc-800 px-2 py-1 rounded text-xs text-zinc-300 uppercase tracking-wide">
                                {post.primary_tag.name}
                            </span>
                        </div>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
                    {post.title}
                </h1>

                {post.custom_excerpt && (
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        {post.custom_excerpt}
                    </p>
                )}

                {post.feature_image && (
                    <figure className="mt-8 rounded-2xl overflow-hidden border border-white/5">
                        <img
                            src={post.feature_image}
                            alt={post.title}
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </figure>
                )}
            </header>

            {/* Ghost HTML Content */}
            <div
                className="prose prose-invert prose-zinc max-w-none prose-lg 
                           prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300
                           prose-code:text-pink-300 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-16 pt-8 border-t border-white/5">
                <Link to="/blog" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Read more articles
                </Link>
            </div>
        </article>
    );
};

export default BlogPost;
