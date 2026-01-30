import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import CivilEngineering from './pages/CivilEngineering';
import DataScience from './pages/DataScience';
import DesignThinking from './pages/DesignThinking';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Archive from './pages/Archive';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Books from './pages/Books';
import NotFound from './pages/NotFound';

// Nudge Guide Imports
import NudgeLayout from './pages/book-guides/nudge/NudgeLayout';
import NudgeGuideHome from './pages/book-guides/nudge/NudgeGuideHome';
import Chapter1 from './pages/book-guides/nudge/Chapter1';
import Chapter2 from './pages/book-guides/nudge/Chapter2';
import Chapter3 from './pages/book-guides/nudge/Chapter3';
import Chapter4 from './pages/book-guides/nudge/Chapter4';
import Chapter5 from './pages/book-guides/nudge/Chapter5';

import ComingSoon from './pages/ComingSoon';

import StagingAuth from './components/StagingAuth';


function App() {
  // Check Mode: 'live' (Full Site) or 'coming_soon' (Placeholder)
  // Default to 'live' for safety if undefined, but production will force 'coming_soon'
  const appMode = import.meta.env.VITE_APP_MODE || 'live';

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* 
            LIVE MODE ONLY ROUTES
            These are completely hidden when VITE_APP_MODE is not 'live'.
          */}
          {appMode === 'live' && (
            <Route element={<StagingAuth />}>
              {/* Secret Access to Home in Coming Soon Mode (only if specifically enabled or in live mode) */}
              <Route path="/hidden-home" element={<Home />} />
              <Route path="/archive" element={<Archive />} />

              {/* Standard Pages (Shared Header/Layout) */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="civil-engineering" element={<CivilEngineering />} />
                <Route path="data-science" element={<DataScience />} />
                <Route path="design-thinking" element={<DesignThinking />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="projects" element={<Projects />} />
                <Route path="books" element={<Books />} />

                {/* Nudge Book Guide Routes */}
                <Route path="books/nudge" element={<NudgeLayout />}>
                  <Route index element={<NudgeGuideHome />} />
                  <Route path="chapter-1" element={<Chapter1 />} />
                  <Route path="chapter-2" element={<Chapter2 />} />
                  <Route path="chapter-3" element={<Chapter3 />} />
                  <Route path="chapter-4" element={<Chapter4 />} />
                  <Route path="chapter-5" element={<Chapter5 />} />
                </Route>

                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

                {/* 404 for valid layout paths that don't match */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>
          )}

          {/* 
            COMING SOON MODE FALLBACK 
            If not live, catch ALL other paths and show NotFound (or redirect to /)
          */}
          {appMode !== 'live' && (
            <>
              <Route path="/" element={<ComingSoon />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}



        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
