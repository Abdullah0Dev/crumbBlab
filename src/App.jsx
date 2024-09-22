import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Portfolio from './Portfolio.jsx';
import WorkExperience from './sections/Experience.jsx';
import Overview from './sections/Overview.jsx';

const MainLayout = () => {
  return (
    <main className="overflow-x-clip relative">
      <Navbar />
      <Hero />
      <Overview />
      <WorkExperience />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<MainLayout />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
