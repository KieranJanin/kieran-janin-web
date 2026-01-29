import React, { useState } from 'react';
import SEO from '../components/SEO';
import { books } from '../data/booksData';
import { BookOpen, Filter, ShoppingCart, ExternalLink } from 'lucide-react';

const Books = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Civil', 'Data', 'Design'];

    const filteredBooks = filter === 'All'
        ? books
        : books.filter(book => book.category === filter || book.tags.includes(filter));

    return (
        <div>
            <SEO
                title="Library & Readings"
                description="Books that have shaped my thinking on Engineering, Data, and Design."
                keywords="Books, Reading List, Engineering Books, Design Books"
            />

            <div className="mb-12 border-b border-white/5 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
                    Library. <BookOpen className="w-8 h-8 text-zinc-600" />
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    A curated collection of texts that influence my work.
                    Merging structural intuition, algorithmic thinking, and human-centric design.
                </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mr-4">
                    <Filter className="w-4 h-4" /> Filter by Domain
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? 'bg-white text-black'
                                : 'bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Books Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="group p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/20 transition-all flex flex-col md:flex-row gap-8">
                        {/* Book Cover */}
                        <div className="w-full md:w-32 flex-shrink-0">
                            <div className="aspect-[2/3] w-full bg-zinc-800 rounded-lg overflow-hidden border border-white/10 shadow-lg relative group-hover:-translate-y-1 transition-transform duration-300">
                                {book.cover ? (
                                    <img
                                        src={book.cover}
                                        alt={book.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/200x300/18181b/52525b?text=No+Cover';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs text-center p-2">
                                        No Image
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Book Content */}
                        <div className="flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block ${book.category === 'Civil' ? 'bg-blue-900/20 text-blue-400 border border-blue-500/10' :
                                    book.category === 'Data' ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/10' :
                                        book.category === 'Design' ? 'bg-amber-900/20 text-amber-400 border border-amber-500/10' :
                                            'bg-zinc-800 text-zinc-400'
                                    }`}>
                                    {book.category}
                                </span>
                                <span className="text-zinc-600 font-mono text-xs">{book.year}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors leading-tight">{book.title}</h2>
                            <p className="text-zinc-500 text-sm mb-4 font-medium">by {book.author}</p>

                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                                "{book.review}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {book.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium text-zinc-600">#{tag}</span>
                                    ))}
                                </div>

                                {book.link && (
                                    <div className="flex gap-3">
                                        {book.guideLink && (
                                            <a
                                                href={book.guideLink}
                                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white border border-white/20 bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors"
                                            >
                                                <BookOpen className="w-3 h-3" /> Read Guide
                                            </a>
                                        )}
                                        <a
                                            href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-white px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors"
                                        >
                                            <ShoppingCart className="w-3 h-3" /> Buy Now
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredBooks.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-zinc-500">No books found for this category yet.</p>
                </div>
            )}
        </div>
    );
};

export default Books;
