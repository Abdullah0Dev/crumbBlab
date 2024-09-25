import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Hero = lazy(() => import('./sections/Hero.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));
const Navbar = lazy(() => import('./sections/Navbar.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Clients = lazy(() => import('./sections/Clients.jsx'));
const Portfolio = lazy(() => import('./Portfolio.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
const Overview = lazy(() => import('./sections/Overview.jsx'));

const MainLayout = () => {
  return (
    <main className="overflow-x-clip relative">
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>Loading Overview...</div>}>
        <Overview />
      </Suspense>

      <Suspense fallback={<div>Loading Experience...</div>}>
        <WorkExperience />
      </Suspense>

      <Suspense fallback={<div>Loading Clients...</div>}>
        <Clients />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/portfolio" element={
            <Suspense fallback={<div>Loading Portfolio...</div>}>
              <Portfolio />
            </Suspense>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
