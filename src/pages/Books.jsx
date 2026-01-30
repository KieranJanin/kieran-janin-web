import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { books } from '../data/booksData';
import { BookOpen, ShoppingCart, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const Books = () => {
    const [filter, setFilter] = useState('All');
    const [selectedBookId, setSelectedBookId] = useState(null);
    const glideRef = useRef(null);

    const categories = ['All', 'Civil', 'Data', 'Design'];

    const filteredBooks = filter === 'All'
        ? books
        : books.filter(book => book.category === filter || book.tags.includes(filter));

    // Reset selection when filter changes
    useEffect(() => {
        if (filteredBooks.length > 0) {
            setSelectedBookId(filteredBooks[0].id);
        } else {
            setSelectedBookId(null);
        }
    }, [filter]);

    const selectedBook = books.find(b => b.id === selectedBookId);

    useEffect(() => {
        // Debounce slightly to allow DOM update
        const timer = setTimeout(() => {
            if (glideRef.current) {
                const glide = new Glide(glideRef.current, {
                    type: 'carousel',
                    perView: 5,
                    gap: 20,
                    focusAt: 'center',
                    breakpoints: {
                        1024: { perView: 3 },
                        640: { perView: 2, focusAt: 0 }
                    }
                });

                glide.mount();

                return () => glide.destroy();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [filter]);

    return (
        <div className="min-h-screen">
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
                    Select a book to explore its impact.
                </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-8 px-8">
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

            {/* Glide Carousel */}
            {filteredBooks.length > 0 ? (
                <div className="mb-16 relative px-8">
                    {/* Add key={filter} to force full re-render of Glide DOM structure */}
                    <div className="glide" ref={glideRef} key={filter}>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {filteredBooks.map((book) => (
                                    <li key={book.id} className="glide__slide py-4">
                                        <button
                                            onClick={() => setSelectedBookId(book.id)}
                                            className={`w-full group relative transition-all duration-300 ${selectedBookId === book.id ? 'scale-105' : 'scale-95 opacity-50 hover:opacity-100 hover:scale-100'}`}
                                        >
                                            <div className={`aspect-[2/3] w-full rounded-lg overflow-hidden shadow-xl border-2 transition-colors ${selectedBookId === book.id ? 'border-white' : 'border-transparent'}`}>
                                                {book.cover ? (
                                                    <img
                                                        src={book.cover}
                                                        alt={book.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600 text-xs">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Custom Arrows */}
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full border border-white/10 transition-colors z-10" data-glide-dir="<">
                                <ChevronLeft size={24} />
                            </button>
                            <button className="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full border border-white/10 transition-colors z-10" data-glide-dir=">">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="py-20 text-center">
                    <p className="text-zinc-500">No books found for this category.</p>
                </div>
            )}

            {/* Selected Book Details (Panel) */}
            {selectedBook && (
                <div key={selectedBook.id} className="animate-in fade-in slide-in-from-bottom-8 duration-500 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 md:p-12 mb-20 relative overflow-hidden backdrop-blur-sm">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        {/* Details */}
                        <div className="flex-grow space-y-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${selectedBook.category === 'Civil' ? 'bg-blue-900/20 text-blue-400 border border-blue-500/10' :
                                        selectedBook.category === 'Data' ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/10' :
                                            selectedBook.category === 'Design' ? 'bg-amber-900/20 text-amber-400 border border-amber-500/10' :
                                                'bg-zinc-800 text-zinc-400'
                                        }`}>
                                        {selectedBook.category}
                                    </span>
                                    <span className="text-zinc-500 font-mono text-xs">{selectedBook.year}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">{selectedBook.title}</h2>
                                <p className="text-xl text-zinc-400">by {selectedBook.author}</p>
                            </div>

                            <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent"></div>

                            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-light">
                                "{selectedBook.review}"
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {selectedBook.tags.map(tag => (
                                    <span key={tag} className="text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded-md">#{tag}</span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                {selectedBook.guideLink && (
                                    <a
                                        href={selectedBook.guideLink}
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black bg-white px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_15px_theme('colors.white')/20]"
                                    >
                                        <BookOpen className="w-4 h-4" /> Read Guide
                                    </a>
                                )}
                                {selectedBook.link && (
                                    <a
                                        href={selectedBook.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border border-white/20 bg-black/50 px-6 py-3 rounded-lg hover:bg-zinc-800 hover:border-white/40 transition-all"
                                    >
                                        <ShoppingCart className="w-4 h-4" /> Buy Copy
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Books;
