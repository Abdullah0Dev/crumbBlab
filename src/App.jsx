import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPages from './components/LoadingPages.jsx'; // Import the LoadingPages component
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Overview from './sections/Overview.jsx';
import Footer from './sections/Footer.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Portfolio from './Portfolio.jsx';
import Experience from './sections/Experience.jsx'; 
// const Overview = lazy(() => import('./sections/Overview.jsx'));

const MainLayout = () => {
  return (
    <main className="overflow-x-clip relative">
      <Navbar />
      <Hero />

      <div id="overview-section">
        <Overview />
      </div>
      <Experience />

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
        <Route path="/" element={<MainLayout />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
