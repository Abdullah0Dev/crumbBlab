import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPages from './components/LoadingPages.jsx'; // Import the LoadingPages component
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Overview from './sections/Overview.jsx';

const Footer = lazy(() => import('./sections/Footer.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Clients = lazy(() => import('./sections/Clients.jsx'));
const Portfolio = lazy(() => import('./Portfolio.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
// const Overview = lazy(() => import('./sections/Overview.jsx'));

const MainLayout = () => {
  return (
    <main className="overflow-x-clip relative">
      <Navbar />
      <Hero />

      {/* <Suspense fallback={<LoadingPages />}> */}
        <Overview />
      {/* </Suspense> */}

      <Suspense fallback={<LoadingPages />}>
        <WorkExperience />
      </Suspense>

      <Suspense fallback={<LoadingPages />}>
        <Clients />
      </Suspense>

      <Suspense fallback={<LoadingPages />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingPages />}>
        <Footer />
      </Suspense>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPages />}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<LoadingPages />}>
                <Portfolio />
              </Suspense>
            }
          />
        </Routes>
      </Suspense> 
    </Router>
  );
};

export default App;
