import Hero from './sections/Hero.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import WorkExperience from './sections/Experience.jsx';
import React from 'react';
import Overview from './sections/Overview.jsx';
import Projects from './sections/Projects.jsx';
const App = () => {
  return (
    <main className=" overflow-x-clip relative">
      {/* <Navbar /> */}
      <Hero />
      <Overview />
      <WorkExperience />
      {/* <Projects /> */}
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
