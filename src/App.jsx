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
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Immersive Pages (Full Screen, Custom Layouts) */}
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />

          {/* Standard Pages (Shared Header/Layout) */}
          <Route element={<Layout />}>
            <Route path="civil-engineering" element={<CivilEngineering />} />
            <Route path="data-science" element={<DataScience />} />
            <Route path="design-thinking" element={<DesignThinking />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* Catch all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
